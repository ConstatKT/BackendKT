const mongoose = require("mongoose");

 const UserSchema = new mongoose.Schema(
  {
      username: {
      type: String,
      required: true
     },


    email:{
      type: String,
      required: true
     },
      tel:{
         type: String,
        required: true
         },
        cin:{
            type: String,
            required: true
         },
         adresse:{
             type: String,
             required: true
            },
            categorie_permis :{
              type: String,
              required: false
             },
             date_permis :{
              type: String,
              required: false
             },
       role:{      //y5dm fl assuranse wala 3andou karhba  
         type: String,
          required: true
        },

         password:{
           type: String,
           required: true
          },
   photoProfil: {
      type: String,
     // default: "http://localhost:3000/upload/default-profile.png",
      required: false
   },
    isVerified: { type: Boolean },
   
  },
  {
    timestamps: { currentTime: () => Date.now() },
  }
);
module.exports = mongoose.model("User", UserSchema);
