import { useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantNav from "./RestaurantNav";
import RestaurantHeader from "./RestaurantHeader";
import RestaurantMenu from "./RestaurantMenu";
import RestaurantHours from "./RestaurantHours";
import RestaurantContact from "./RestaurantContact";

function TestRestaurant ({ restaurantData, setRestaurantData }) {
    const { id }:{ id:string } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/users/${id}`)
        .then(res=>res.json())
        .then(e=>setRestaurantData(e.data))
    },[])

    return (
        <div>
            {/* <RestaurantNav 
                restaurantData={restaurantData}
            /> */}
            {/* {/* <RestaurantHeader 
                restaurantData={restaurantData}
            /> */}
            {/* <RestaurantMenu 
                restaurantData={restaurantData}
            /> */}
            <RestaurantHours 
                restaurantData={restaurantData}
            />
            <RestaurantContact 
                restaurantData={restaurantData}
            />
        </div>
    )
}

export default TestRestaurant