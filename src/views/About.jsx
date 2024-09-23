import React from 'react';
import MyProfileCard from '../components/molecules/MyProfileCard';
import avatar from '../asserts/SVG/WhatsApp Image 2024-09-15 at 7.11.23 PM (1).jpeg';

const About = () => {
  const contacts = [];

  return (
    <div className="bg-gradient-to-r from-[#2c3e50] to-[#4ca1af] min-h-screen py-12 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flex container to hold both sections side by side */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Company Story Section */}
          <section className="md:w-1/2 text-center md:text-left mb-16">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 mt-10">
              About Us
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed max-w-4xl">
              Welcome to Traveler and Booking, your number one source for all things travel. We're dedicated to giving you the very best of travel experiences, with a focus on reliability, customer service, and uniqueness.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed max-w-4xl mt-6">
              Founded in 2024, Traveler and Booking has come a long way from its beginnings. When we first started out, our passion for providing unforgettable travel experiences drove us to start our own business.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed max-w-4xl mt-6">
              We now serve customers all over the world and are thrilled that we're able to turn our passion into a website that brings joy and adventure to so many.
            </p>
          </section>

          {/* MyProfile Section */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <MyProfileCard contacts={contacts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
