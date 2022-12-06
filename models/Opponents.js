const mongoose = require("mongoose");

const OpponentSchema = new mongoose.Schema(
    {
        naam: {
            type: String,
        },
        club: {type: String},
        address: {
            type: String,
        },
        city: {
            type: String
        },
        img: {
            type: String
        },

    },


    {timestamps: true }
)


export default mongoose.models.Opponent ||
mongoose.model("Opponent", OpponentSchema);

