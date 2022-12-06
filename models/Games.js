const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema(
    {

            naam: {type: String},
            team: {type: String},
        address: {
            type: String,
        },
        city: {
            type: String
        },
        img: {
            type: String
        },


        field: {
            type: String,

        },

        thuis: {
            type: String,
        },

        datum: {type: Date},
        time: {type: String},
        verzamelen: {type: String},

        vervoer: {
            type: [Number]
      },
      vlaggen: {
            type: Number
      },




    },


    {timestamps: true }
)


export default mongoose.models.Game ||
mongoose.model("Game", GameSchema);

