const bcrypt = require("bcrypt")
const user = require("../Schema")



const adminlogin=async(req,res)=>{

    const {username,email,password}=await req.body
    const checkadminname=await user.findOne({username})
    

    
    
    if(checkadminname){
               
             const checkpass=await checkadminlog.password 
             const bcryptpass=await bcrypt.compare(password,checkpass)    
             console.log(bcryptpass)   
             if(bcryptpass ==true){

               res.json({
                  id:checkadminlog.id,
                  name:checkadminlog.name,
                  email:checkadminlog.email,
                  password:checkadminlog.password,
                 
                  message:"succsfull"
               })
               
           }
           else{
            return res.json({
               message:"password worng"
           })
            
           }
        }
        
        else{
         return res.json({
            message:"username wrong" 
         })
             
            
        }
    }
    
    module.exports=adminlogin
    
