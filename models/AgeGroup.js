const mongoose = require('mongoose');

const AgeGroupSchema = new mongoose.Schema({

        groupLevel: {type: String},





    },
    {timestamps: true }
);
module.exports = mongoose.models.AgeGroup || mongoose.model('AgeGroup', AgeGroupSchema);
