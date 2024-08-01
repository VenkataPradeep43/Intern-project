const jwt = require('jsonwebtoken')
module.exports = (req,res,next)=>{
    try{
        let token = req.headers['x-auth-token']
        if(!token){
            return res.status(401).json({message:"Unauthrized access"})
        }
        let data = jwt.verify(token,"vlkndfafokfvnvaodkjfn")
        req.user = data.user
        next()

    }
    catch(err){
        return res.status(500).json({message:"Authrization failed..."})
    }
}