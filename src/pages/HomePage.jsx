import React, {useEffect, useState} from "react";
import {
    Grid,
    Typography,
    Box,
    Button,
    Rating,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    List
} from "@mui/material";
import useFade from "../hooks/useFade";
import {CurrencyBitcoin, Star,} from "@mui/icons-material";

const defaultAvatarURL = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
const menuLink = "https://docs.google.com/document/d/190nX3k5T9NVgX0UsFVatO8SiSp3Sv63AzC9WG21Swkc/export?format=pdf"

const HomePage = ({guest, isCheckedIn, setState}) => {
    const [isCheckInVisible, fadeCheckInProps] = useFade(!isCheckedIn);
    const [isHomeVisible, fadeHomeProps] = useFade(isCheckedIn);

    const [guestTractorCoins, setGuestTractorCoins] = useState("-");

    const fetchCoins = () => {
        fetch(`https://keyvalue.immanuel.co/api/KeyVal/GetValue/cx791p68/${guest.id}`, { method: 'GET'})
            .then(response => {
                return response.json()
            })
            .then(data => setGuestTractorCoins(Number(data)));
    }

    useEffect(() => {
        fetchCoins()
    });

    return (
        <>
            {isHomeVisible && <Grid item justifySelf={"start"}>
                <List dense={true}>
                    <ListItem >
                        <ListItemAvatar>
                            <Avatar>
                                <Avatar alt="ProfilePic" src={guest?.avatarURL || defaultAvatarURL}/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={guest.name}/>
                    </ListItem>
                    <ListItem >
                        <ListItemAvatar>
                            <Avatar>
                                <Star />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={"Tractor driver rating"} secondary={<Rating name="customized-10" readOnly defaultValue={guest?.selfRating} max={10}/>}/>
                    </ListItem>
                    <ListItem >
                        <ListItemAvatar>
                            <Avatar>
                                <CurrencyBitcoin />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={"Tractor coins"} secondary={guestTractorCoins} max={10}/>
                    </ListItem>
                </List>
            </Grid>}
            {isHomeVisible && <Grid item justifySelf={"start"}>
            <Typography component="legend"></Typography>
            </Grid>}

             <Grid item textAlign={"center"}>

                 {isCheckInVisible && <Box pt={10}>
                <Button {...fadeCheckInProps} size={"large"} color={"success"} variant="outlined" onClick={() => setState("checkIn")}>Check In</Button>
                </Box>
            }
            {isHomeVisible &&
                <Box pt={2}>
                    <Button {...fadeHomeProps} size={"large"} color={"success"} variant="outlined" onClick={() => setState("rules")}>Rules</Button>
                </Box>
            }
            {isHomeVisible &&

                <Box pt={2}>
                    <Button {...fadeHomeProps} size={"large"} color={"success"} variant="outlined" onClick={() => setState("itinerary")}>Itinerary</Button>
                </Box>
            }
            {isHomeVisible &&
            <Box pt={2}>
                <Button {...fadeHomeProps} size={"large"} color={"success"} variant="outlined" onClick={() => setState("leaderboard")}>Leaderboard</Button>
            </Box>}
             {isHomeVisible &&
             <Box pt={2}>
                 <Button {...fadeHomeProps} size={"large"} color={"success"} variant="outlined" href={menuLink}>Menu</Button>
             </Box>}
            </Grid>

    </>
    );
}

export default HomePage


