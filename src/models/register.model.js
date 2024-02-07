import mongoose from "mongoose";


const pictureSchema = new mongoose.Schema({
    location: String,
    description: String,
    picture: String
})


const pictureModel = mongoose.model('pictures', pictureSchema)

export default pictureModel 