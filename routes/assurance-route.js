const express = require("express");

const router = express.Router()
const assuranceController = require("../controllers/assurance-cont")

const multer = require('../multer-config')

router.get("/all", assuranceController.getAll)
router.post("/add", assuranceController.add)

router.post("/edit",multer,assuranceController.edit)

router.post("/editPicture", assuranceController.editPicture)



router.delete("/one", assuranceController.delete)

router.delete("/all", assuranceController.deleteAll)
//  Localhost:3000/api/user/user-filter   
//router.get("/user-filter",UserController.my_branch_in)

/////












module.exports = router