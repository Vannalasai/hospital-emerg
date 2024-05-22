import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MEDAPI = 'https://api.geoapify.com/v2/places?categories=healthcare.hospital&filter=circle:78.44202,17.3707564,5000&bias=proximity:78.44202,17.3707564&limit=20&apiKey=d3eba6ce6a014eee8668f26b116e3624';



export default function Home() {

    const [hospitals , setHospitals] = useState([]);
    const navigate = useNavigate('');

    useEffect(()=>{
        async function getProducts(){
            const response = await axios.get(MEDAPI);
            setHospitals(response.data.features);
            console.log(response.data.features);
        }
        getProducts();
    }, [])

    const handleClick = (hospital) => {
        navigate('/hospital/' + hospital.properties.datasource.raw.osm_id, {state: hospital.properties})
    }


    return(
        <div style={{ display: 'flex', flexWrap: 'wrap', padding: 20}}>
            {hospitals.map((hospital) => {
                    // console.log(hospital)
                    return(
                        <div key={hospital.properties.datasource.raw.osm_id}>
                            <Card onClick={() => handleClick(hospital)} sx={{ width: 430 , padding: 2 , margin: '20px', border: "1px solid grey"}}>
                                <CardContent>
                                    <Typography variant="h3" style={{fontSize:"22px", fontStyle:"oblique"}}>
                                        {hospital.properties.address_line1}
                                    </Typography>
                                    <hr />
                                    <Typography variant="p" style={{fontSize:"15px"}}>
                                        {hospital.properties.address_line2}
                                    </Typography>
                                    <br />
                                    <Typography variant="p" style={{fontSize:"15px"}}>
                                        {hospital.properties.categories}
                                    </Typography>
                                </CardContent>    
                            </Card>
                        </div>
                    )
            })}
        </div>
    )
}