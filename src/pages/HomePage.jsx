import React, {useState, useEffect} from "react";
import {Grid, Typography, Box, Button, Rating} from "@mui/material";
import logo from '../static/logo.png'
import useFade from "../hooks/useFade";

const HomePage = ({guest, state, isCheckedIn, setState}) => {
    const [isCheckInVisible, setCheckInVisible, fadeCheckInProps] = useFade(!isCheckedIn);
    const [isHomeVisible, setHomeVisible, fadeHomeProps] = useFade(isCheckedIn);

    // const speed = 3
    // const loading = state == "initialLoad"
    // const [loadingTextID, setTextID] = useState(0)
    // const loadingTexts = [
    //     "Loading, please wait...",
    //     "Analysing turf...",
    //     "Retrofitting blades...",
    //     "Refuelling engine...",
    //     "Emptying grass cuttings..."
    // ]
    // const loadingText = loadingTexts[loadingTextID]

    //
    // useEffect(() => {
    //     const intervalID = setInterval(() =>  {
    //         if (loadingTextID == loadingTexts.length) {
    //             setState("loaded")
    //             clearInterval(intervalID);
    //         }else {
    //             setTextID((loadingTextID) => loadingTextID + 1)
    //         }
    //     }, 1000);
    //
    //     return () => clearInterval(intervalID);
    // }, []);

    return (
        <>
            {isHomeVisible && <Grid item justifySelf={"start"}>
            <Typography component="legend">Tractor driver rating</Typography>
            <Rating name="customized-10" defaultValue={guest.selfRating} max={10} />
            </Grid>}

            {isCheckInVisible && <Grid item>

            <Box pt={10}>
                <Button {...fadeCheckInProps} size={"large"} color={"success"} variant="outlined" onClick={() => setState("checkIn")}>Check In</Button>
            </Box>
        </Grid>
            }
            {isHomeVisible && <Grid item>

                <Box pt={10}>
                    <Button {...fadeHomeProps} size={"large"} color={"success"} variant="outlined" onClick={() => setState("itinerary")}>Itinerary</Button>
                </Box>
            </Grid>
            }
    </>
    );
}

export default HomePage


