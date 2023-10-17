const mongoose=require("mongoose")
const conectDB=async()=>{
    try{
        const conn=await mongoose.connect("mongodb+srv://mavaishakan:futuradb123@cluster0.ha7bjw3.mongodb.net/",{

            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        
       console.log("database connected")
    }
    catch(error){
        console.log(`Eror:${error}`)
        process.exit()
    }
}
module.exports=conectDB