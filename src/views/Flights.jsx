import Packages from "../components/packages.jsx";
import MyJournies from "../components/MyJournies.jsx";
import {Paper, Stack, Typography} from "@mui/material";
import React, {useRef} from "react";

const Flights = () => {
    const [fetch, setFetch ] = React.useState(null);
    const onFetch = (callback) => {
            setFetch(callback)
    }
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const isAuth = !!storedUser?.email;
    return (
        <Paper sx={{mt: 10}}>
          {isAuth &&  <Stack alignItems="center" gap={2} sx={{height: 400}}>
                <Typography sx={{alignSelf: "start", ml: "15%"}} variant="h4">My Flights</Typography>
                <MyJournies onFetch={onFetch}/>
            </Stack>}
            <Stack alignItems="center" gap={2} sx={{height: 400}}>
                <Typography sx={{alignSelf: "start", ml: "15%"}} variant="h4">Reserve a Flight</Typography>
                <Packages fetch={fetch}/>
            </Stack>
        </Paper>
    )
}
export default Flights;