import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import d1 from '../assets/d1.svg';
import d2 from '../assets/d2.svg';
import d3 from '../assets/d3.svg';
import d4 from '../assets/d4.svg';
import d5 from '../assets/d5.svg';
import d6 from '../assets/d6.svg';

const DifferentiationSection = () => {
  const features = [
    { image: d1, title: "Retention Marketing", description: "Retention marketing focuses on keeping existing customers engaged, happy, and coming back for more. Instead of constantly chasing new clients, it aims to build loyalty through personalized experiences, rewards, and great customer service. By nurturing these relationships, businesses can boost repeat purchases and strengthen brand loyalty. In the long run, it's often more cost-effective than acquiring new customers." },
    { image: d2, title: "Follow-up Strategies", description: "Follow-up strategies involve reaching out to customers after an initial interaction to strengthen relationships and encourage repeat business. This can include personalized emails, check-ins after purchases, or loyalty program promotions. By actively engaging customers and addressing their needs, businesses can enhance satisfaction and loyalty. Ultimately, effective follow-up turns one-time buyers into lifelong customers." },
    { image: d3, title: "Brand Development", description: " Brand development is the process of creating and strengthening a brand's identity, image, and presence in the market. It involves defining the brand’s values, mission, and unique selling points, as well as designing a cohesive visual identity. This helps build recognition and trust among customers. Ultimately, effective brand development fosters loyalty and can lead to increased sales and market share" },
    { image: d4, title: "Fresh and Strategic Outreach Campaigns", description: "Fresh and strategic outreach campaigns focus on finding new and creative ways to connect with potential prospects. They aim to send the right messages through the best channels to grab people’s attention. By using engaging content and personal touches, brands can stand out and build genuine connections. The goal is to spark interest and turn those connections into lasting relationships!" },
    { image: d5, title: "Link guarantee", description: "We monitor links and replace any broken ones for free." },
    { image: d6, title: "No lock-in contracts", description: "We recommend a 6-month engagement but don’t force commitment." },
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">How is razor360° different?</h2>
        
        {/* Swiper Carousel for Mobile and Grid for Larger Screens */}
        <div className="m-8">
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="sm:hidden"
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white shadow-md p-6 my-9 rounded-lg flex flex-col items-start">
                  <div className="flex flex-row items-center w-full">
                    <img src={feature.image} alt={feature.title} className="w-12 h-12 mr-4" />
                    <h3 className="text-xl font-semibold flex-grow text-center">{feature.title}</h3>
                  </div>
                  <p className="mt-4 text-left">{feature.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Grid for larger screens */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white shadow-md p-6 rounded-lg flex flex-col items-start">
                <div className="flex flex-row items-center w-full">
                  <img src={feature.image} alt={feature.title} className="w-12 h-12 mr-4" />
                  <h3 className="text-xl font-semibold flex-grow text-center">{feature.title}</h3>
                </div>
                <p className="mt-4 text-left">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DifferentiationSection;
