


import React, { useState } from 'react';

const TestimonialsSection = () => {
  // Data for testimonials
  const testimonials = {
    seoExperts: [
      {
        id: 1,
        text: "Razor360 is a great example of an agency that understands modern link building and digital strategies.",
        name: "Amit Choudhary",
        role: "Growth Advisor | ex-Shopify, G2, Atlassian",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      {
        id: 2,
        text: "I was recently challenged by the Razor360 team to review their approach to link building. They follow the best practices!",
        name: "Rajiv Mehta",
        role: "Freelance SEO | Owner of SEOjobs.com",
        avatar: "https://randomuser.me/api/portraits/men/44.jpg"
      },
      {
        id: 3,
        text: "These professionals are the masters when it comes to user-centric link building and SEO innovation.",
        name: "Suresh Naidu",
        role: "Growth Advisor",
        avatar: "https://randomuser.me/api/portraits/men/68.jpg"
      }
    ],
    customers: [
      {
        id: 1,
        text: "Razor360 delivers high-quality backlinks and an easy, hands-off experience. Plus, they ensure our site stays safe from any Google penalties.",
        name: "Ravi Shekhar",
        role: "CEO – Testimonial Hero",
        avatar: "https://randomuser.me/api/portraits/men/85.jpg"
      },
      {
        id: 2,
        text: "Razor360 crafted a phenomenal link-building strategy that helped us land on high-profile sites like HubSpot. Our traffic and rankings have improved significantly!",
        name: "Ankit Patel",
        role: "CEO – Great Lakes Advisory",
        avatar: "https://randomuser.me/api/portraits/men/52.jpg"
      },
      {
        id: 3,
        text: "Working with Razor360 was a game-changer. Our domain authority skyrocketed within a few months, and they were always flexible to our specific needs.",
        name: "Vikram Singh",
        role: "CEO – KeyCommerce",
        avatar: "https://randomuser.me/api/portraits/men/77.jpg"
      }
    ]
  };
  

  const [activeTab, setActiveTab] = useState('seoExperts');
  const [currentSlide, setCurrentSlide] = useState(0);

  const currentTestimonials = testimonials[activeTab];

  return (
    <div className=' flex justify-center px-64'>
 
<div className=' bg-secondry w-full text-primary rounded-b-lg flex flex-col items-center justify-center'>
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
              ? 'bg-yellow-500 text-primary' 
              : 'bg-contactSecondry text-white'}`}
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
              ? 'bg-yellow-500 text-primary' 
              : 'bg-contactSecondry text-white'}`}
        >
          Customers
        </button>
      </div>

      </div>
      </div>
      {/* Testimonial Content */}
      <div className="relative min-h-[400px] w-3/4 flex flex-col justify-center items-center gap-12 rounded-b-lg">
        <div className="text-center">
          <p className="text-xl mb-8">
            "{currentTestimonials[currentSlide].text}"
          </p>
          <div className="flex items-center justify-center gap-4 mt-16">
            <img
              src={currentTestimonials[currentSlide].avatar}
              alt={currentTestimonials[currentSlide].name}
              className="w-12 h-12 rounded-full"
            />
            <div className="text-left">
              <p className="font-medium">
                {currentTestimonials[currentSlide].name}
              </p>
              <p className="text-primary">
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