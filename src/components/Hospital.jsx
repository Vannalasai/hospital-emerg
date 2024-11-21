import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row , Col } from "react-bootstrap";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

import Directions from './Directions';


const USERAPI = 'https://api.geoapify.com/v1/geocode/search?text=38%20Upper%20Montagu%20Street%2C%20London%20W1H%201LJ%2C%20United%20Kingdom&format=json&apiKey=8374c88b75914b36a69915f1b0ce51f3';
const ROUTESAPI = `https://api.geoapify.com/v1/routing?waypoints=${17.667896},${77.589444}|${17.3707564},${78.44202}&mode=drive&details=instruction_details&apiKey=d3eba6ce6a014eee8668f26b116e3624`;


export default function Hospital() {

    const [users, setUsers] = useState([]);
    const [routes, setRoutes] = useState([]);
    const [steps, setSteps] = useState([]);
    


    useEffect(() => {
        async function getUsers(){
            const response = await axios.get(USERAPI)
            console.log(response.data.results)
            setUsers(response.data.results)
        }
        getUsers();
    }, [])

    useEffect(() => {
        async function getRoutes() {
          try {
            const res = await axios.get(ROUTESAPI);
            const featuresArr = res.data.features;
            // Extract the relevant directions data
            const directionsData = featuresArr.map((feature) => feature.properties.legs[0].steps);
      
            // Set the directions data in your state (assuming you have a state variable called 'routes')
            setRoutes(directionsData);
      
            console.log(directionsData);
          } catch (error) {
            console.error('Error fetching routes:', error);
          }
        }
      
        getRoutes();
      }, []);
      

    const location = useLocation();
    const {name, lat, lon, address_line2, datasource, state, city} = location.state;

    return(
        <Row>
            <Col>
                <div style={{padding:'10px'}}>
                    <Card >
                        <CardContent>
                            <Typography variant="h3" style={{fontSize:"22px", fontStyle:"oblique"}}>
                                {name}
                            </Typography>
                            <div>
                                {users.map((user, index) => {
                                    return(
                                        <div key={index}>
                                            <hr />
                                            <Typography variant="p" style={{fontSize:"15px"}}>
                                            User Latitude: {user.lat}
                                            </Typography>
                                            <br />
                                            <Typography variant="p" style={{fontSize:"15px"}}>
                                                User Longitude: {user.lon}
                                            </Typography>
                                            <br />
                                            <Typography variant="p" style={{fontSize:"15px"}}>
                                            User Formatted Address: {user.formatted}
                                            </Typography> 
                                        </div>
                                    )
                                })}
                            </div>
                            <hr />
                            <Typography variant="p" style={{fontSize:"15px"}}>
                               Hospital Latitude: {lat}
                            </Typography>
                            <br />
                            <Typography variant="p" style={{fontSize:"15px"}}>
                                Hospital Longitude: {lon}
                            </Typography>
                            <br />
                            <Typography variant="p" style={{fontSize:"15px"}}>
                                Hospital Formatted Address: {address_line2}
                            </Typography>
                            <hr />
                            <Typography variant="p" style={{fontSize:"15px"}}>
                               Hospital Website: {datasource.url}
                            </Typography>
                            <br />
                            <Typography variant="p" style={{fontSize:"15px"}}>
                                Hospital Email: {datasource.sourcename}
                            </Typography>
                            <br />
                            <Typography variant="p" style={{fontSize:"15px"}}>
                                State: {state}
                            </Typography>
                            <br />
                            <Typography variant="p" style={{fontSize:"15px"}}>
                                City: {city}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                
            </Col>
            <Col>
                <div style={{padding:'10px'}}>
                    <Card>
                        <CardContent>

                            <Directions routes={routes} />

                        </CardContent>
                    </Card>
                </div>
                
            </Col>
        </Row>

    )
}