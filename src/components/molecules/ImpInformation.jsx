import React from "react";
import { Link } from "react-router-dom";

export default function ImpInformation() {
  return (
    <div className="xl:w-4/6 mx-auto   rounded-md my-[180px]  overflow-hidden mb-9 border pb-3">
      <h1 className="mb-[32px] py-5 px-6 bg-[#F2C94C] roboto-medium text-[18px]">
        Important information about your booking
      </h1>
      <div className="w-11/12 mx-auto">
      <ul className="list-decimal my-8 ml-3 roboto-regular text-[15px]">
        <li>
          This rate is non-refundable. If you change or cancel your booking you
          will not get a refund or credit to use for a future stay.
        </li>
        <li>Stay extensions will require a new reservation.</li>
        <li>Front desk staff will greet guests on arrival</li>
        <li>No refunds will be issued for late check-in or early check-out.</li>
      </ul>
      <p className="mb-6 roboto-regular text-[14px]">
      By clicking the button below, I acknowledge that I have reviewed the <Link to="/" className="text-[#2F80ED]">Privacy Statement</Link> and have reviewd and accept <Link to="/" className="text-[#2F80ED]">the Rules and Restrictions</Link> and  <Link to="/" className="text-[#2F80ED]">Terms of Use</Link>.
      </p>
      <button className="bg-[#2F80ED] w-40 h-11 rounded-md text-[#fff] roboto-medium hover:bg-[#2565b8] mb-8 text-[15px]">
      Complete Booking
      </button>
      <div className="flex gap-[8px]">
      <svg  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 5.75C8.11 5.75 7.75 6.54 7.75 8V8.62H12.25V8C12.25 6.54 11.89 5.75 10 5.75Z" fill="#828282"/>
<path d="M9.99801 13.0979C10.2897 13.0979 10.5695 12.9821 10.7758 12.7758C10.9821 12.5695 11.098 12.2897 11.098 11.9979C11.098 11.7062 10.9821 11.4264 10.7758 11.2201C10.5695 11.0138 10.2897 10.8979 9.99801 10.8979C9.70627 10.8979 9.42648 11.0138 9.22019 11.2201C9.0139 11.4264 8.89801 11.7062 8.89801 11.9979C8.89801 12.2897 9.0139 12.5695 9.22019 12.7758C9.42648 12.9821 9.70627 13.0979 9.99801 13.0979Z" fill="#828282"/>
<path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM15.38 12.5C15.38 14.7 14.7 15.38 12.5 15.38H7.5C5.3 15.38 4.62 14.7 4.62 12.5V11.5C4.62 9.79 5.03 9 6.25 8.73V8C6.25 7.07 6.25 4.25 10 4.25C13.75 4.25 13.75 7.07 13.75 8V8.73C14.97 9 15.38 9.79 15.38 11.5V12.5Z" fill="#828282"/>
</svg>
<span className="text-[14px] roboto-regular">We use secure transmission and encrypted storage to protect your personal information</span>
      </div>
      </div>
    </div>
  );
}