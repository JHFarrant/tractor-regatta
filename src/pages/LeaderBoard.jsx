import React, {useState, useEffect, useReducer} from "react";
import {
    Grid,
    Box,
    Button,
    Backdrop,
    CircularProgress,
    Avatar,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
    Dialog,
    DialogTitle,
    DialogContentText, DialogContent, TextField, DialogActions, ButtonGroup
} from "@mui/material";
import useFade from "../hooks/useFade";

const defaultAvatarURL = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"



const LeaderBoard = ({guest, guests, state, setState}) => {
    const zeroedResults = Object.keys(guests).reduce((prev, id) => {
        prev[id] = 0
        return prev
    }, {})
    const [isVisible, fadeProps] = useFade(true);

    const loading = false;

    const [open, setOpen] = useState(false);
    const [openID, setOpenID] = useState(undefined);
    const [pendingScoreValue, setPendingScoreValue] = useState(undefined);

    const fetchCoins = (guestID) => {
        fetch(`https://keyvalue.immanuel.co/api/KeyVal/GetValue/cx791p68/${guestID}`, { method: 'GET'})
            .then(response => {
                return response.json()
            })
            .then(data => updateResult({[guestID]: Number(data)}));
    }

    const setCoins = (guestID, value) => {
        fetch(`https://keyvalue.immanuel.co/api/KeyVal/UpdateValue/cx791p68/${guestID}/${value}`, { method: 'POST'})
            .then(response => response.ok && updateResult({[guestID]: value}));
    }


    useEffect(() => {
        Object.keys(guests).forEach(fetchCoins)
    }, );

    const handleClickOpen = (id) => {
        if (guest.id === "ABCDE"){
            setOpenID(id)
            setOpen(true);
        }
    };
    const handleClose = () => {
        setOpen(false);
    };

    const add = (number) => {
        setCoins(openID, results[openID] + number)
        handleClose();
    }
    const handleSubmit = () => {
        setCoins(openID, pendingScoreValue)
        handleClose();
    }

    const done = () => {
        setState("home")
    }
    const updater = (results, newResult) => ({...results, ...newResult})
    const [results, updateResult] = useReducer(updater, zeroedResults);

    const orderedResults = Object.entries(results).sort(([id, result], [id2, result2]) => result2 - result)
    return (
         <>
             { isVisible && <Grid item {...fadeProps}>
                 <Typography variant={"h4"}>Tractor Coin Leaderboard 💰</Typography>
             </Grid> }
             { isVisible && <Grid {...fadeProps} item width={"100%"} justifySelf={"start"}>
                <Box>
                    <List>
                        {
                            orderedResults.map(([id, result]) =>
                                <ListItem key={id} onClick={() => handleClickOpen(id)}>
                                    <ListItemAvatar>
                                        <Avatar alt="ProfilePic" src={guests[id]?.avatarURL || defaultAvatarURL}/>
                                    </ListItemAvatar>
                                    <ListItemText primary={`${result}`} secondary={guests[id]?.name}/>
                                </ListItem>)
                        }
                    </List>
                </Box>
            </Grid> }
             { isVisible &&    <Grid item {...fadeProps}>
                <Box pt={10}>
                <Button size={"large"} color={"success"} variant="outlined" onClick={done}>Back</Button>
                </Box>
                </Grid>}
             <Backdrop
                 sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                 open={loading}
             >
                 <CircularProgress color="inherit" />
             </Backdrop>
             <Dialog open={open} onClose={handleClose}>
                 <DialogTitle>Update Coin</DialogTitle>
                 <DialogContent>
                     <DialogContentText>
                         {guests[openID]?.name}
                     </DialogContentText>

                     <Box pt={3}>
                         <ButtonGroup variant="outlined">
                             <Button onClick={() => add(1)}>+1</Button>
                             <Button onClick={() => add(3)}>+3</Button>
                             <Button onClick={() => add(5)}>+5</Button>
                             <Button onClick={() => add(10)}>+10</Button>
                         </ButtonGroup>
                     </Box>
                     <Box pt={3}>
                         <ButtonGroup variant="outlined">
                             <Button onClick={() => add(-1)}>-1</Button>
                             <Button onClick={() => add(-3)}>-3</Button>
                             <Button onClick={() => add(-5)}>-5</Button>
                             <Button onClick={() => add(-10)}>-10</Button>
                         </ButtonGroup>
                     </Box>
                     <Box pt={3}>
                         <TextField
                         defaultValue={results[openID]}
                         id="newNumber"
                         label="New Value"
                         type="number"
                         onChange={(e) => setPendingScoreValue(e.target.value)}
                         InputLabelProps={{
                             shrink: true,
                         }}
                     />
                     </Box>
                 </DialogContent>
                 <DialogActions>
                     <Button onClick={handleClose}>Cancel</Button>
                     <Button onClick={handleSubmit}>Submit</Button>
                 </DialogActions>
             </Dialog>
    </>
    );
}

export default LeaderBoard


