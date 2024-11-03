


import React, { useState } from 'react';

const TestimonialsSection = () => {
  // Data for testimonials
  const testimonials = {
    seoExperts: [
      {
        id: 1,
        text: "These guys are the masters when it comes to user-centric link building.",
        name: "Gaetano Nino DiNardi",
        role: "Growth Advisor",
        avatar: "/api/placeholder/48/48"
      },
      {
        id: 2,
        text: "Their SEO strategies have transformed our online presence completely.",
        name: "Sarah Johnson",
        role: "SEO Consultant",
        avatar: "/api/placeholder/48/48"
      },
      {
        id: 3,
        text: "The most innovative approach to technical SEO I've seen.",
        name: "Mike Anderson",
        role: "Digital Strategist",
        avatar: "/api/placeholder/48/48"
      }
    ],
    customers: [
      {
        id: 1,
        text: "Doubled our organic traffic in just 3 months.",
        name: "Emily Roberts",
        role: "Marketing Director",
        avatar: "/api/placeholder/48/48"
      },
      {
        id: 2,
        text: "The ROI from their link building campaign exceeded expectations.",
        name: "David Chen",
        role: "E-commerce Owner",
        avatar: "/api/placeholder/48/48"
      },
      {
        id: 3,
        text: "Best investment we've made in our digital marketing strategy.",
        name: "Lisa Thompson",
        role: "Business Owner",
        avatar: "/api/placeholder/48/48"
      }
    ]
  };

  const [activeTab, setActiveTab] = useState('seoExperts');
  const [currentSlide, setCurrentSlide] = useState(0);

  const currentTestimonials = testimonials[activeTab];

  return (
    <div className=' flex justify-center px-64'>

<div className=' bg-secondry w-full text-primary rounded-b-lg '>
    <div className="w-full h-[207px] mx-auto  bg-primary justify-evenly  flex flex-col rounded-t-lg">
      {/* Header */}

      {/* Tab Buttons */}
      <div className="flex flex-col justify-center items-center gap-4 ">
      <h2 className="text-4xl font-bold text-white  text-center ">
        What others have to say about dofollow.com
      </h2>
      <div >

        <button
          onClick={() => {
            setActiveTab('seoExperts');
            setCurrentSlide(0);
          }}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
            ${activeTab === 'seoExperts' 
              ? 'bg-yellow-500 text-purple-950' 
              : 'bg-purple-800 text-white'}`}
        >
          SEO Experts
        </button>
        <button
          onClick={() => {
            setActiveTab('customers');
            setCurrentSlide(0);
          }}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
            ${activeTab === 'customers' 
              ? 'bg-yellow-500 text-purple-950' 
              : 'bg-purple-800 text-white'}`}
        >
          Customers
        </button>
      </div>

      </div>
      </div>
      {/* Testimonial Content */}
      <div className="relative min-h-[400px] flex flex-col justify-center items-center gap-12 rounded-b-lg">
        <div className="text-center">
          <p className="text-xl mb-8">
            "{currentTestimonials[currentSlide].text}"
          </p>
          <div className="flex items-center justify-center gap-4">
            <img
              src={currentTestimonials[currentSlide].avatar}
              alt={currentTestimonials[currentSlide].name}
              className="w-12 h-12 rounded-full"
            />
            <div className="text-left">
              <p className="font-medium">
                {currentTestimonials[currentSlide].name}
              </p>
              <p className="text-purple-300">
                {currentTestimonials[currentSlide].role}
              </p>
            </div>
          </div>
        </div>
         {/* Dot Navigation */}
      <div className="flex justify-center gap-2 mt-8">
        {currentTestimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors
              ${currentSlide === index 
                ? 'bg-purple-500' 
                : 'bg-purple-300'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      </div>

     
    </div>
    </div>
  );
};

export default TestimonialsSection;