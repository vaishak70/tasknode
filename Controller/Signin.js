// const user = require("../model/schema")
const Jwt =  require("jsonwebtoken")
const user = require("../Schema")
const bcrypt = require('bcrypt')



const siginin=async(req,res)=>{
    const{username,email,password,course,place,state}=req.body

    const salt=await bcrypt.genSalt(10)
    const hashpassword= await bcrypt.hash(password,salt)
    const checkadminname=await user.findOne({username})


    // const gettoken=(id)=>{
    //     return Jwt.sign({id},`${process.env.JWT_SECRET}`,{
    //         expiresIn:"1d",
    //     })
    
    // }

if(checkadminname){

    
    return res.json(  {  
        name: "user exist"
      })
        

    }
    else{
       


          const userDetail=await user.create({
            username,
            email,
            password,
            
        })
        res.json({
            Id:userDetail._id,
            username:userDetail.username,
            password:hashpassword,
            email:userDetail.email,
            // Token:gettoken(userDetail._id)
        })
       
       
        
    }
   
       
}


 

    
module.exports=siginin