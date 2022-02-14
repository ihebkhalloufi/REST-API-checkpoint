const router = require("express").Router()
const User = require("../Model/User")

router.post("/createUser", async(req, res) => {
    try {
        const {FirstName, LastName, Email,Password} = req.body
        const usedemail = await User.findOne({Email})
     if (usedemail) {
            res.status(200).json({status: false, message:"EMAIL ALREADY EXISTE"})
        } else {
            const users = await User.create({FirstName, LastName, Email,Password})
            res.status(200).json({status: true, message:"USER CREATED", data: users})
        }
    } catch(error) {
        res.status(200).json({status: false, message: error ,message:"SOMETHING WRONG !!!"})
    }
})

router.get("/finduser", async(req, res) => {
    try {
        const user= await User.find({})
         if (user) {
             res.status(200).json({status: true, message:"USERS DATA", data: user})
         } else {
            res.status(200).json({status: true, message:"NOTHING USER DATA"})
         }
    } catch(error) {
        res.status(200).json({status: false, message: error ,message:"SOMETHING WRONG !!!"})
    }
})

router.get("/finduser/:id", async(req, res) => {
    try {
        const {id} = req.params
        const user= await User.findById(id)

         if (user) {
             res.status(200).json({status: true, message:"USER DATA", data: user})
         } else {
            res.status(200).json({status: true, message:"NO USER DATA!!!"})
         }
    } catch(error) {
        res.status(200).json({status: false, message: error ,message:"SOMETHING WRONG !!!"})
    }
})
router.delete("/deleteuser/:id", async(req, res) => {
    try {
        const {id} = req.params
        const user = await User.findById(id)

        if (user) {
            await User.findByIdAndDelete(id)
            res.status(200).json({status: true, message:"USER DELETED",data: user})
        } else {
            res.status(200).json({status: true, message:"NO USER DATA !!!"})
        }
    } catch(error) {
        res.status(200).json({status: false, message: error })
    }
})
router.put("/updateuser/:id", async(req, res) => {
    try {
        const {FirstName, LastName,Email,Password} = req.body
        const {id} = req.params

        const user = await User.findById(id)
        const usedEmail = await User.findOne({Email})
       

        if (user) {
          if (usedEmail) {
                res.status(200).json({status: false, message:"EMAIL ALREADI EXISTS"})
            } else
             {
                const users = await Contact.findByIdAndUpdate(id, {FirstName,LastName,Email,Password})
                res.status(200).json({status: true, message:"USER UPDATED", data: users})
            }
        } else {
            res.status(200).json({status: true, message:"SOMETHING WRONG!!!"})
        }
    } catch(error) {
        res.status(500).json({status: false, message: error })
    }
})

module.exports = router;