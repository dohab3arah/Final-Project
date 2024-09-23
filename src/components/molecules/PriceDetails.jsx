import React from 'react';

const PriceDetails = () => {
return (
    <div className="max-w-md  bg-white shadow-md rounded-md w-full">
    <div className="bg-emerald-300 p-4 rounded-t-md">
        <h2 className="text-lg font-semibold">Price Details</h2>
    </div>
    <div className="p-4 space-y-2">
        <div className="flex justify-between">
        <span className='text-sm'>1 room X 2 nights</span>
        <span className='text-sm text-gray-600'>$120.32</span>
        </div>
        <div className="flex justify-between">
        <span>Tax and service fees</span>
        <span className='text-sm text-gray-600'>$8.32</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between font-bold">
        <span>Total</span>
        <span className='text-xl'>$130</span>
        </div>
        <div className="text-blue-600 cursor-pointer mt-2">
        <span className='text-sm'>Use a coupon, credit or promotional code</span>
        </div>
        <div className="mt-4">
        <label className="block mb-2 text-sm">Coupon code</label>
        <div className="flex">
            <input
            type="text"
            placeholder="200-VOUCHER"
            className="w-2/3 p-2 border rounded-md"
            />
            <button className="w-1/3 p-2 bg-gray-800 text-white rounded-md hover:bg-gray-400 ml-2">
            Apply Coupon
            </button>
        </div>
        </div>
    </div>
    </div>
);
};

export default PriceDetails;