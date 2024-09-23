import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton, Paper, Typography } from "@mui/material";
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import PaymentOptions from "../components/molecules/PaymentOptions";
import FlightPayment from "../components/FlightPayment";


const columns = (onClick, isAuth, onShow) => [
    { field: '1', flex: 1, headerName: 'Source Country' },
    { field: 'destinationCountry', flex: 2, headerName: 'Destination Country' },
    { field: 'journeyDate', flex: 1, headerName: 'Journey Date' },
    { field: 'maxPassengers', flex: 1.2, headerName: 'Max Passengers' },
    { field: 'price', flex: 1, headerName: 'Price' },

    isAuth && {
        field: "Reserve", flex: 1, headerName: 'Reserve', renderCell: (prop) => {
            return <IconButton onClick={() => onClick(prop.row)}>
                <AirplaneTicketIcon />
            </IconButton>
        }
    }
].filter(Boolean);

const PackagesTable = ({ data, fetch }) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const isAuth = !!storedUser?.email;
    const [open, setOpen] = React.useState(false);
    const [error, setError] = useState(''); // State to store any errors
    const [loading, setLoading] = useState(true); // State to show loading status
    const [row, setRow] = useState();

    const onShow = (row) => {
        setRow(row);
        onReserve(row);
    }
    const onHide = () => {
        setOpen(false);
    }
    const onReserve = React.useCallback(async (row) => {
        try {
            // Make the GET request using Axios
            const storedUser = JSON.parse(localStorage.getItem("user"));
            const newPass = await axios.get('http://localhost/TravelAPI/api.php', {
                params: {
                    Action: 'newPassenger', // Passing the Action as a query parameter
                    Name: storedUser.email,
                    Identity: storedUser.email,
                    Country: "Palestine"
                },
            });

            const response = await axios.get('http://localhost/TravelAPI/api.php', {
                params: {
                    Action: 'reservePackage', // Passing the Action as a query parameter
                    PackageID: row.packageID,
                    Identity: storedUser.email
                },
            });

            // Assuming your PHP API returns JSON with a "Message" field containing the data
            if (response.data.Status === 'Success') {
                setOpen(true);
                fetch?.();
            } else {
                toast.error(response.data.Message);
            }
        } catch (err) {
            // Handle any errors that occur during the request
            setError('Error fetching data: ' + err.message);
        } finally {
            setLoading(false); // Set loading to false when the request completes
        }

    }, []);
    return (
        <Paper sx={{ width: "70%", height: 300 }}>
            <DataGrid rows={data}
                columns={columns(onShow, isAuth)}
            />
            <Toaster />
            <FlightPayment open={open} handleClose={onHide} row={row} />
        </Paper>
    );
}
export default PackagesTable;