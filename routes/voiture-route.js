const express = require("express");

const router = express.Router()
const vController = require("../controllers/voiture-cont")

const multer = require('../multer-config')

router.get("/all", vController.getAll)
router.post("/add", vController.add)

router.post("/edit",multer,vController.edit)





router.delete("/one", vController.delete)

router.delete("/all", vController.deleteAll)












module.exports = router