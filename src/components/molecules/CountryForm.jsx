import { ErrorMessage, Field, Formik } from 'formik';
import React from 'react';
import { addCountry } from '../../API/endpoint/country';
import toast, { Toaster } from 'react-hot-toast';

export default function CountryForm() {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const formData = new FormData();
    formData.append('Name', values.Name);
    formData.append('Description', values.Description);
    formData.append('Image', values.Image);

    try {
      const response = await addCountry(formData);
      if (response.status === 400 || response.status === 401) {
        toast.error('Failed to add country');
      } else {
        toast.success('Country added successfully');
        resetForm();
      }
    } catch (error) {
      toast.error('An error occurred while adding the country');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto my-[30px] p-8 bg-white rounded-xl shadow-lg border border-gray-200">
  <h1 className='text-center p-4 text-[27px]'>
        Add Country
      </h1>      <Formik
        initialValues={{ Name: '', Description: '', Image: null }}
        validate={values => {
          const errors = {};
          if (!values.Name) {
            errors.Name = 'Country Name is required';
          }
          if (!values.Description) {
            errors.Description = 'Description is required';
          }
          if (!values.Image) {
            errors.Image = 'Image is required';
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
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="Name" className="block text-sm font-semibold text-gray-700 mb-2">
                Country Name
              </label>
              <Field
                type="text"
                name="Name"
                placeholder="Enter the country name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              <ErrorMessage name="Name" component="div" className="text-red-600 text-sm mt-2" />
            </div>

            <div>
              <label htmlFor="Description" className="block text-sm font-semibold text-gray-700 mb-2">
                Description
              </label>
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
              <ErrorMessage name="Description" component="div" className="text-red-600 text-sm mt-2" />
            </div>

            <div className="text-center">
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
              <ErrorMessage name="Image" component="div" className="text-red-600 text-sm mt-2" />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-indigo-600 text-white font-medium rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        )}
      </Formik>
      <Toaster />
    </div>
  );
}
