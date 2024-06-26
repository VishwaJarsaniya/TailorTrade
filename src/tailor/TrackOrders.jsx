import React, { useEffect, useState } from "react";
import { Card, CardContent, Grid, Typography, Button, Link } from "@mui/material";
import SideBarNav from "./SideBarNav";
import Nav from "../Nav";
import DealsDetails from "./DealsDetails";
import stars from "../img/stars.png";
import star1 from "../img/1star.jpg"
import star2 from "../img/2star.jpg"
import star3 from "../img/3star.jpg"
import star4 from "../img/4star.jpg"
import star5 from "../img/5star.jpg"
import Review from "../data/reviews.json"
import { useAuth } from '../context/AuthContext';
import Theme from "../Theme";
// import DealsDetails from "./DealsDetails";
import useMediaQuery from '@mui/material/useMediaQuery';

function TrackOrders() {

    const isLargeScreen = useMediaQuery(Theme.breakpoints.up('lg'))

    return (
        <div style={{ overflowY: 'auto' }}>
            <CardContent style={{ padding: '0px' }}>
                <Grid container>
                {isLargeScreen && ( 
                <Grid item style={{width:'20%' }}>
                        <SideBarNav />
                    </Grid>
                )}
                    <Card sx={{ width:{xxs:'100%',lg:'80%'}, height: '100%', backgroundColor: '#F5F6FA' }}>
                        <Grid item>
                            <Nav />
                            <Typography style={{ fontSize: '210%', fontWeight: 700, marginTop: '20px', textAlign: 'left', marginLeft: '30px', marginBottom: '30px' }}>Track Orders</Typography>
                            <Card style={{ width: '95%', borderRadius: '15px', marginLeft: '2.4%', marginTop: '35px', marginBottom: '40px' }}>
                            <CardContent>
                                <Typography style={{ textAlign: 'left', fontSize: '145%', fontWeight: 600, marginTop: '5px', marginLeft: '10px', marginBottom: '20px' }}>Deals Details</Typography>
                                <DealsDetails />
                            </CardContent>
                        </Card>
                        </Grid>
                        
                    </Card>
                </Grid>
            </CardContent>
        </div>
    );
};

export default TrackOrders;
