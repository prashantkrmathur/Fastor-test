import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ResturantData from './ResturantData';

const Dashboard = (props) => {
    const { token } = props.location.state.response.data;
    const [resturantData, setResturantData] = useState([]);

    const fetchResturantData = async () => {
        const response = await axios.get("https://staging.fastor.in/v1/m/restaurant?city_id=118&&", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        setResturantData(response.data);
    }

    useEffect(() => {
      fetchResturantData()
    }, []);
    return (
        <div >
            {resturantData.map((item) => {
                return <ResturantData
                    key={item.restaurant_id}
                    name={item.restaurant_name}
                    address={item && item.location && item.location.location_address}
                    image_url={item && item.images && item.images[0]}
                    rating={item && item.rating && item.rating.restaurant_avg_rating}
                    cost={item.avg_cost_for_two}
                    cuisines={item.cuisines}
                />
            })}
        </div>
    )
}

export default Dashboard
