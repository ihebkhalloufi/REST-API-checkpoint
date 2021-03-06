const router = require("express").Router()
const User = require("../Model/User")
/*ADD USER
router.post("/Register", async(req, res) => {
    try {
        const {Username, Email,Age,Password} = req.body
        const usedemail = await User.findOne({Email})
        const usedusername = await User.findOne({Username})
     if (usedemail) {
            res.status(200).json({status: false, message:"EMAIL ALREADY EXISTE"})
        } else
        if (usedusername) {
            res.status(200).json({status: false, message:"USERNAME ALREADY EXISTE"})
        } else {
            const users = await User.create({Username, Email,Age,Password})
            res.status(200).json({status: true, message:"USER REGISETER", data: users})
        }
    } catch(error) {
        res.status(200).json({status: false, message: error ,message:"SOMETHING WRONG !!!"})
    }
})*/
//FIND ALL USERS
router.get("/finduser", async(req, res) => {
    try {
        const user= await User.find({})
         if (user) {
             res.status(200).json({status:false, message:"USERS DATA", data: user})
         } else {
            res.status(200).json({status: false, message:"NOTHING USER DATA"})
         }
    } catch(error) {
        res.status(200).json({status: false, message: error ,message:"SOMETHING WRONG !!!"})
    }
})
//FIND USER BY ID
router.get("/finduser/:id", async(req, res) => {
    try {
        const {id} = req.params
        const user= await User.findById(id)

         if (user) {
             res.status(200).json({status: false, message:"USER DATA", data: user})
         } else {
            res.status(200).json({status: false, message:"NO USER DATA!!!"})
         }
    } catch(error) {
        res.status(200).json({status: false, message: error ,message:"SOMETHING WRONG !!!"})
    }
})
//DELETE USER
router.delete("/deleteuser/:id", async(req, res) => {
    try {
        const {id} = req.params
        const user = await User.findById(id)

        if (user) {
            await User.findByIdAndDelete(id)
            res.status(200).json({status: false, message:"USER DELETED",data: user})
        } else {
            res.status(200).json({status: false, message:"NO USER DATA !!!"})
        }
    } catch(error) {
        res.status(200).json({status: false, message: error })
    }
})
//UPDATE USER
router.put("/updateuser/:id", async(req, res) => {
    try {
        const {Username,Email,Age,Password} = req.body
        const {id} = req.params

        const user = await User.findById(id)
        const usedEmail = await User.findOne({Email})
       

        if (user) {
          if (usedEmail) {
                res.status(200).json({status: false, message:"EMAIL ALREADI EXISTS"})
            } else
             {
                const users = await User.findByIdAndUpdate(id, {Username,Email,Age,Password})
                res.status(200).json({status: false, message:"USER UPDATED", data: users})
            }
        } else {
            res.status(200).json({status: false, message:"SOMETHING WRONG!!!"})
        }
    } catch(error) {
        res.status(200).json({status: false, message: error })
    }
})

module.exports = router;