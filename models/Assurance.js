const mongoose = require("mongoose");

 const     AssuranceSchema = new mongoose.Schema(
  {
      name: {
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

         adresse:{
             type: String,
             required: true
            },
          logo: {
            type: String,
              required: false
                },
         
   
           },
              {
              timestamps: { currentTime: () => Date.now() },
               }
  );
module.exports = mongoose.model("Assurance", AssuranceSchema);
