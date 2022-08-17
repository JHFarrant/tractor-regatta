import React, {useState, useEffect} from "react";
import {Grid, Typography, Box, Button, Modal, Link} from "@mui/material";
import slide from '../static/slide.png'
import useFade from "../hooks/useFade";

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const OutsideSuffolk = ({name, state, setState}) => {
    const [isVisible, setVisible, fadeProps] = useFade(true);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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


    return (
        <>
            <Grid item width={"100%"}>
                <Box width={"100%"}>
                    <Typography textAlign={"left"} variant={"h4"}>
                        I can see you are not in
                        suffolk right now
                    </Typography>
                    <br/>
                    <Typography textAlign={"left"} variant={"body1"}>
                        Due to a rights dispute
                        between Bill Farrant and
                        the rest of East Anglia
                        you must be within 20
                        Nautical Miles of the
                        blue slide to use this
                        website.
                    </Typography>
                    <br/>
                    <Typography textAlign={"left"} variant={"body1"}>
                        Please come back again
                        once in suffolk
                    </Typography>
                    <Box
                        pt={10}>
                    <Link
                        component="button"
                        variant="body2"
                        onClick={handleOpen}
                    >
                        What is the blue slide?
                    </Link>
                        <br/>
                        <Link
                            component="button"
                            variant="body2"
                            onClick={() => setState("itinerary")}                        >
                            Click here for a sneak peak at the itinerary
                        </Link>

                    </Box>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={modalStyle}>
                            <img
                                width={"100%"}
                                src={slide} alt="Slide" />
                        </Box>
                    </Modal>

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

export default OutsideSuffolk


