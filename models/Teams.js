const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema(
    {
        groupAge: {
            type: String,
            required: true
        },

    },


    {timestamps: true }
)


export default mongoose.models.Team ||
mongoose.model("Team", TeamSchema);

