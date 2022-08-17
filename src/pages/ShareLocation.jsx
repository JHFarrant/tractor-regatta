import React, {useState, useEffect} from "react";
import {Grid, Typography, Box, Button} from "@mui/material";
import logo from '../static/logo.png'
import useFade from "../hooks/useFade";


const ShareLocation = ({name, state, setState, isGeolocationAvailable ,getPosition, coords}) => {
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
    useEffect(() => {
        const timeoutID = setInterval(() =>  {
            if (!coords) getPosition()
        }, 500);

        return () => clearInterval(timeoutID);
    }, []);


    const done = () => {
        setState("home")
    }
    return (
        <>
            <Grid item width={"100%"}>
                <Box width={"100%"}>
                    <Typography textAlign={"left"} variant={"body1"}>Please share your
                        location.
                    </Typography>
                    <br/>
                    <Typography textAlign={"left"} variant={"body1"}>
                        Don't worry you can
                        trust me,<br/>
                        I am a website
                    </Typography>
                    <br/>
                    <Typography textAlign={"left"} variant={"body1"}>
                        If you are Jack Stewart
                        you will probably click no
                        and try to break the
                        experience
                    </Typography>


                </Box>
            </Grid>
            {/*<Grid item>*/}
            {/*    <Box pt={10}>*/}
            {/*        <Button size={"large"} color={"success"} variant="outlined" onClick={done}>Great thanks</Button>*/}
            {/*    </Box>*/}
            {/*</Grid>*/}
    </>
    );
}

export default ShareLocation


