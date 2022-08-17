import React, {useState} from "react";
import { useSearchParams } from "react-router-dom";

import useViewport from './hooks/useViewport'
import DesktopComponent from './components/DesktopComponent'
import {Box, Container, Grid, FormGroup, FormControlLabel, Switch} from "@mui/material";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage"
import {guests} from "./guests"
import logo from "./static/logo.png";
import Itinerary from "./pages/Itinerary";
import { useGeolocated } from "react-geolocated";
import { useLocalStorage } from 'usehooks-ts'
import CheckIn from "./pages/CheckIn";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

function App() {
    let [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams)
    const id = searchParams.get("id") || "abc"
    const [glutenMode, setGlutenMode] = useState(false)

    const [state, setState] = useLocalStorage("state","landing")

    const [isCheckedIn, setIsCheckedIn] = useLocalStorage('isCheckedIn', false)


    const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 10000,
            suppressLocationOnMount: true,
        });

    const { width } = useViewport();
    const breakpoint = 620;
    const guest = guests[id]

    const speed = 3
    const loading = state == "initialLoad"

    if(width > breakpoint){return <DesktopComponent />}

    const imageStyle = {
        "landing": {},
        "initialLoad":{animation: `spin ${speed}s linear infinite`},
        "home": {}
    }
    const toggleGluten = () => {
        setGlutenMode(!glutenMode)
    }
    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
        <Container className={state == "home" && glutenMode && "baguette"} maxWidth="sm" style={{height: "100%"}}>
          {/*{state}*/}
          <Grid container   direction="column"
                justifyContent="space-between"
                alignItems="center"
                height={"100%"}
                width={"100%"}
                wrap={"nowrap"}
                pt={3}
                pb={3}
          >
              <Grid item>
                  <Box pr={3} pl={"70%"}>
                      <img
                          width={"100%"}
                          style={imageStyle[state]}
                          src={logo} alt="Logo" />
                  </Box>
              </Grid>
          {["landing", "initialLoad"].includes(state) && <LandingPage name={guest?.name} state={state} setState={setState}></LandingPage> }
          {["home"].includes(state) &&  <HomePage guest={guest} state={state} isCheckedIn={isCheckedIn} setState={setState}></HomePage> }
          {["itinerary"].includes(state) &&  <Itinerary name={guest?.name} state={state} setState={setState}></Itinerary> }
          {["checkIn"].includes(state) &&  <CheckIn guest={guest} state={state} setState={setState} setIsCheckedIn={setIsCheckedIn}></CheckIn> }
              { state == "home" && <Grid item justifySelf={"end"}>
                  <Box>
                      <FormGroup>
                          <FormControlLabel control={<Switch   checked={glutenMode}
                                                               inputProps={{ 'aria-label': 'controlled' }}
                                                               onChange={toggleGluten}/>} label="Non Gluten free mode" />
                      </FormGroup>
                  </Box>
              </Grid>}
          </Grid>
          </Container>
        </LocalizationProvider>
    );
}

export default App;
