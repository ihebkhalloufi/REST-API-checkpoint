const router = require("express").Router()
const Games = require("../Model/Games")
//ADD GAME
router.post("/Addgame", async(req, res) => {
    try {
        const {Image,Title,Date,Description,Trailer,Price} = req.body
        const usedtitle = await Games.findOne({Title})
     if (usedtitle) {
            res.status(200).json({status: false, message:"GAME NAME ALREADY EXISTE"})
        } else {
            const game = await Games.create({Image,Title,Date,Description,Trailer,Price})
            res.status(200).json({status: true, message:"GAME ADDED", data: game})
        }
    } catch(error) {
        res.status(200).json({status: false, message: error ,message:"SOMETHING WRONG !!!"})
    }
})
//DELETE GAME
router.delete("/deletegame/:id", async(req, res) => {
    try {
        const {id} = req.params
        const user = await Games.findById(id)

        if (user) {
            await Games.findByIdAndDelete(id)
            res.status(200).json({status: true, message:"USER DELETED",data: user})
        } else {
            res.status(200).json({status: true, message:"NO USER DATA !!!"})
        }
    } catch(error) {
        res.status(200).json({status: false, message: error })
    }
})

module.exports = router;