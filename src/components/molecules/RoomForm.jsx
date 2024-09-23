import { Field, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { getResidence } from "../../API/endpoint/Residence";
import { addRoom, getRoomType } from "../../API/endpoint/room";
import toast, { Toaster } from "react-hot-toast";

export default function RoomForm() {
    const [residences, setResidences] = useState([]);
    const [roomTypes, setRoomTypes] = useState([]);

    const getResidencesApi = async () => {
        try {
            const response = await getResidence();
            setResidences(response.data.data);
        } catch (e) {
            console.error('error 404');
        }
    };

    const getRoomTypesApi = async () => {
        try {
            const response = await getRoomType();
            setRoomTypes(response.data.data);
        } catch (e) {
            console.error('error 404');
        }
    };

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        const formData = new FormData();
        formData.append('AdultsCapacity', values.AdultsCapacity);
        formData.append('ChildrenCapacity', values.ChildrenCapacity);
        formData.append('Number', values.Number);
        formData.append('PricePerNight', values.PricePerNight);
        formData.append('Description', values.Description);
        formData.append('Image', values.Image); 
        formData.append('Rating', values.Rating);
        formData.append('ResidenceId', values.ResidenceId);
        formData.append('RoomTypeId', values.RoomTypeId);

        try {
            const response = await addRoom(formData);
            if (response.status === 400 || response.status === 401) {
                toast.error('Failed to add Room');
            } else {
                toast.success('Room added successfully');
                resetForm();
            }
        } catch (error) {
            toast.error('An error occurred while adding the Room');
        } finally {
            setSubmitting(false);
        }
    };

    useEffect(() => {
        getResidencesApi();
        getRoomTypesApi();
    }, []);

    return (
        <div className="flex justify-center items-center min-h-screen mt-3 ">
            <Formik
                initialValues={{
                    AdultsCapacity: "",
                    ChildrenCapacity: "",
                    Number: "",
                    PricePerNight: "",
                    Description: "",
                    Image: null,
                    Rating: "",
                    ResidenceId: "",
                    RoomTypeId: ""
                }}
                validate={(values) => {
                    const errors = {};
                    if (!values.AdultsCapacity) errors.AdultsCapacity = 'Required';
                    if (!values.ChildrenCapacity) errors.ChildrenCapacity = 'Required';
                    if (!values.Number) errors.Number = 'Required';
                    if (!values.PricePerNight) errors.PricePerNight = 'Required';
                    if (!values.Description) errors.Description = 'Required';
                    if (!values.Image) errors.Image = 'Required';
                    if (!values.Rating) errors.Rating = 'Required';
                    if (!values.ResidenceId) errors.ResidenceId = 'Required';
                    if (!values.RoomTypeId) errors.RoomTypeId = 'Required';
                    return errors;
                }}
                onSubmit={handleSubmit}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    setFieldValue,
                    isSubmitting
                }) => (
                    <form onSubmit={handleSubmit} className="container mx-auto my-[30px] p-4 xl:w-1/3 border rounded-md shadow-lg ">
                        <h2 className="text-center p-4 text-[27px]">Room Form</h2>

                        {/* Fields go here, with error handling */}
                        <div className="mb-4">
                            <label htmlFor="AdultsCapacity" className="block text-sm font-medium text-gray-700">Adults Capacity</label>
                            <Field
                                type='number'
                                name='AdultsCapacity'
                                id="AdultsCapacity"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.AdultsCapacity}
                                className={`mt-1 block w-full px-3 py-2 border ${
                                    errors.AdultsCapacity && touched.AdultsCapacity ? 'border-red-500' : 'border-gray-300'
                                } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                            />
                            {errors.AdultsCapacity && touched.AdultsCapacity && <div className="text-red-500 text-sm mt-1">{errors.AdultsCapacity}</div>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="ChildrenCapacity" className="block text-sm font-medium text-gray-700">Children Capacity</label>
                            <Field
                                type='number'
                                name='ChildrenCapacity'
                                id="ChildrenCapacity"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.childrenCapacity >=0 ? values.childrenCapacity : 0  }
                                className={`mt-1 block w-full px-3 py-2 border ${
                                    errors.ChildrenCapacity && touched.ChildrenCapacity ? 'border-red-500' : 'border-gray-300'
                                } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                            />
                            {errors.ChildrenCapacity && touched.ChildrenCapacity && <div className="text-red-500 text-sm mt-1">{errors.ChildrenCapacity}</div>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="Number" className="block text-sm font-medium text-gray-700">Number</label>
                            <Field
                                type='number'
                                name='Number'
                                id="Number"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.Number}
                                className={`mt-1 block w-full px-3 py-2 border ${
                                    errors.Number && touched.Number ? 'border-red-500' : 'border-gray-300'
                                } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                            />
                            {errors.Number && touched.Number && <div className="text-red-500 text-sm mt-1">{errors.Number}</div>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="PricePerNight" className="block text-sm font-medium text-gray-700">Price Per Night</label>
                            <Field
                                type='number'
                                name='PricePerNight'
                                id="PricePerNight"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.PricePerNight}
                                className={`mt-1 block w-full px-3 py-2 border ${
                                    errors.PricePerNight && touched.PricePerNight ? 'border-red-500' : 'border-gray-300'
                                } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                            />
                            {errors.PricePerNight && touched.PricePerNight && <div className="text-red-500 text-sm mt-1">{errors.PricePerNight}</div>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="Description" className="block text-sm font-medium text-gray-700">Description</label>
                            <Field
                                as="textarea"
                                type='text'
                                name='Description'
                                id="Description"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.Description}
                                className={`mt-1 block w-full px-3 py-2 border ${
                                    errors.Description && touched.Description ? 'border-red-500' : 'border-gray-300'
                                } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                            />
                            {errors.Description && touched.Description && <div className="text-red-500 text-sm mt-1">{errors.Description}</div>}
                        </div>

                        <div className="mb-4">
                        <label htmlFor="Image" className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md inline-block">
                <i className="fas fa-image mr-2"></i>
                Upload Image
              </label>
                            <input
                id="Image"
                name="Image"
                type="file"
                className="hidden"
                onChange={(event) => {
                  const file = event.currentTarget.files[0];
                  setFieldValue('Image', file);
                }}
              />
                            {errors.Image && touched.Image && <div className="text-red-500 text-sm mt-1">{errors.Image}</div>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="Rating" className="block text-sm font-medium text-gray-700">Rating</label>
                            <Field
                                type='number'
                                name='Rating'
                                id="Rating"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.Rating}
                                max='5'
                                min='1'
                                className={`mt-1 block w-full px-3 py-2 border ${
                                    errors.Rating && touched.Rating ? 'border-red-500' : 'border-gray-300'
                                } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                            />
                            {errors.Rating && touched.Rating && <div className="text-red-500 text-sm mt-1">{errors.Rating}</div>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="ResidenceId" className="block text-sm font-medium text-gray-700">Select Residence</label>
                            <Field
                                as="select"
                                id='ResidenceId'
                                name='ResidenceId'
                                value={values.ResidenceId}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`mt-1 block w-full px-3 py-2 border ${
                                    errors.ResidenceId && touched.ResidenceId ? 'border-red-500' : 'border-gray-300'
                                } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                            >
                                <option hidden>Select Residence</option>
                                {residences.map((res) => (
                                    <option key={res.id} value={res.id}>{res.name}</option>
                                ))}
                            </Field>
                            {errors.ResidenceId && touched.ResidenceId && <div className="text-red-500 text-sm mt-1">{errors.ResidenceId}</div>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="RoomTypeId" className="block text-sm font-medium text-gray-700">Select Room Type</label>
                            <Field
                                as="select"
                                id='RoomTypeId'
                                name='RoomTypeId'
                                value={values.RoomTypeId}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`mt-1 block w-full px-3 py-2 border ${
                                    errors.RoomTypeId && touched.RoomTypeId ? 'border-red-500' : 'border-gray-300'
                                } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                            >
                                <option hidden>Select Room Type</option>
                                {roomTypes.map((roty) => (
                                    <option key={roty.id} value={roty.id}>{roty.name}</option>
                                ))}
                            </Field>
                            {errors.RoomTypeId && touched.RoomTypeId && <div className="text-red-500 text-sm mt-1">{errors.RoomTypeId}</div>}
                        </div>

                        <div className="mt-6">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                )}
            </Formik>
            <Toaster/>
        </div>
    );
}
