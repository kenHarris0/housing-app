import hotelSchema from "../model/hotelSchema.js";

const get_hotels = async(req, res) => {
    try{
        const hotels = await hotelSchema.find();
        res.send(hotels);
    }
    catch(err){
        res.status(500).send("Internal Server Error");
        console.error(err);
    }
};

const add_hotels = async(req, res) => {
    try{
        await hotelSchema.insertMany(req.body);
        res.status(201).send("Inserted Hotels");
    }
    catch(err){
        res.status(500).send("Internal Server Error");
        console.error(err);
        console.log(req.body);
    }
}

const filter_hotel = async(req, res) => {
    try{
        const hotels = await hotelSchema.find({hotelName : req.body.hotelName});
        if(hotels == null){
            return res.status(404).send("No hotels found");
        }
        res.status(201).send(hotels);
        console.log(hotels);
    }
    catch(err){
        res.status(500).send("Internal Server Error");
    }
}

export default {
    get_hotels,
    add_hotels,
    filter_hotel
};