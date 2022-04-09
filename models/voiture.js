const mongoose = require("mongoose");

 const     voitureSchema = new mongoose.Schema(
  {
      marque: {
      type: String,
      required: true
     },
      serie:{
         type: String,
          required: true
         },


         user:{
            type: String,
            required: true
            },

         assurance:{
             type: String,
             required: true
            },
        
         
   
           },
              {
              timestamps: { currentTime: () => Date.now() },
               }
  );
module.exports = mongoose.model("voiture", voitureSchema);
