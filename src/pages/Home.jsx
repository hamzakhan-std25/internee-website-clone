import React from 'react'
import groupImg from '../assets/images/Group-img-white.webp'
import '../styles/global.css'
import pic1 from '../assets/icons/cloud.png'
import pic2 from '../assets/icons/see.png'
import pic3 from '../assets/icons/collab.png'
import pic4 from '../assets/icons/logo1.png'
import pic5 from '../assets/icons/nics.png'
import pic6 from '../assets/icons/pitb.png'
import { BasicCard, DetailCard, InternshipCard } from '../components/Card'


export default function Home() {










  const interneeProjectmini = [

    // first mini projects 
    {
      iconSvg:
        () => {
          return (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-workflow w-5 h-5 mr-2">
              <rect width="8" height="8" x="3" y="3" rx="2"></rect>
              <path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
              <rect width="8" height="8" x="13" y="13" rx="2"></rect>
            </svg>
          )
        },
      title: "SDLC Implementation via internee.pk",
      details:

        () => {
          return (
            <>
              Experience the complete Software Development Life Cycle through structured tasks and milestones, part of our <b>virtual internship</b> offerings.
            </>
          )
        }
    },


    // second mini project 
    {
      iconSvg:
        () => {
          return (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open w-6 h-6 text-[#43A724]">
              <path d="M12 7v14"></path>
              <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
            </svg>
          )
        },
      title: "Guided Learning Path at internee.pk",
      details:

        () => {
          return (
            <>
              Follow a structured learning path designed for both beginners and advanced learners as part of our <b>virtual internship</b> curriculum.
            </>
          )
        }
    },

  ];




  const interneeProjects = [

    // first internee project 
    {
      iconSvg:
        () => {
          return (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase text-[#43A724] w-7 h-7">
              <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              <rect width="20" height="14" x="2" y="6" rx="2"></rect>
            </svg>
          )
        },
      title: " details title may write",
      details:

        () => {
          return (
            <>
              Gain practical experience through real-world projects that simulate actual industry scenarios. Each task is carefully designed to enhance your professional portfolio through our <b>virtual internships.</b>
            </>
          )
        },
      detailList: [
        "Project-based learning",
        "Industry-standard practices",
        "Portfolio building"
      ]
    },

    // second internee project  
    {
      iconSvg:
        () => {
          return (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-check text-[#43A724] w-7 h-7">
              <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
          )
        },
      title: "Skill Verification System by internee.pk",
      details:

        () => {
          return (
            <>
              Each completed task adds to your verified skills portfolio. Showcase your capabilities with confidence through our <b>virtual internships</b> and comprehensive tracking system.
            </>
          )
        },
      detailList: [
        "Skill verification",
        "Progress tracking",
        "Achievement badges"
      ]
    },



  ];






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
    <>

      {/* hero section  */}

      <section className="hero">
        <div className="container">
          <div className="content">
            <h1>Looking for
              dream internship?</h1>
            <p>Internee.pk kickstart student's tech careers with first internships, providing industry exposure, practical skills, and networking opportunities.</p>
            <div className="btns">
              <a href="#" className='btn-green'>Our Job Portal</a>
              <a href="#" className='btn-white'>Sign in <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transform rotate-45">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg></a>
            </div>
          </div>
          <img src={groupImg} alt="group-img" />

        </div>
        <div className="shadow"></div>
      </section>
      <section className='collaboration'>
        <p>Collaborated with Trusted Worldwide Partners</p>
        <div className="img-group">
          <a href="#"><div></div><img src={pic1} alt="pic1" /></a>
          <a href="#"><div></div><img src={pic2} alt="pic2" /></a>
          <a href="#"><div></div><img src={pic3} alt="pic3" /></a>
          <a href="#"><div></div><img src={pic4} alt="pic4" /></a>
          <a href="#"><div></div><img src={pic5} alt="pic5" /></a>
          <a href="#"><div></div><img src={pic6} alt="pic6" /></a>
        </div>
      </section>
      <section className='internships'>
        <div className="intern-container">
          <div className="riben">
            <span>Trending</span> Explore Internship Opportunities
          </div>
          <h2>Your Dream Internship is Just One <br />

            Click Away!</h2>
          <div className="card-container">
            {internships.map(internship => (
              <InternshipCard url={internship.imgUrl} title={internship.title} />
            ))}
          </div>
        </div>

      </section>
      <section className="skills">
        <div className="bg-layer"></div>
        <div className="skill-container">
          <div className="top">
            <span className="green">
              {interneeProjectmini[0].iconSvg()}
              Task Management Platform</span>
            <h2>Master Real-World Skills with Our Task Portal at internee.pk</h2>
            <p>Transform theoretical knowledge into practical expertise through our comprehensive task portal. Build, learn, and grow with industry-standard projects from our <b>virtual internships</b> on <b>internee.pk.</b></p>

          </div>
          <div className="skill-card-container">
            <div className="top-projects">

              {interneeProjects.map((Project) => {
                return (
                  <DetailCard card={Project} />
                );
              }
              )}


            </div>
            <div className="top-projects">


              {interneeProjectmini.map((Project) => {
                return (
                  <BasicCard card={Project} />
                );
              }
              )}


            </div>

            <div className="card bottom-card">
              <h1>
                Ready to Build Your Professional Portfolio with internee.pk?
              </h1>
              <p>
                Join our <b>virtual internships</b> and get access to industry-standard tasks that will help you build a remarkable portfolio, only at <b>internee.pk</b>
              </p>
              <a href="#" className="btn-green btn-bottom">Start Your Journey Now
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right ml-2 mt-1 h-5 w-5">
                  <path d="m9 18 6-6-6-6"></path>
                </svg> </a>
            </div>
          </div>

        </div>

      </section>

      <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, enim et. Quasi, labore? Officia minima, ducimus nam necessitatibus beatae animi quam, rerum optio debitis obcaecati illum sunt eos quia error.
      </h2>



    </>
  )
}
