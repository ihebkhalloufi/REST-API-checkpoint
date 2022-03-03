const router = require("express").Router()
const User = require("../Model/User")
/*Register */
router.post("/Register", async(req, res) => {
    try {
        const {Username, Email,Age,Password} = req.body
        const usedemail = await User.findOne({Email})
     if (usedemail) {
            res.status(200).json({status: false, message:"EMAIL ALREADY EXISTE"})
        } else {
            const users = await User.create({Username, Email,Age,Password})
            res.status(200).json({status: true, message:"USER REGISETER", data: users})
        }
    } catch(error) {
        res.status(200).json({status: false, message: error ,message:"SOMETHING WRONG !!!"})
    }
})
module.exports = router;