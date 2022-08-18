import React, {useEffect, useState} from "react";
import { useSearchParams } from "react-router-dom";
import { getDistance } from 'geolib';

import useViewport from './hooks/useViewport'
import DesktopComponent from './components/DesktopComponent'
import {Box, Container, Grid, FormGroup, FormControlLabel, Switch, Alert} from "@mui/material";
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
import ShareLocation from "./pages/ShareLocation";
import OutsideSuffolk from "./pages/OutsideSuffolk";
import Rules from "./pages/Rules";
import LeaderBoard from "./pages/LeaderBoard"

const slideLocation = { latitude: 51.988067740424825, longitude: 0.7921858396712386 }
const twentyNM = 37040

function App() {
    let [searchParams] = useSearchParams();
    const urlID = searchParams.get("id")

    const [id, setID] = useLocalStorage('id', urlID)


    const [glutenMode, setGlutenMode] = useState(false)
    const [mostRecentCoordsAndTime, setMostRecentCoordsAndTime] = useState({coords:undefined, timestamp: new Date().getTime()})
    const mostRecentCoords = mostRecentCoordsAndTime.coords
    const [state, _setState] = useLocalStorage("state","landing")
    const setState = (s) => {
        if (s === "checkIn"){
            setCheckInID(false)
        }
        _setState(s)
    }
    const [checkInID, setCheckInID] = useLocalStorage('checkInID', false)
    const isCheckedIn = checkInID === id
    // const [previouslyEnabledLocation, setPreviouslyEnabledLocation] = useLocalStorage('sharedLocation', false)

    const { coords, timestamp, isGeolocationAvailable, getPosition} = useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            watchPosition: true,
            userDecisionTimeout: 10000,
            suppressLocationOnMount: true,
            isOptimisticGeolocationEnabled: false
        });

    useEffect(() => {
        if(coords && (!mostRecentCoordsAndTime.coords || timestamp > mostRecentCoordsAndTime.timestamp)) setMostRecentCoordsAndTime({coords, timestamp})
    }, [coords, timestamp, mostRecentCoordsAndTime, mostRecentCoordsAndTime.timestamp]);

    const { width } = useViewport();
    const breakpoint = 620;
    const guest = { ...guests[id], id:id}

    const speed = 3

    if(width > breakpoint){return <DesktopComponent />}


    const toggleGluten = () => {
        setGlutenMode(!glutenMode)
    }

    const distanceToSlideMeters = mostRecentCoords && getDistance(
        slideLocation,
        { latitude: mostRecentCoords.latitude, longitude: mostRecentCoords.longitude }
    );
    const distanceToSlideNM = distanceToSlideMeters && Math.round(distanceToSlideMeters/1852 * 100) / 100



    const inSuffolk = distanceToSlideMeters && distanceToSlideMeters < twentyNM

    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
        <Container className={state === "home" && glutenMode && "baguette"} maxWidth="sm" style={{height: "100%"}}>
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
                          style={state === "initialLoad" ? {animation: `spin ${speed}s linear infinite`} : {}}
                          src={logo} alt="Logo" />
                  </Box>
                  {
                      ["home"].includes(state) && isCheckedIn &&
                      <>
                          { inSuffolk && <Alert severity="success">You are {distanceToSlideNM} nautical miles from the blue slide</Alert>}
                          { inSuffolk === false && <Alert severity="warning">You are {distanceToSlideNM} nautical miles from the blue slide</Alert>}
                          { !mostRecentCoords && <Alert severity="info">Detecting distance from blue slide...</Alert>}
                      </>
                  }
              </Grid>
          {["landing", "initialLoad"].includes(state) && <LandingPage name={guest?.name} state={state} setState={setState}></LandingPage> }
          {["home"].includes(state) &&
          (mostRecentCoords || !isCheckedIn ? (inSuffolk || !isCheckedIn ? <HomePage guest={guest} state={state} isCheckedIn={isCheckedIn} setState={setState}></HomePage> :
                      <OutsideSuffolk name={guest?.name} state={state} setState={setState}></OutsideSuffolk>)
          :  <ShareLocation name={guest?.name} state={state} setState={setState} isGeolocationAvailable={isGeolocationAvailable} getPosition={getPosition} coords={mostRecentCoords}></ShareLocation>
          )}
              {["itinerary"].includes(state) &&  <Itinerary name={guest?.name} state={state} setState={setState}></Itinerary> }
          {["checkIn"].includes(state) &&  <CheckIn guest={guest} state={state} setState={setState} setCheckInID={setCheckInID} setID={setID}></CheckIn> }
              {["rules"].includes(state) &&  <Rules name={guest?.name} state={state} setState={setState}></Rules> }
              {["leaderboard"].includes(state) &&  <LeaderBoard guest={guest} state={state} guests={guests}  setState={setState}></LeaderBoard> }

              { state === "home" && <Grid item justifySelf={"end"}>
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
