const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const {userModel} = require('./models/users')
const {productsModel} = require('./models/product')
const {bookingsModel} = require('./models/bookings')
const auth = require('./middleware/auth')
const jwt = require('jsonwebtoken')

const app =express()
app.use(cors())
app.use(express.json())
const uri = 'mongodb://127.0.0.1:27017/agroshare'


app.get('/',(req,res)=>{
    res.json({message:"Server listening"})
})

app.post('/register',async (req,res)=>{
    try{
        let {firstName,lastName,email,username,password,mobile} = req.body

        let emailDoc = await userModel.findOne({email})
        if(emailDoc){
            return res.status(200).json({status:false,message:"account alrady exist with this email"})
        }

        let usernameDoc = await userModel.findOne({username}) 
        if(usernameDoc){
            return res.status(200).json({status:false,message:"username already taken"})
        }

        let newUser = new userModel({
            firstName,lastName,email,password,username,mobile
        })
        await newUser.save();
        return res.status(200).json({status:true,message:"Registration success"})

    }
    catch(err){
        console.log(err)
        return res.status(500).json({message:"Internal server error"})
    }
})

app.post('/login', async(req,res)=>{
    try{
        let {username,password} = req.body
        let doc = await userModel.findOne({username,password})
        if(!doc){
            return res.status(200).json({auth:false,message:"Incorrecrt Credentials"})
        }
        let payload = {
            user:{
                id:doc._id
            }
        }
        let token = jwt.sign(payload,"vlkndfafokfvnvaodkjfn",{expiresIn:"10h"})
        return res.status(200).json({auth:true,token,message:"Login Success"})

    }
    catch(err){
        console.log(err)
        return res.status(500).json({message:"Internal server error"})
    }
})

app.get('/profile',auth, async(req,res)=>{
    try{
        return res.status(200).json(await userModel.findById(req.user.id))
    }
    catch(err){
        console.log(err)
        return res.status(500).json({message:"Internal server error"})
    }

})

app.get('/products', auth, async (req,res)=>{
    try{
        return res.status(200).json(await productsModel.find({}))
    }
    catch(err){
        console.log(err)
        return res.status(500).json({message:"Internal server error"})
    }
})

app.post('/create',auth,async(req,res)=>{
    try{
        let {name,imageUri,type} = req.body
        let doc = new productsModel({
            name, imageUri,owner:req.user.id,type
        })
        await doc.save()
        return res.status(200).json({message:"Product created..."})
    }
    catch(err){
        console.log(err)
        return res.status(500).json({message:"Internal server error"})
    }
})

app.get('/myproducts', auth ,async (req,res)=>{
    try{
        return res.status(200).json(await productsModel.find({owner:req.user.id}))
    }
    catch(err){
        console.log(err)
        return res.status(500).json({message:"Internal server error"})
    }
})

app.get('/product/:id',auth,async (req,res)=>{
    try{
        let id = req.params.id
        let doc = await productsModel.findById(id)
        if(!doc){
            return res.status(404).json({message:"Product not found that you are looking"})
        }
        return res.status(200).json(doc)
    }
    catch(err){
        console.log(err)
        return res.status(500).json({message:"Internal server error"})
    }
})

app.get('/forming',auth, async(req,res)=>{
    try{
        return res.status(200).json(await productsModel.find({type:"forming"}))
    }
    catch(err){
        console.log(err)
        return res.status(500).json({message:"Internal server error"})
    }
})

app.get('/electric',auth, async(req,res)=>{
    try{
        return res.status(200).json(await productsModel.find({type:"electric"}))
    }
    catch(err){
        console.log(err)
        return res.status(500).json({message:"Internal server error"})
    }
})


app.post('/book',auth,async(req,res)=>{
    try{
        let {requesterAddress,ownerId,productId} = req.body;
        let doc = new bookingsModel({
            requesterAddress,requesterId:req.user.id,ownerId,productId
        })
        await doc.save()
        return res.status(200).json({ack:true ,message:"Booking confirmed..."})
    }
    catch(err){
        console.log(err)
        return res.status(500).json({message:"Internal server error"})
    }
})

app.get('/mybookings',auth,async (req,res)=>{
    try{
        return res.status(200).json(await bookingsModel.find({requesterId:req.user.id}))
    }
    catch(err){
        console.log(err)
        return res.status(500).json({message:"Internal server error"})
    }
})


app.listen(5000,()=>{
    console.log('Server running...')
    mongoose.connect(uri)
    .then(()=>{
        console.log("Database connected...")
    })
    .catch((err)=>{
        console.log(`Error while connecting db: ${err.message}`)
    })
})