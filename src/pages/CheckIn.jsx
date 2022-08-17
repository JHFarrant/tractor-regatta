import React, {useState, useEffect} from "react";
import {
    Grid,
    Typography,
    Box,
    Button,
    FormControl,
    InputLabel,
    FormHelperText,
    Input,
    TextField,
    Checkbox, FormControlLabel
} from "@mui/material";
import logo from '../static/logo.png'
import useFade from "../hooks/useFade";
import * as PropTypes from "prop-types";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const CheckIn = ({guest, state, setState, setIsCheckedIn}) => {
    const [isVisible, setVisible, fadeProps] = useFade(true);

    const [checkInDate, setCheckInDate] = useState(
        new Date('2022-08-19T17:00:00')
    );
    const [checkOutDate, setCheckOutDate] = useState(
        new Date('2022-08-23T17:00:00')
    );
    const [trainArrivalTime, setTrainArrivalTime] = useState(null);

    const [buresTransfer, setBuresTransfer] = useState(false);

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
        setIsCheckedIn(true)
        setState("home")
    }
    return (
        <>
            <Grid item>
                <Box>
                    <FormControl sx={{
                        '& .MuiTextField-root': { m: 1, width: '30ch' },
                    }}>
                        <TextField id="outlined-basic" label="Name" disabled defaultValue={guest.name}/>
                        {/*<TextField width={"100%"} id="outlined-basic" label="Name" disabled defaultValue={guest.name}/>*/}
                        {/*<TextField width={"100%"} id="outlined-basic" label="Name" disabled defaultValue={guest.name}/>*/}
                        <DateTimePicker
                            label="Check in"
                            value={checkInDate}
                            onChange={setCheckInDate}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        <DateTimePicker
                            label="Check out"
                            value={checkOutDate}
                            onChange={setCheckOutDate}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        <TextField id="outlined-basic" label="Allocated Room" disabled defaultValue={guest.room}/>
                        <FormControlLabel control={<Checkbox   checked={buresTransfer}
                                                               onChange={(event) => setBuresTransfer(event.target.checked)}
                                                               inputProps={{ 'aria-label': 'controlled' }} />} label="Require Bures train station transfer?" />
                        { buresTransfer && <DateTimePicker
                            label="Train Arrival Time"
                            value={trainArrivalTime}
                            onChange={setTrainArrivalTime}
                            renderInput={(params) => <TextField {...params} />}
                        />}
                        {/*<InputLabel htmlFor="my-input">Email address</InputLabel>*/}
                        {/*<Input id="my-input" aria-describedby="my-helper-text" />*/}
                        {/*<FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>*/}
                    </FormControl>
                    {/*<Typography pt={2} variant={"h4"}>Friday 19th August</Typography>*/}
                    {/*<Typography textAlign={"left"} variant={"body1"}>• Light Dinner<br/>• Fire Pit<br/>• G&T and Wine</Typography>*/}
                    {/*<Typography pt={2} variant={"h4"}>Saturday 20th August</Typography>*/}
                    {/*<Typography textAlign={"left"} variant={"body1"}>• Light Dinner<br/>• Fire Pit<br/>• G&T and Wine</Typography>*/}
                    {/*<Typography pt={2} variant={"h4"}>Sunday 21st August</Typography>*/}
                    {/*<Typography textAlign={"left"} variant={"body1"}>• Light Dinner<br/>• Fire Pit<br/>• G&T and Wine</Typography>*/}
                    {/*<Typography pt={2} variant={"h4"}>Monday 22nd August</Typography>*/}
                    {/*<Typography textAlign={"left"} variant={"body1"}>• Light Dinner<br/>• Fire Pit<br/>• G&T and Wine</Typography>*/}
                </Box>
            </Grid>
            <Grid item>
                <Box pt={10}>
                    <Button size={"large"} color={"success"} variant="outlined" onClick={done}>Confirm Check In</Button>
                </Box>
            </Grid>
    </>
    );
}

export default CheckIn


