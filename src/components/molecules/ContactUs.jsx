import React from "react";

const ContactUs = ({ contacts = [] }) => {
  return (
    <div className="w-11/12 mx-auto py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 text-gray-800">Contact Us</h1>
      <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="space bg-white shadow-lg rounded-lg w-full sm:w-72 md:w-64 lg:w-80 p-6 transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative w-full h-[320px]   overflow-hidden  mb-6">
              <img
                src={contact.avatarUrl}
                alt={`${contact.name}'s avatar`}
                className="w-full h-full  hover:scale-[1.2] overflow-hidden duration-[0.8s] object-scale-down"
              />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{contact.name}</h2>
            <p className="text-gray-600 mb-1 text-sm sm:text-base">{contact.role}</p>
            <p className="text-gray-500 text-sm sm:text-base">{contact.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
