import React from 'react';
import InternshipCard from '../../components/InternshipCard';

// Sample data for internships

const internships = [
  {
    title: 'Graphic Design',
    imgUrl: 'https://internee-react.vercel.app/images/graphics.webp'
  },
  {
    title: 'Chatbot Development',
    imgUrl: 'https://internee-react.vercel.app/images/chatbot.webp'
  },
  {
    title: 'Other Internships',
    imgUrl: 'https://internee-react.vercel.app/images/machine.jpg'
  },
  {
    title: 'Frontend Internship',
    imgUrl: 'https://internee-react.vercel.app/images/frontend.webp'
  },
  {
    title: 'App Development',
    imgUrl: 'https://internee-react.vercel.app/images/mobile-app.webp'
  },
  {
    title: 'Backend Development',
    imgUrl: 'https://www.internee.pk/images/BackendDevelopment.webp'
  },
];


export default function Intern() {
  return (
     <div className="intern-container">
          <div className="riben">
            <span>Trending</span> Explore Internship Opportunities
          </div>
          <h2>Your Dream Internship is Just One <br />

            Click Away!</h2>
          <div className="intern-card-container">
            {internships.map((internship, idx) => (
              <InternshipCard key={idx} url={internship.imgUrl} title={internship.title} />
            ))}
          </div>
        </div>

  )
}
