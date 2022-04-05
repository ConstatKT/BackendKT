const Constat = require("../models/Constat");
const User = require("../models/User");
const voiture = require("../models/voiture");









    
exports.getAll = async (req, res) => {
    // console.log("1111")
     res.status(200).send({ Constat : await Constat.find(), message: "success" });
};         
    
    
// add constat
exports.add = async (req, res) => {
  
    const {
      cin_user1,
      cin_user2,
      vt1,
      vt2,
      X,
      Y,
      photo,
  
    } = req.body;
  
    if (await User.findOne({ cin:cin_user1 })) {
      
    } else {
        res.status(403).send({ message: "User n existe pas !" });
    }
    if (await User.findOne({ cin:cin_user2 })) {
      
    } else {
        res.status(403).send({ message: "User n existe pas !" });
    }
    if (await voiture.findOne({ serie:vt1 })) {
      
    } else {
        res.status(403).send({ message: "voiture n existe pas !" });
    }
    if (await voiture.findOne({ serie:vt2 })) {
      
    } else {
        res.status(403).send({ message: "voiture n existe pas !" });
    }
  const  v1= await voiture.findOne({ serie:vt1 })
  const  v2= await voiture.findOne({ serie:vt2 })
    const nouveauconstat = new Constat();

    nouveauconstat.X = X;
    nouveauconstat.Y = Y;
    nouveauconstat.vt1 = vt1;
    nouveauconstat.vt2 = vt2;
    nouveauconstat.cin_user1 = cin_user1;
    nouveauconstat.cin_user2 = cin_user2;
    nouveauconstat.assurance1 = v1.assurance;
    nouveauconstat.assurance2 = v2.assurance;
   
    
   
    try{
        nouveauconstat.photo =`${req.protocol}://${req.get('host')}/upload/${req.file.filename}`
   }catch{
   
    nouveauconstat.photo ="http://localhost:3000/upload/default-profile.png"
   }

    
        nouveauassurance.save();
        res.status(201).send({
          message: "success",
         assurance: nouveauassurance,
        });




};

  


