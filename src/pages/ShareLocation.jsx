import React, { useEffect} from "react";
import {Grid, Typography, Box} from "@mui/material";


const ShareLocation = ({name, state, setState, isGeolocationAvailable ,getPosition, coords}) => {


    useEffect(() => {
        const timeoutID = setInterval(() =>  {
            if (!coords) getPosition()
        }, 500);

        return () => clearInterval(timeoutID);
    });


    return (
        <>
            <Grid item width={"100%"}>
                <Box width={"100%"}>
                    <Typography textAlign={"left"} variant={"body1"}>Please share your
                        location. This way the app can know if you are in suffolk or not
                    </Typography>
                    <br/>
                    <Typography textAlign={"left"} variant={"body1"}>
                        Don't worry, I am not tracking you, your location is only used when you have this page open
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


