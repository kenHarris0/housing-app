import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
    hotelName : {type: String, required : true},
    location : {type :String, required : true},
    image : {type :String, required : true}
});

export default mongoose.model("hotels", hotelSchema);