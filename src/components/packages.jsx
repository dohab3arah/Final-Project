import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PackagesTable from "./PackagesTable.jsx";

const Packages = ({fetch}) => {
    const [packages, setPackages] = useState([]); // State to store the retrieved data
    const [error, setError] = useState(''); // State to store any errors
    const [loading, setLoading] = useState(true); // State to show loading status

    useEffect(() => {
        // Define the async function to fetch data
        const fetchPackages = async () => {
            try {
                // Make the GET request using Axios
                const response = await axios.get('http://localhost/TravelAPI/api.php', {
                    params: {
                        Action: 'getAllPackages', // Passing the Action as a query parameter
                    },
                });

                // Assuming your PHP API returns JSON with a "Message" field containing the data
                if (response.data.Status === 'Success') {
                    setPackages(response.data.Message); // Store the packages data
                } else {
                    setError('Failed to retrieve packages');
                }
            } catch (err) {
                // Handle any errors that occur during the request
                setError('Error fetching data: ' + err.message);
            } finally {
                setLoading(false); // Set loading to false when the request completes
            }
        };

        // Call the fetch function
        fetchPackages();
    }, []); // Empty dependency array to run once on component mount

    if (loading) {
        return <p>Loading...</p>; // Show a loading message while fetching
    }

    if (error) {
        return <p>{error}</p>; // Show an error message if there's an error
    }

    return (
        <PackagesTable fetch={fetch} data={packages.map(t=> ({...t, id: t.packageID}))} />
    );
};

export default Packages;
