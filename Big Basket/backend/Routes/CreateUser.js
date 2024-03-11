const express = require('express');
const router = express.Router()
const User = require('../models/User');
const {body, validationResult} = require('express-validator')
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const jwtSecret = "BigBasketFoodDeliveryApp12345678"

router.post("/createuser",
body('name','Max 50 characters allowed').isLength({max: 20}),
body('email','Not Valid Email').isEmail(),
body('password','Password must be more than 5 characters').isLength({min:5})
 ,async(req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt)

    try {
       await User.create({
            name:req.body.name,
            password:secPassword,
            email:req.body.email,
            location:req.body.location
        }).then(res.json({success:true}))
        
    } catch (error) {
        console.log(error)
        res.json({success:false})
    }
})

router.post("/loginuser",
body('email',"Not Valid Email").isEmail(),
body('password',"Password must be more than 5 characters").isLength({min:5})
 ,async(req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let userData = await User.findOne({email: req.body.email})

      const pwdCompare = await bcrypt.compare(req.body.password,userData.password)
      const data ={
            user:{
                id:userData.id
            }
      }
      const authToken = jwt.sign(data, jwtSecret)
        if(!userData){
            return res.status(400).json({ errors: "Wrong Credintials" });
        }else if(!pwdCompare){
            return res.status(400).json({ errors: "Wrong Credinitials" });
        }else{
           return res.json({success:true, authToken: authToken})
        }
        
    } catch (error) {
        console.log(error)
        res.json({success:false})
    }
})

module.exports = router;