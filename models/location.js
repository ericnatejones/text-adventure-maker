const mongoose = require("mongoose")
const { Schema } = mongoose

const locationSchema = new Schema({
    name: String,
    description: String,
    travelableLocations: [
        {
            location: this,
            distance: Number
        }
    ]
})  
module.exports = mongoose.model("Location", locationSchema)
