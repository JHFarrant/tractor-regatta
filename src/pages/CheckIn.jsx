import React, {useState} from "react";
import {
    Grid,
    Box,
    Button,
    FormControl,
    TextField,
    Checkbox, FormControlLabel, Modal, Link
} from "@mui/material";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import map from "../static/map.png";

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

function encode(data) {
    return Object.keys(data)
        .map(
            (key) =>
                encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
}

const CheckIn = ({guest, state, setState, setCheckInID, setID}) => {

    const [checkInDate, setCheckInDate] = useState(
        new Date('2022-08-19T17:00:00')
    );
    const [checkOutDate, setCheckOutDate] = useState(
        new Date('2022-08-23T17:00:00')
    );
    const [trainArrivalTime, setTrainArrivalTime] = useState(null);

    const [buresTransfer, setBuresTransfer] = useState(false);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const done = (event) => {
        event.preventDefault();
        console.log(event)
        console.log(encode({
            "form-name": "checkin",
            ...guest,
            checkInDate,
            checkOutDate,
            buresTransfer,
            trainArrivalTime
        }))
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": "checkin",
                ...guest,
                checkInDate,
                checkOutDate,
                buresTransfer,
                trainArrivalTime
            }),
        })
        .then((resp) => {
            console.log(resp)
            if(resp.status < 400){
                setCheckInID(guest.id)
                setID(guest.id)
                setState("home")
                alert("You successfully checked in")
            }else{
                console.error(resp)
                alert("Check in failed, please try again")
            }

        }).catch((error) => alert(error));
    }

    return (
        <>
                <Grid item>
                    <form data-netlify="true" id="form1" netlify-honeypot="bot-field" onSubmit={done}>
                    <Box>
                        <FormControl sx={{
                            '& .MuiTextField-root': { m: 1, width: '30ch' },
                        }}>
                            <input type="hidden" name="form-name" value="checkin" />
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

            </form>
                    <Link
                        component="button"
                        variant="body2"
                        onClick={handleOpen}
                    >
                        Room map
                    </Link>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={modalStyle}>
                            <img
                                width={"100%"}
                                src={map} alt="Map" />
                        </Box>
                    </Modal>
        </Grid>
        <Grid item>
            <Box pt={10}>
                <Button type="submit" form="form1" size={"large"} color={"success"} variant="outlined" >Confirm Check In</Button>
            </Box>
        </Grid>
</>
    );
}

export default CheckIn


