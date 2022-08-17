import React from "react";
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
import {Person, Star,} from "@mui/icons-material";

const HomePage = ({guest, isCheckedIn, setState}) => {
    const [isCheckInVisible, fadeCheckInProps] = useFade(!isCheckedIn);
    const [isHomeVisible, fadeHomeProps] = useFade(isCheckedIn);

    return (
        <>
            {isHomeVisible && <Grid item justifySelf={"start"}>
                <List dense={true}>
                    <ListItem >
                        <ListItemAvatar>
                            <Avatar>
                                <Person />
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
                        <ListItemText primary={"Tractor driver rating"} secondary={<Rating name="customized-10" readOnly defaultValue={guest?.selfRating} max={10}/>
                        }/>
                    </ListItem>
                </List>
            </Grid>}
            {isHomeVisible && <Grid item justifySelf={"start"}>
            <Typography component="legend"></Typography>
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


