import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import '../../styles/swiper.css';

import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import quote from '../../assets/common/Testimonial/quote.svg';

// TestimonialCard component to display individual testimonial data
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white bg-[rgb(252,252,252)] p-4 rounded-lg shadow-lg mx-2">
      {/* Quote Icon */}
      <div className="flex mb-4 text-green-500 text-3xl">
        <img src={quote} alt="Quote" />
      </div>

      {/* Testimonial Compliment Text */}
      <p className="text-[#585757] text-[0.7rem] sm:text-[0.8rem] md:text-[0.8rem] lg:text-[1rem] font-poppins mb-4">
        {testimonial.compliment}
      </p>

      {/* Testimonial Details: Image, Name, Role, and Rating */}
      <div className=" flex items-center justify-between p-2 sm:flex flex-col sm:items-center md:flex md:flex-row">
        <div className="flex items-center">
          {/* User's Profile Image */}
          <img src={testimonial.img} alt={testimonial.name} className="w-12 h-12 rounded-full" />
          
          {/* User's Name and Role */}
          <div className="ml-4">
            <h4 className="font-bold text-gray-800 text-[0.8rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.1rem]">
              {testimonial.name}
            </h4>
            <span className="text-gray-500 text-[0.8rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.1rem]">
              {testimonial.role}
            </span>
          </div>
        </div>

        {/* User's Star Rating */}
        <div className="flex mt-4">
          {/* Display star icons based on rating value */}
          {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
            <span key={i} className="text-[#FF8A00] text-xl">★</span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Testimonials component that holds the Swiper carousel and controls
const Testimonials = ({ testimonialsData = [], showButtons = true, bgColor = 'rgb(242,242,242)' }) => {
  // Swiper configuration settings for slides, breakpoints, and navigation
  const swiperSettings = {
    slidesPerView: 1,
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
    spaceBetween: 10,
    loop: false, // No infinite looping
    pagination: {
      clickable: true,
      el: '.custom-swiper-pagination', // Custom pagination class
    },
    navigation: {
      nextEl: '.custom-swiper-button-next', // Custom next button
      prevEl: '.custom-swiper-button-prev', // Custom previous button
    },
    modules: [Navigation, Pagination, Autoplay, EffectFade], // Swiper modules for additional features
  };

  // Return message if no testimonials are available
  if (testimonialsData.length === 0) {
    return <p>No testimonials available.</p>;
  }

  return (
    <section>
      {/* Container with dynamic background color passed via bgColor prop */}
      <div style={{ backgroundColor: bgColor }}>
        <div className="w-10/12 mx-auto relative p-10">
          <div className="relative">
            {/* Section Title */}
            <h2 className="text-xl mb-3 sm:text-3xl font-bold break-words leading-snug sm:leading-normal">
              <span className="block sm:inline ml-2">Client</span>
              <span className="block sm:inline ml-2">Testimonials</span>
            </h2>

            {/* Custom Navigation Buttons for Swiper */}
            {showButtons && (
              <div className="absolute top-1/2 right-2 transform -translate-y-1/2 flex space-x-2">
                <button className="custom-swiper-button-prev p-2 text-xs sm:text-sm md:text-base lg:text-lg rounded-full bg-white text-black border border-gray-300 hover:bg-[#00B207] hover:border-[#00B207] transition-colors duration-300">
                  {/* Left Arrow Icon */}
                  <FaArrowLeft className="arrowleft text-xs sm:text-sm md:text-base lg:text-lg hover:text-white" />
                </button>
                <button className="arrowright custom-swiper-button-next p-2 text-xs sm:text-sm md:text-base lg:text-lg rounded-full bg-white text-black border border-gray-300 hover:bg-[#00B207] hover:border-[#00B207] transition-colors duration-300">
                  {/* Right Arrow Icon */}
                  <FaArrowRight className="text-xs sm:text-sm md:text-base lg:text-lg hover:text-white" />
                </button>
              </div>
            )}
          </div>

          {/* Swiper Carousel with Testimonial Cards */}
          <Swiper {...swiperSettings}>
            {testimonialsData.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Dots */}
          <div className="custom-swiper-pagination mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;