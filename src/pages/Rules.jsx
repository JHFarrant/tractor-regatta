import React from "react";
import {
    List,
    Grid,
    Box,
    Button,
    ListItem,
    ListItemText, ListItemAvatar, Avatar
} from "@mui/material";
import useFade from "../hooks/useFade";
import {
DoNotDisturb,

} from "@mui/icons-material";

const Rules = ({guest, state, setState}) => {
    const [isVisible, fadeProps] = useFade(true);

    const done = () => {
        setState("home")
    }
    return (
         <>
             { isVisible && <Grid {...fadeProps} item width={"100%"} justifySelf={"start"}>
                <Box>
                    <List dense={true}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <DoNotDisturb/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Under no circumstance are you
to call Anita Farrant a C**T"/>
                        </ListItem>
                    </List>
                </Box>
            </Grid> }
             { isVisible &&    <Grid item {...fadeProps}>
                <Box pt={10}>
                <Button size={"large"} color={"success"} variant="outlined" onClick={done}>I understand</Button>
                </Box>
                </Grid>}
    </>
    );
}

export default Rules


