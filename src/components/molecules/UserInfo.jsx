import React, { useState } from 'react';

export default function UserInfo() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        mobileNumber: '',
        receiveAlerts: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <div className="xl:w-4/6 mx-auto   rounded-md my-[30px]  overflow-hidden mb-9 border ">
                    <h3 className="text-xl font-semibold mb-4 text-white bg-blue-500 p-4  px-3">
                        Room 1 2 adults, 1 double bed and 1 twin bed, Non-smoking
                    </h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4 flex space-x-4 px-3">
                            <div className="w-2/6">
                                <label htmlFor="first-name" className="block text-gray-700">
                                    First name
                                </label>
                                <input
                                    type="text"
                                    id="first-name"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="mt-1 p-2 block w-full bg-gray-200 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div className="w-2/6">
                                <label htmlFor="last-name" className="block text-gray-700">
                                    Last name
                                </label>
                                <input
                                    type="text"
                                    id="last-name"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="mt-1 p-2 block w-full bg-gray-200 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>
                        <div className="mb-4 w-2/6 ml-3">
                            <label htmlFor="mobile-number" className="block text-gray-700">
                                Mobile number
                            </label>
                            <input
                                type="tel"
                                id="mobile-number"
                                name="mobileNumber"
                                value={formData.mobileNumber}
                                onChange={handleChange}
                                className="mt-1 p-2 block w-full bg-gray-200 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4 ml-3">
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="receiveAlerts"
                                    checked={formData.receiveAlerts}
                                    onChange={handleChange}
                                    className="form-checkbox h-4 w-4 text-blue-600"
                                />
                                <span className="ml-2 text-gray-700">
                                    Receive text alerts about this trip.
                                </span>
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white p-3  hover:bg-blue-600"
                        >
                            Submit
                        </button>
                    </form>
                </div>
          
    );
}

