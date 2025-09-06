import { use } from "react";
import { useState } from "react";
import hoteApi from "../services/hotelApi";
import { useEffect } from "react";

function Home() {

    const [search, setSearch] = useState("");
    const [hotels, setHotels] = useState([]);
    const filteredHotels = hotels.filter((hotel) => {
        return hotel.hotelName.toLowerCase().includes(search.toLowerCase());
    });

    useEffect(() => {
        async function loadHotels(){
            try{
                const hotel = await hoteApi.get("/getHotels");
                setHotels(hotel.data);
                console.log(hotel);
            }
            catch(err){
                console.error(err);
            }
        }

        loadHotels();
    }, []);


    return (
        <>
            <div className="container mt-4">
                <div className="h2">Available Hotels</div>
                <input
                    type="text"
                    className="form-control mb-4"
                    placeholder="Search Hotels..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <div className="row">
                    {filteredHotels.length > 0 ? (
                        filteredHotels.map((hotel) => (
                            <div key={hotel._id} className="col-12 col-sm-6 col-md-3 mb-4">
                                <div className="card h-100 shadow-sm">
                                            <img src={hotel.image} alt="Image"
                                                className="img-fluid rounded-start h-100"
                                                style={{ objectFit: "cover" , maxHeight:"100px"}}
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">{hotel.hotelName}</h5>
                                                <p className="card-text">{hotel.location}</p>
                                            </div>
                                    
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center">No Hotels Found</p>
                    )}
                </div>
            </div>
        </>
    )
}

export default Home;