import React from 'react';
import { 
  Target, 
  BarChart2, 
  FileText, 
  Link, 
  Share2, 
  Users 
} from 'lucide-react';

const WhoWeServeSection = () => {
  const criteria = [
    {
      icon: <Target className="w-8 h-8" />,
      text: "Have an established content strategy"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      text: "Actively produce high-quality content"
    },
    {
      icon: <Link className="w-8 h-8" />,
      text: "Are willing to link to informative content - not just commercial pages"
    },
    {
      icon: <BarChart2 className="w-8 h-8" />,
      text: "Have figured out their KPI indicators"
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      text: "Share our mindset towards link building"
    },
    {
      icon: <Users className="w-8 h-8" />,
      text: "Are interested in a long-term partnership"
    }
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h3 className="text-purple-600   font-medium mb-4">
            WHO WE'RE FOR
          </h3>
          <h2 className="text-4xl max-sm:text-2xl font-bold text-purple-950 mb-2">
            We only work with
          </h2>
          <h2 className="text-4xl  max-sm:text-2xl font-bold text-purple-950">
            B2B SaaS companies who:
          </h2>
        </div>

        {/* Criteria Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {criteria.map((item, index) => (
            <div key={index} className="flex items-center gap-4 justify-center ">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-custom-pink flex items-center justify-center text-white">
                {item.icon}
              </div>
              <div className="flex-grow">
                <p className="text-lg max-sm:text-base text-purple-950 font-medium">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoWeServeSection;