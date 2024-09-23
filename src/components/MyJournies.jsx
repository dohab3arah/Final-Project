import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PackagesTable from "./PackagesTable.jsx";
import MyJourniesTable from "./MyJourniesTable.jsx";

const MyJournies = ({onFetch}) => {
    const [journies, setJournies] = useState([]); // State to store the retrieved data
    const [error, setError] = useState(''); // State to store any errors
    const [loading, setLoading] = useState(true); // State to show loading status

    const fetchPackages = async () => {
        try {
            // Make the GET request using Axios
            const storedUser = JSON.parse(localStorage.getItem("user"));

            const response = await axios.get('http://localhost/TravelAPI/api.php', {
                params: {
                    Action: 'getMyJournies', // Passing the Action as a query parameter,
                    Identity: storedUser.email
                },
            });
            const flights = await axios.get('http://localhost/TravelAPI/api.php', {
                params: {
                    Action: 'getAllPackages', // Passing the Action as a query parameter
                },
            });
            // Assuming your PHP API returns JSON with a "Message" field containing the data
            if (response.data.Status === 'Success') {
                let data = response.data.Message;
                if(flights.data.Status === 'Success'){
                    data = response.data.Message.map(t=> {
                        const flightItem = flights.data.Message.find(f=>f.packageID === t.packageID);
                        return {...t, ...flightItem}
                    })
                }
                setJournies(data); // Store the journies data

            } else {
                setError('Failed to retrieve journies');
            }
        } catch (err) {
            // Handle any errors that occur during the request
            setError('Error fetching data: ' + err.message);
        } finally {
            setLoading(false); // Set loading to false when the request completes
        }
    };

    useEffect(() => {
        onFetch(()=> fetchPackages);
        fetchPackages();
    }, []);

const onDelete = () => {
    fetchPackages();
}
    return (
        <MyJourniesTable loading={loading} onDelete={onDelete} data={journies.map(t=> ({...t, id: t.ID}))} />
    );
};

export default MyJournies;
