const Assurance = require("../models/Assurance");
const jwt = require("jsonwebtoken");



const fs = require("fs");

///// LINKS ---------------------------------------------------------

exports.getAll = async (req, res) => {
 // console.log("1111")
  res.status(200).send({ Assurances: await Assurance.find(), message: "success" });
};


exports.add = async (req, res) => {
  
  const {
    logo,
    adresse,
    tel,
    email,
    name,
  

  } = req.body; 

  if (await Assurance.findOne({ name })) {
    res.status(403).send({ message: "assurance existe deja !" });
  } else {
    const nouveauassurance = new Assurance();

    nouveauassurance.name = name;
    nouveauassurance.email = email;
  
    nouveauassurance.adresse = adresse;
    nouveauassurance.tel = tel;
   
    
   
    try{
    nouveauassurance.logo =`${req.protocol}://${req.get('host')}/upload/${req.file.filename}`
   }catch{
   
    nouveauassurance.logo ="http://localhost:3000/upload/default-profile.png"
   }

    nouveauassurance.save();
    res.status(201).send({
      message: "success",
     assurance: nouveauassurance,
    });
  }
};



exports.edit = async (req, res) => {
    const {
       
        adresse,
        tel,
        email,
        name,
      
    
      } = req.body;
  let assurance = await Assurance.findOneAndUpdate(
    { email: email },
    {
      $set: {
       name: name,
        tel:tel,
        adresse:adresse,
        email: email,
       
      }, 
    }
  );
  console.log("bien")

  res.send({ assurance });
};

exports.editPicture = async (req, res, next) => {
  console.log(req.body.email)
  let assurance = await Assurance.findOneAndUpdate(
    { email: req.body.email },
    {
      $set: {
       photoProfil :`${req.protocol}://${req.get('host')}/upload/${req.file.filename}`
      },
    }
  );
  console.log(req.file.filename)
  res.send({ assurance });
};

exports.delete = async (req, res) => {
  console.log(req.body);

  const assurance = await Assurance.findById(req.body._id).remove();

  res.send({ assurance });
};

exports.deleteAll = async (req, res) => {
  Assurance.remove({}, function (err, user) {
    if (err) {
      return handleError(res, err);
    }
    return res.status(204).send({ message: "Aucun element" });
  });
};


///// FUNCTIONS ---------------------------------------------------------

    