import React from 'react'
import { InternshipCard } from '../../components/Card';
import CountUp from 'react-countup';


export default function Internship() {






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




  return (
    <div className='intern-page'>
      <div className="intern-main">
        <div className="intern-head">
          <div className="int-left">
            <h2>Unlock Your Future</h2>
            <p>Discover world-class internships and gain hands-on experience with top industry leaders.</p>
            <a href="#" className="btn-green btn-bottom">Get Started</a>
          </div>
          <div className="int-right">
            <h1 className='btn-green btn-bottom'>Find Your Dream Internship Today!</h1>
          </div>
        </div>
        <div className="intern-apply">
          <h2>Explore Internship Categories</h2>
          <p>Choose from a wide range of internship opportunities and kickstart your professional journey.</p>

          <div className="intern-card-container cards">
            {internships.map((internship, idx) => (
              <InternshipCard key={idx} url={internship.imgUrl} title={internship.title} />
            ))}
          </div>
        </div>
        <section className="count-intern">
          <div className="count-i">
            <h3><CountUp enableScrollSpy={true}  end={30}/> </h3>
            <p>Internship Available</p>
            </div>
          <div className="count-i">
            <h3><CountUp enableScrollSpy={true} end={50}/></h3>
            <p>Industry Partners</p>
            </div>
          <div className="count-i">
            <h3><CountUp enableScrollSpy={true} end={95}/></h3>
            <p>Success Rate</p>
            </div>
       
        </section>
      </div>

    </div>
  )
}
