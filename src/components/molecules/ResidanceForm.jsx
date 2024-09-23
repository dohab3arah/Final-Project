import React, { useEffect, useState } from "react";
import { getCountry } from "../../API/endpoint/country";
import { Field, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { getCity } from "../../API/endpoint/city";
import { addResidence, ResidenceType } from "../../API/endpoint/Residence";

export default function ResidenceForm() {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [filterCity, setFilterCity] = useState([]);
  const [residenceTypes, setResidenceTypes] = useState([]);

  const getResidence = async () => {
    try {
      const response = await ResidenceType();
      setResidenceTypes(response.data.data);
    } catch {
      console.error("Error fetching residence types");
    }
  };

  const handleSelCountry = (e, setFieldValue) => {
    const countryId = e.target.value;
    setFieldValue("CountryId", countryId);
    const filteredCities = cities.filter(city => city.countryId === countryId);
    setFilterCity(filteredCities);
  };

  const getCountryData = async () => {
    try {
      const response = await getCountry();
      setCountries(response.data.data);
    } catch (error) {
      toast.error("Error fetching countries");
    }
  };

  const getCityData = async () => {
    try {
      const response = await getCity();
      setCities(response.data.data);
    } catch (error) {
      toast.error("Error fetching cities");
    }
  };

  useEffect(() => {
    getCountryData();
    getResidence();
    getCityData();
  }, []);

  const handleSubmit =async (values, { setSubmitting, resetForm })=>{
    const formData = new FormData();
    formData.append("Name", values.Name);
    formData.append("CountryId", values.CountryId);
    formData.append("CityId", values.CityId);
    formData.append("Description", values.Description);
    formData.append("Address", values.Address);
    formData.append("Image", values.Image); 
    formData.append("Email", values.Email);
    formData.append("PhoneNumber", values.PhoneNumber);
    formData.append("FloorsNumber", values.FloorsNumber);
    formData.append("Rating", values.Rating);
    formData.append("ResidenceTypeId", values.ResidenceTypeId);

    try {
      const response = await addResidence(formData);      
      if (response.status === 400 || response.status === 401) {
        toast.error('Failed to add Residence');
      } else {
        toast.success('Residence added successfully');
        resetForm();
      }
    } catch (error) {
      toast.error('An error occurred while adding the Residence');
    } finally {
      setSubmitting(false);
    }
  }
  const validationSchema = Yup.object().shape({
    Name: Yup.string().required("Name is required"),
    CountryId: Yup.string().required("Country is required"),
    CityId: Yup.string().required("City is required"),
    Description: Yup.string(),
    Address: Yup.string(),
    Image: Yup.mixed(),
    Email: Yup.string().email("Invalid email address").required("Email is required"),
    PhoneNumber: Yup.string().required("Phone Number is required"),
    FloorsNumber: Yup.number().min(1, "Number of floors must be at least 1").required("Floors Number is required"),
    Rating: Yup.number().min(1, "Rating must be between 1 and 5").max(5, "Rating must be between 1 and 5"),
    ResidenceTypeId: Yup.string().required("Residence Type is required")
  });

  return (
    <div className="container mx-auto my-[30px] p-4 xl:w-1/3 sm:w-full border rounded-md shadow-lg ">
      <Formik
        initialValues={{
          Name: "",
          CountryId: "",
          CityId: "",
          Description: "",
          Address: "",
          Image: "",
          Email: "",
          PhoneNumber: "",
          FloorsNumber: "",
          Rating: "",
          ResidenceTypeId: ""
        }}
        validationSchema={validationSchema}
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
          <form onSubmit={handleSubmit} className="space-y-4">
            <h1 className="text-center p-4 text-[27px]">Add Residence</h1>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex-1">
                <label htmlFor="Name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <Field
                  type="text"
                  name="Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
               />
                <ErrorMessage name="Name" component="div" className="text-red-600 text-sm mt-1" />
              </div>
            </div>

            <div className="flex-1">
              <label htmlFor="CountryId" className="block text-sm font-medium text-gray-700">
                Country
              </label>
              <select
                name="CountryId"
                onChange={(e) => handleSelCountry(e, setFieldValue)}
                onBlur={handleBlur}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option hidden label="Select country" />
                {countries.map((country) => (
                  <option key={country.id} value={country.id}>
                    {country.name}
                  </option>
                ))}
              </select>
              <ErrorMessage name="CountryId" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <div className="flex-1">
              <label htmlFor="ResidenceTypeId" className="block text-sm font-medium text-gray-700">
                Residence Type
              </label>
              <Field
                as="select"
                name="ResidenceTypeId"
                onChange={handleChange}
                onBlur={handleBlur}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option  label="Select residence type" />
                {residenceTypes.map((residenceType) => (
                  <option key={residenceType.id} value={residenceType.id}>
                    {residenceType.name}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="ResidenceTypeId" component="div" className="text-red-600 text-sm mt-1" />
            </div>
            <div className="flex-1">
              <label htmlFor="CityId" className="block text-sm font-medium text-gray-700">
                City
              </label>
              <Field
                as="select"
                name="CityId"
                onBlur={handleBlur}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option hidden label="Select city" />
                {filterCity.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="CityId" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <div>
              <label htmlFor="Description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <Field
                type="text"
                name="Description"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage name="Description" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <div>
              <label htmlFor="Address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <Field
                type="text"
                name="Address"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage name="Address" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <div>
              <label htmlFor="Image" className="block text-sm font-medium text-gray-700">
                Image
              </label>
              <input
                type="file"
                name="Image"
                onChange={(event) => {
                  setFieldValue("Image", event.currentTarget.files[0]);
                }}
                onBlur={handleBlur}
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:text-sm file:font-semibold file:bg-gray-50 hover:file:bg-gray-100"
              />
              <ErrorMessage name="Image" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <div>
              <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Field
                type="email"
                name="Email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage name="Email" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <div>
              <label htmlFor="PhoneNumber" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <Field
                type="text"
                name="PhoneNumber"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage name="PhoneNumber" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <div>
              <label htmlFor="FloorsNumber" className="block text-sm font-medium text-gray-700">
                Number of Floors
              </label>
              <Field
                type="number"
                name="FloorsNumber"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage name="FloorsNumber" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <div>
              <label htmlFor="Rating" className="block text-sm font-medium text-gray-700">
                Rating
              </label>
              <Field
                type="number"
                name="Rating"
                min="1"
                max="5"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage name="Rating" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        )}
      </Formik>
      <Toaster/>
    </div>
  );
}
