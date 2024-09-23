import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {IconButton, Paper, Typography} from "@mui/material";
import {useState} from "react";
import axios from "axios";
import toast, {Toaster} from "react-hot-toast";
import CancelIcon from '@mui/icons-material/Cancel';

const columns = (onClick) => [
    {field: 'ID', flex: 1, headerName: 'Reservation Code'},
    {field: '1', flex: 1, headerName: 'Source Country'},
    {field: 'destinationCountry', flex: 1.2, headerName: 'Destination'},
    {field: 'RequestDate', flex: 1.2, headerName: 'Reservation Date'},
    {field: 'journeyDate', flex: 1, headerName: 'Journey Date'},
    {
            field: "Reserve", flex: 1, headerName: 'Cancel Reservation', renderCell: (prop) => {
            return <IconButton onClick={() => onClick(prop.row)}>
                <CancelIcon/>
            </IconButton>
        }
    }
];

const MyJourniesTable = ({data, onDelete, loading}) => {
    const [error, setError] = useState(''); // State to store any errors
    const onReserve = React.useCallback(async (row) => {
        try {
            const storedUser = JSON.parse(localStorage.getItem("user"));

            const response = await axios.get('http://localhost/TravelAPI/api.php', {
                params: {
                    Action: 'deleteReservedPkg', // Passing the Action as a query parameter
                    reserveID: row.ID,
                    Identity: storedUser.email
                },
            });

            if (response.data.Status === 'Success') {
                onDelete();
            toast.success('Reservation Cancelled Successfully');
            } else {
                setError(response.data.Message);
                toast.error('Failed to Cancel');
            }
        } catch (err) {
            // Handle any errors that occur during the request
            setError('Error fetching data: ' + err.message);
        }
    }, [])
    return (
        <Paper sx={{width: "70%", height: 300}}>
            <Typography error>{error}</Typography>
            <DataGrid rows={data}
                      loading={loading}
                      columns={columns(onReserve)}
            />
            <Toaster />
        </Paper>
    );
}
export default MyJourniesTable;