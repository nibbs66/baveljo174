const mongoose = require("mongoose");

const HomeClubSchema = new mongoose.Schema(
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
        team: {
            type: [{naam: {type: String}}]
        }

    },


    {timestamps: true }
)


export default mongoose.models.HomeClub ||
mongoose.model("HomeClub", HomeClubSchema);

