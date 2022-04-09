

const express = require("express");

const router = express.Router()
const constatController = require("../controllers/constat-cont")

const multer = require('../multer-config')

router.get("/all", constatController.getAll)
router.post("/add", constatController.add)
/*
router.post("/edit",multer,constatController.edit)

router.post("/editPicture", constatController.editPicture)



router.delete("/one", constatController.delete)

router.delete("/all", constatController.deleteAll)*/
//  Localhost:3000/api/user/user-filter   
//router.get("/user-filter",UserController.my_branch_in)

/////












module.exports = router