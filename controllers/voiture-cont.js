const Voiture = require("../models/voiture");
const jwt = require("jsonwebtoken");



const fs = require("fs");

///// LINKS ---------------------------------------------------------

exports.getAll = async (req, res) => {
 // console.log("1111")
  res.status(200).send({ voiture: await Voiture.find(), message: "success" });
};


exports.add = async (req, res) => {
  
  const {
    assurance,
    user,
    serie,
    marque,
   
  } = req.body; 

  if (await Voiture.findOne({ serie })) {
    res.status(403).send({ message: "Voiture existe deja !" });
  } else {
    const nouveauvoiture = new Voiture();

    nouveauvoiture.marque = marque;
    nouveauvoiture.serie = serie;
    nouveauvoiture.user = user;
    nouveauvoiture.assurance = assurance;
   

    nouveauvoiture.save();
    res.status(201).send({
      message: "success",
     voiture: nouveauvoiture,
    });
  }
};



exports.edit = async (req, res) => {
    const {
        assurance,
        user,
        serie,
        marque,
       
      } = req.body; 
  let voiture = await Voiture.findOneAndUpdate(
    { serie: serie },
    {
      $set: {
        user: user,
        tel:tel,
        assurance:assurance,
       
       
      }, 
    }
  );
  console.log("bien")

  res.send({ assurance });
};


exports.delete = async (req, res) => {
  console.log(req.body);

  const assurance = await Voiture.findById(req.body._id).remove();

  res.send({ assurance });
};

exports.deleteAll = async (req, res) => {
  Voiture.remove({}, function (err, user) {
    if (err) {
      return handleError(res, err);
    }
    return res.status(204).send({ message: "Aucun element" });
  });
};


///// FUNCTIONS ---------------------------------------------------------

    