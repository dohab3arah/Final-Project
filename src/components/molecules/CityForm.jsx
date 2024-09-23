import { Field, Formik, Form } from 'formik';
import React, { useEffect, useState } from 'react';
import { getCountry } from '../../API/endpoint/country';
import { addCity } from '../../API/endpoint/city';
import toast, { Toaster } from 'react-hot-toast';

export default function CityForm() {
  const [countries, setCountries] = useState([]);

  const getCountryData = async () => {
    try {
      const response = await getCountry();
      setCountries(response.data.data);
    } catch (error) {
      toast.error('Error fetching countries');
    }
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const formData = new FormData();
    formData.append('Name', values.Name);
    formData.append('Description', values.Description);
    formData.append('Image', values.Image);
    formData.append('CountryId', values.CountryId);
    try {
      const response = await addCity(formData);      
      if (response.status === 400 || response.status === 401) {
        toast.error('Failed to add city');
      } else {
        toast.success('City added successfully');
        resetForm();
      }
    } catch (error) {
      toast.error('An error occurred while adding the city');
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    getCountryData();
  }, []);

  return (
    <div className="max-w-lg mx-auto my-[30px] p-6 bg-white shadow-md rounded-lg">
      <h1 className='text-center p-4 text-[27px]'>
        Add City
      </h1>
      <Formik
        initialValues={{ Name: '', Description: '', Image: '', CountryId: '' }}
        validate={values => {
          const errors = {};
          if (!values.Name) {
            errors.Name = 'Required';
          }
          if (!values.Image) {
            errors.Image = 'Required';
          }
          if (!values.CountryId) {
            errors.CountryId = 'Required';
          }
          if (!values.Description) {
            errors.Description = 'Required';
          }
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
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">City Name</label>
              <Field
                type="text"
                name="Name"
                id="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Name}
              />
              {errors.Name && touched.Name && <div className="text-red-600 text-sm">{errors.Name}</div>}
            </div>
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">Choose a country</label>
              <Field
                as="select"
                id="country"
                name="CountryId"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={(e) => setFieldValue('CountryId', e.target.value)}
                onBlur={handleBlur}
                value={values.CountryId}
              >
                <option hidden>country</option>
                {countries.map((country) => (
                  <option key={country.id} value={country.id}>{country.name}</option>
                ))}
              </Field>
              {errors.CountryId && touched.CountryId && <div className="text-red-600 text-sm">{errors.CountryId}</div>}
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <Field
                as="textarea"
                name="Description"
                id="description"
                rows="4"
                placeholder="Enter a description"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Description}
              />
              {errors.Description && touched.Description && <div className="text-red-600 text-sm">{errors.Description}</div>}
            </div>
            <div className='text-center'>
              <label htmlFor="image" className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md inline-block">
                <i className="fas fa-image mr-2"></i>
                Upload Image
              </label>
              <input
                id="image"
                name="Image"
                type="file"
                className="hidden"
                onChange={(event) => {
                  const file = event.currentTarget.files[0];
                  setFieldValue('Image', file);
                }}
              />
              {errors.Image && touched.Image && <div className="text-red-600 text-sm">{errors.Image}</div>}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <Toaster />
    </div>
  );
}
