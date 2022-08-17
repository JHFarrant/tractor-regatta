import React, {useState, useEffect, useRef} from "react";
import {Grid, Typography, Box, Button} from "@mui/material";
import useFade from "../hooks/useFade"

import logo from '../static/logo.png'

const LandingPage = ({name, state, setState}) => {

    const [isVisible, setVisible, fadeProps] = useFade(true);

    const loading = state == "initialLoad"
    const [loadingTextID, setTextID] = useState(0)
    const loadingTexts = [
        "",
        "Loading, please wait...",
        "Analysing turf...",
        "Retrofitting blades...",
        "Refuelling engine...",
        "Emptying grass cuttings..."
    ]
    const loadingText = loadingTexts[loadingTextID]

    const bumpText = (seconds, textID) => {
        console.log(textID)
        if (textID >= loadingTexts.length) {
            setState("home")
        }
        else {
            textID = textID + 1
            setTextID(textID)
            setTimeout(()=>{bumpText(seconds, textID)}, seconds)
        }
    }

    const begin = () => {
        setState("initialLoad")
        setVisible(false)
        bumpText(2000, 0)
    }
    return (
    <>
        { isVisible ?  <Grid item>
            <Box>
                <Typography {...fadeProps} color={"green"} variant={"h1"}>TR22</Typography>
            </Box>
        </Grid> : <></>}
        { !isVisible ? <></>: <Grid item>

            <Box pt={10}>
                {
                    name ? <Typography {...fadeProps} color={"green"} variant={"body1"}>Welcome, {name}</Typography> :
                        <Typography {...fadeProps} color={"green"} variant={"body1"}>Who are you?<br/>You must use the exact link that was sent to you</Typography>
                }
            </Box>
        </Grid>}
        { !isVisible ? <Grid item>
            <Box pt={10}>
                {
                    <Typography color={"green"} variant={"h5"}>{loadingText}</Typography>
                }
            </Box>
        </Grid>: <></>}
        { !isVisible ? <></>: <Grid item>
            <Box pt={10}>
                {name && <Button {...fadeProps} size={"large"} color={"success"} variant="outlined" onClick={begin}>Begin</Button>}
            </Box>
        </Grid>}
    </>
    );
}

export default LandingPage


