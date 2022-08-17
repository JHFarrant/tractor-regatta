import React from "react";
import {
    List,
    Grid,
    Typography,
    Box,
    Button,
    ListItem,
    ListItemText, ListItemAvatar, Avatar
} from "@mui/material";
import useFade from "../hooks/useFade";
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import {
    Agriculture,
    Apple,
    BreakfastDining, Checkroom, DinnerDining,
    Fireplace,
    Gavel, LocalBar, LocalPizza,
    MilitaryTech, Nightlife, OutdoorGrill,
    Pool,
    RunCircle, SelfImprovement, SportsHandball,
    SportsTennis
} from "@mui/icons-material";

const Itinerary = ({guest, state, setState}) => {
    const [isVisible, fadeProps] = useFade(true);

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
             { isVisible && <Grid {...fadeProps} item width={"100%"} justifySelf={"start"}>
                <Box>
                    <Typography pt={2} variant={"h4"}>Friday 19th August</Typography>
                    <List dense={true}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <LunchDiningIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Casual Dinner"/>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <Fireplace/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Firepit" secondary="with G&Ts"/>
                        </ListItem>
                    </List>
                    <Typography pt={2} variant={"h4"}>Saturday 20th August</Typography>
                    <List>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <RunCircle/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Team Morning Jog" secondary="optional"/>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <BreakfastDining/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Breakfast" secondary="not optional"/>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <Apple/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Fruit picking" secondary="Mostly plums"/>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <Pool/>
                                    <SportsTennis/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Swimming / Tennis"/>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <LunchDiningIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Lunch" secondary="Nothing than fancy"/>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <MilitaryTech/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Individual Tournament Begins"/>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <Gavel/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Military Grade Crochet" secondary="Proposed by J.Stewart"/>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <Gavel/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Slam Poetry Competition" secondary="Singles, 5 min prep allowed"/>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <SelfImprovement/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Chill"/>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <Checkroom/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Get ready for dinner"/>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <LocalBar/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Prosecco Reception"/>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <DinnerDining/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Dinner" secondary="Fancy"/>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <Nightlife/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Party"/>
                        </ListItem>
                    </List>
                    <Typography pt={2} variant={"h4"}>Sunday 21st August</Typography>
                    <List dense={true}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <BreakfastDining/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Breakfast" secondary="(GF)"/>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <MilitaryTech/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Team Tournament Begins"/>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <Agriculture/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Egg & Tractor-Spoon Race"/>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <SportsHandball/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Spikeball Tournament"/>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <OutdoorGrill/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="BBQ" secondary="weather dependant"/>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <Pool/>
                                    <SportsTennis/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Tennis / Swim / Unstructured reading time"/>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <Pool/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Synchronised Swimming"/>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <Gavel/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Team Civilian Crochet" secondary="Not proposed by J.Stewart"/>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <LocalPizza/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Pizza Party"/>
                        </ListItem>
                    </List>
                    <Typography pt={2} variant={"h4"}>Monday 22nd August</Typography>
                    <List dense={true}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <SelfImprovement/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Chill"/>
                        </ListItem>
                    </List>
                </Box>
            </Grid> }
             { isVisible &&    <Grid item {...fadeProps}>
                <Box pt={10}>
                <Button size={"large"} color={"success"} variant="outlined" onClick={done}>Back</Button>
                </Box>
                </Grid>}
    </>
    );
}

export default Itinerary


