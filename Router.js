const express=require("express")
const siginin = require("./Controller/Signin")
const adminlogin = require("./Controller/Login")

const router=express.Router()


router.route('/signin').post(siginin)
router.route('/login').post(adminlogin)


module.exports=router