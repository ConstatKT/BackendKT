const express = require("express");
const Voiture = require("../models/voiture");
const multer = require('../multer-config');
const router = express.Router()
const vController = require("../controllers/voiture-cont");
const voiture = require("../models/voiture");



router.get("/all", vController.getAll)
router.post("/add", multer, vController.add)

router.post("/edit",multer,vController.edit)


router.post('/', multer, async (req, res) => {
    await voiture.init();
  
    const voitur = new voiture({
  
        marque: req.body.marque,
        serie: req.body.serie,
        user: req.body.user,
        assurance : req.body.assurance
    })
  
    voitur.photoProfil = `${req.protocol}:${req.get('host')}/upload/${req.file.filename}`
   
    
        
        const newvoitur = await voitur.save()
        res.status(201).json({
            voitur: voitur,
            reponse: "good"
        })
    
      
  
  })


router.delete("/one", vController.delete)

router.delete("/all", vController.deleteAll)












module.exports = router