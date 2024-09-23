
import React, { useState } from 'react';
import visa from '../../asserts/PNG/visa.png';
import mastercard from '../../asserts/PNG/mastercard.png';
import express from '../../asserts/PNG/express.png';
import discover from '../../asserts/PNG/discover.png';

export default function PaymentOptions({onPaymentSuccess}) {
  const [paymentMethod, setPaymentMethod] = useState('debit');
  const [formData, setFormData] = useState({
    nameOnCard: '',
    cardNumber: '',
    expirationMonth: '',
    expirationYear: '',
    securityCode: '',
    billingZipCode: '',
  });

  const handlePaymentMethodClick = (method) => {
    setPaymentMethod(method);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPaymentSuccess?.();
    console.log('Form Data:', formData);
  };

  return (
    <div  className="xl:w-4/6 mx-auto   rounded-md my-[180px]  overflow-hidden mb-9 border flight-payment">
          <h3 className="text-xl font-semibold mb-4 text-white bg-blue-500 p-4 ">
            Payment options
          </h3>

          <div className="mb-4 flex flex-wrap gap-4 sm:gap-2 lg:gap-4 xl:gap-6">
            <button
              onClick={() => handlePaymentMethodClick('debit')}
              className={`${
                paymentMethod === 'debit'
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-gray-700'
              } px-4 py-2 text-sm md:text-base lg:text-lg xl:text-lg`}
              >
              Debit/Credit Card
            </button>
            <button
              onClick={() => handlePaymentMethodClick('paypal')}
              className={`${
                paymentMethod === 'paypal'
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-gray-700'
              } px-4 py-2 text-sm md:text-base lg:text-lg xl:text-lg`}
              >
              PayPal
            </button>
            <button
              onClick={() => handlePaymentMethodClick('bank')}
              className={`${
                paymentMethod === 'bank'
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-gray-700'
              } px-4 py-2 text-sm md:text-base lg:text-lg xl:text-lg`}
              >
              Bank Transfer
            </button>
          </div>

          {paymentMethod === 'debit' && (
            <form onSubmit={handleSubmit}>
              <div className='ml-3'>
              <div className="mb-4 flex space-x-4">
                <a href="#visa" className="block">
                  <img
                    src={visa}
                    alt="Visa"
                    className="h-10 w-20 object-contain bg-gray-200 p-2 rounded-md"
                    />
                </a>
                <a href="#mastercard" className="block">
                  <img
                    src={mastercard}
                    alt="Mastercard"
                    className="h-10 w-20 object-contain bg-gray-200 p-2 rounded-md"
                    />
                </a>
                <a href="#express" className="block">
                  <img
                    src={express}
                    alt="American Express"
                    className="h-10 w-20 object-contain bg-gray-200 p-2 rounded-md"
                    />
                </a>
                <a href="#discover" className="block">
                  <img
                    src={discover}
                    alt="Discover"
                    className="h-10 w-20 object-contain bg-gray-200 p-2 rounded-md"
                    />
                </a>
              </div>
              <div className="mb-4 w-3/4">
                <label htmlFor="name-on-card" className="block text-gray-700">
                  Name on card
                </label>
                <input
                  type="text"
                  id="name-on-card"
                  name="nameOnCard"
                  value={formData.nameOnCard}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full bg-gray-200 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
              </div>
              <div className="mb-4 w-3/4">
                <label htmlFor="card-number" className="block text-gray-700">
                  Debit/Credit card number
                </label>
                <input
                  type="text"
                  id="card-number"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full bg-gray-200 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
              </div>
              <div className="mb-4 flex space-x-4">
                <div className="w-1/2">
                  <label htmlFor="expiration-month" className="block text-gray-700">
                    Expiration Date
                  </label>
                  <div className="flex space-x-2">
                    <select
                      id="expiration-month"
                      name="expirationMonth"
                      value={formData.expirationMonth}
                      onChange={handleChange}
                      className="mt-1 p-2 block w-full bg-gray-200 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      >
                      <option value="" disabled>
                        Month
                      </option>
                      {Array.from({ length: 12 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                    <select
                      id="expiration-year"
                      name="expirationYear"
                      value={formData.expirationYear}
                      onChange={handleChange}
                      className="mt-1 p-2 block w-full bg-gray-200 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      >
                      <option value="" disabled>
                        Year
                      </option>
                      {Array.from({ length: 10 }, (_, i) => (
                        <option key={i + 2023} value={i + 2023}>
                          {i + 2023}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="w-1/2">
                  <label htmlFor="security-code" className="block text-gray-700">
                    Security Code
                  </label>
                  <input
                    type="text"
                    id="security-code"
                    name="securityCode"
                    value={formData.securityCode}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full bg-gray-200 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
              </div>
              <div className="mb-4 w-3/4">
                <label htmlFor="billing-zip-code" className="block text-gray-700">
                  Billing zip code
                </label>
                <input
                  type="text"
                  id="billing-zip-code"
                  name="billingZipCode"
                  value={formData.billingZipCode}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full bg-gray-200 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
              </div>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-3  hover:bg-blue-600"
                >
                Submit Payment
              </button>
            </form>
          )}
          {paymentMethod === 'paypal' && (
            <div>PayPal payment form goes here...</div>
          )}
          {paymentMethod === 'bank' && (
            <div>Bank Transfer payment form goes here...</div>
          )}
        </div>
     
  );
}