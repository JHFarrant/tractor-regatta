import React, {useState, useEffect} from "react";
import {Grid, Typography, Box, Button} from "@mui/material";
import logo from '../static/logo.png'
import useFade from "../hooks/useFade";

y

const Itinerary = ({name, state, setState}) => {
    const [isVisible, setVisible, fadeProps] = useFade(true);

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
    const done = () => {
        setState("home")
    }
    return (
        <>
            <Grid item width={"100%"}>
                <Box width={"100%"}>
                    <Typography pt={2} variant={"h4"}>Friday 19th August</Typography>
                    <Typography textAlign={"left"} variant={"body1"}>• Light Dinner<br/>• Fire Pit<br/>• G&T and Wine</Typography>
                    <Typography pt={2} variant={"h4"}>Saturday 20th August</Typography>
                    <Typography textAlign={"left"} variant={"body1"}>• Light Dinner<br/>• Fire Pit<br/>• G&T and Wine</Typography>
                    <Typography pt={2} variant={"h4"}>Sunday 21st August</Typography>
                    <Typography textAlign={"left"} variant={"body1"}>• Light Dinner<br/>• Fire Pit<br/>• G&T and Wine</Typography>
                    <Typography pt={2} variant={"h4"}>Monday 22nd August</Typography>
                    <Typography textAlign={"left"} variant={"body1"}>• Light Dinner<br/>• Fire Pit<br/>• G&T and Wine</Typography>
                </Box>
            </Grid>
            <Grid item>
                <Box pt={10}>
                    <Button size={"large"} color={"success"} variant="outlined" onClick={done}>Great thanks</Button>
                </Box>
            </Grid>
    </>
    );
}

export default Itinerary


