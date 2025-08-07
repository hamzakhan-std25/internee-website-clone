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




    // first internee project 
   const showCaseProjects=[ 
    // first showcase projects 
    {
      iconSvg:
        () => {
          return (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award text-[#43A724] w-8 h-8 mb-4">
                                        <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                                        <circle cx="12" cy="8" r="6"></circle>
                                    </svg>
          )
        },
      title: " Build Real Interview Confidence",
      details:

        () => {
          return (
            <>
           Reduce anxiety and increase success rate through repeated AI-based mock interview sessions.  </>
          )
        },
      detailList: [
      ]
    },
    // secont showcase projects 
    {
      iconSvg:
        () => {
          return (
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-no-axes-column-increasing text-[#43A724] w-8 h-8 mb-4">
                                        <line x1="12" x2="12" y1="20" y2="10"></line>
                                        <line x1="18" x2="18" y1="20" y2="4"></line>
                                        <line x1="6" x2="6" y1="20" y2="16"></line>
                                    </svg>
          )
        },
      title: " Become Job-Ready Fast",
      details:

        () => {
          return (
            <>
             Structured interview training that prepares you for real-world scenarios. Perfect for <strong>students applying for internships</strong>
                                        . </>
          )
        },
      detailList: [
      ]
    },
    // third showcase projects 
    {
      iconSvg:
        () => {
          return (
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text text-[#43A724] w-8 h-8 mb-4">
                                        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                                        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                        <path d="M10 9H8"></path>
                                        <path d="M16 13H8"></path>
                                        <path d="M16 17H8"></path>
                                    </svg>
          )
        },
      title: " Track Progress with Reports",
      details:

        () => {
          return (
            <>
          Access detailed performance reports you can share with mentors and hiring managers.  </>
          )
        },
      detailList: [
      ]
    },
  
  ];


  // interview  top right side  section card obj 
  const careerProjects = [

    // first interviw top project
    {
      iconSvg:
        () => {
          return (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-square text-[#43A724] w-6 h-6">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          )
        },
      title: "Realistic AI Interview Simulations",
      details:

        () => {
          return (
            <>
              Simulate real interview environments powered by AI. Perfect for students seeking <strong>online internship interview practice</strong>
              or job readiness.
            </>
          )
        }
    },
    // second career top project
    {
      iconSvg:
        () => {
          return (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain text-[#43A724] w-6 h-6">
              <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
              <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
              <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
              <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
              <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
              <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
              <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
              <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
              <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
            </svg>
          )
        },
      title: "Smart Feedback with AI",
      details:

        () => {
          return (
            <>
              Instantly analyze your answers, tone, and relevance. Improve every time with feedback tailored for <strong>virtual internship candidates</strong>
              . </>
          )
        }
    },

    // third career top project 
    {
      iconSvg:
        () => {
          return (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-target text-[#43A724] w-6 h-6">
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="6"></circle>
              <circle cx="12" cy="12" r="2"></circle>
            </svg>
          )
        },
      title: "SRole-Based Mock Interviews",
      details:

        () => {
          return (
            <>
              Practice interviews for <strong>software engineering</strong>
              , <strong>product management</strong>
              , <strong>business</strong>
              , and <strong>digital marketing</strong>
              roles in our <strong>internee.pk platform</strong>
              .</>
          )
        }
    },
  ];


  // internee career section cards object 

  const interneeCareers = [

    // first internee career 
    {
      iconSvg:
        () => {
          return (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-target text-[#43A724] w-7 h-7">
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="6"></circle>
              <circle cx="12" cy="12" r="2"></circle>
            </svg>
          )
        },
      title: " Targeted Learning",
      details:

        () => {
          return (
            <>
              Industry-specific <strong>virtual internships</strong> designed to build practical skills and experience.
            </>
          )
        },
      detailList: [
        "Web Development",
        "UI/UX Design",
        "Content Writing",
        "Data Analytics",
        "Business Development",
      ]
    },
    // second internee career 
    {
      iconSvg:
        () => {
          return (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users text-[#43A724] w-7 h-7">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          )
        },
      title: " Mentorship Program",
      details:

        () => {
          return (
            <>
              Learn directly from industry experts at <strong>Internee.pk</strong>
            </>
          )
        },
      detailList: [
        "One-on-One Guidance",
        "Weekly Sessions",
        "Project Reviews",
        "Career Planning",
        "Industry Connect",

      ]
    },
    // third internee career 
    {
      iconSvg:
        () => {
          return (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award text-[#43A724] w-7 h-7">
              <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
              <circle cx="12" cy="8" r="6"></circle>
            </svg>
          )
        },
      title: " Certification Track",
      details:

        () => {
          return (
            <>
              Earn recognized certifications through <strong>virtual internships</strong>
            </>
          )
        },
      detailList: [
        "Skill Verification",
        "Project Portfolio",
        "Performance Badges",
        "Industry Recognition",
        "Digital Certificates",
        "LinkedIn Integration",
      ]
    },


  ];







  // content creator section card object 


  const contentCreatorProjects = [
    // first internee project 
    {
      iconSvg:
        () => {
          return (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-upload text-[#43A724] w-8 h-8">
              <path d="M12 13v8"></path>
              <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>

              <path d="m8 17 4-4 4 4"></path>
            </svg>
          )
        },
      title: " Upload Tutorials & Exercises",
      details:

        () => {
          return (
            <>
              Use <b>internee.pk</b> to share tutorials, exercises, and projects. Help others learn while you grow with <b>virtual internships</b> that reward your skills
            </>
          )
        },

      detailList: [
      ],
      btn: "Learn more "
    },

    // second obj 

    {
      iconSvg:
        () => {
          return (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dollar-sign text-[#43A724] w-8 h-8">

              <line x1="12" x2="12" y1="2" y2="22"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          )
        },
      title: " Earn from Your Expertise",
      details:

        () => {
          return (
            <>
              Internee.pk offers <b>virtual internships</b> in <b>Pakistan</b> where tech creators and instructors can earn passive income by sharing their knowledge.
            </>
          )
        },

      detailList: [
      ],
      btn: "Learn more "
    },
    // third obj 

    {
      iconSvg:
        () => {
          return (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-check text-[#43A724] w-8 h-8">

              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>

              <polyline points="16 11 18 13 22 9"></polyline>

            </svg>
          )
        },
      title: "Build Your Instructor Profile",
      details:

        () => {
          return (
            <>
              Become a trusted voice on <b>internee.pk.</b> Our <b>virtual internship</b> ecosystem helps you build your personal brand in the online learning space.
            </>
          )
        },

      detailList: [
      ],
      btn: "Learn more "
    },
    // fourth obj 

    {
      iconSvg:
        () => {
          return (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-handshake text-[#43A724] w-8 h-8">

              <path d="m11 17 2 2a1 1 0 1 0 3-3"></path>

              <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path>
              <path d="m21 3 1 11h-2"></path>
              <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path>


              <path d="M3 4h8"></path>
            </svg>

          )
        },
      title: " Fair Revenue Sharing",
      details:

        () => {
          return (
            <>
              We keep it transparent. Join <b>internee.pk </b>and benefit from a fair model that pays you well — all while gaining experience in <b>virtual internships.</b>
            </>
          )
        },

      detailList: [
      ],
      btn: "Learn more "
    },

  ]

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
          <a href="#"><div className='hide-d'></div><img src={pic1} alt="pic1" /></a>
          <a href="#"><div className='hide-d'></div><img src={pic2} alt="pic2" /></a>
          <a href="#"><div className='hide-d'></div><img src={pic3} alt="pic3" /></a>
          <a href="#"><div className='hide-d'></div><img src={pic4} alt="pic4" /></a>
          <a href="#"><div className='hide-d'></div><img src={pic5} alt="pic5" /></a>
          <a href="#"><div className='hide-d'></div><img src={pic6} alt="pic6" /></a>
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
            <div className="top-projects basic-projects">


              {interneeProjectmini.map((Project) => {
                return (
                  <BasicCard card={Project} />
                );
              }
              )}


            </div>

            <div className="btm-card">
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

        </div>

      </section>
      <section className='content-creator'>
        <div className="content-head">
          <div className="content-head-container">
            <div className="rotated-riben"></div>
            <div className="head">
              <h1>Tech Instructor or Content Creator?</h1>
              <p>Create in Your Native Language & Start Earning</p>
              <a href="#" className="btn-green btn-bottom">Start Teaching Today</a>
            </div>
          </div>
          <div className="top-projects">



            {contentCreatorProjects.map((Project) => {
              return (
                <DetailCard card={Project} />
              );
            }
            )}
          </div>

        </div>


      </section>
      <section className="career-section">
        <div className="bg-layer"></div>
        <div className="career">
          <div className="top">
            <span className="green">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap w-5 h-5 mr-2">
                <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                <path d="M22 10v6"></path>
                <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
              </svg>
              Professional Development</span>
            <h2>Launch Your Career with Internee.pk</h2>
            <p>Pakistan's innovative platform for career growth and professional development. Join our <strong>virtual internships</strong> to gain practical experience and kickstart your professional journey.</p>
          </div>
          <div className="col-4 card-container">
            <div className="label-card card">
              <h2 className="label-text">1000+
              </h2>
              <p>Active Internships</p>
            </div>
            <div className="label-card card">
              <h2 className="label-text">500+
              </h2>
              <p>Partner Companies</p>
            </div>
            <div className="label-card card">
              <h2 className="label-text">10,000+
              </h2>
              <p>Success Stories</p>
            </div>
            <div className="label-card card">
              <h2 className="label-text">50+
              </h2>
              <p>Industry Sectors</p>
            </div>

          </div>
          <div className="internee-career card-container">
            {interneeCareers.map((Project) => {
              return (
                <DetailCard card={Project} />
              );
            }
            )}

          </div>
          <div className="card-container">
            <div className="card progress-card">
              <h3>title
              </h3>
              <div className="phase">
                <h4>phase:1</h4>
                <div className="progress-bar"><div className="progress-fill"></div></div>
              </div>
              <div className="phase">
                <h4>phase:1</h4>
                <div className="progress-bar"><div className="progress-fill"></div></div>
              </div>
              <div className="phase">
                <h4>phase:1</h4>
                <div className="progress-bar"><div className="progress-fill"></div></div>
              </div>
            </div>
            <div className="card resource-card">
              <h3>title</h3>
              <div className="col-2 grid">
                <div className="resource">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text text-[#43A724] w-5 h-5">
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path d="M10 9H8"></path>
                    <path d="M16 13H8"></path>
                    <path d="M16 17H8"></path>
                  </svg>
                  <span>first resouse</span></div>
                <div className="resource">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-square text-[#43A724] w-5 h-5">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <span>2nd resouse</span></div>
                <div className="resource">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-no-axes-column-increasing text-[#43A724] w-5 h-5">
                    <line x1="12" x2="12" y1="20" y2="10"></line>
                    <line x1="18" x2="18" y1="20" y2="4"></line>
                    <line x1="6" x2="6" y1="20" y2="16"></line>
                  </svg>
                  <span>third resouse</span></div>
                <div className="resource">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open text-[#43A724] w-5 h-5">
                    <path d="M12 7v14"></path>
                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                  </svg>
                  <span>fourth resouse</span></div>
              </div>
            </div>
          </div>
          <div className="btm-card">
            <div className="card bottom-card">
              <h1>
                Ready to Build Your Professional Portfolio with internee.pk?
              </h1>
              <p>
                Join our <b>virtual internships</b> and get access to industry-standard tasks that will help you build a remarkable portfolio, only at <b>internee.pk</b>
              </p>
              <div className='btns-row'>
                <a href="#" className="btn-green btn-bottom">Start Your Journey Now
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right ml-2 mt-1 h-5 w-5">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg> </a>
                <a href="#" className="btn-white btn-bottom floating-btn">Start Your Journey Now
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right ml-2 mt-1 h-5 w-5">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg> </a>
              </div>
            </div>
          </div>

        </div>
      </section>
      <section className="interview-sec">
        <div className="bg-layer"></div>
        <div className="interview-container">
          <div className="interview-top">
            <div className="details-transparant">
              <div className="top">
                <span className="green">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain w-5 h-5 mr-2">
                    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
                    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
                    <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
                    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
                    <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
                    <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
                    <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
                    <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
                  </svg>
                  AI Mock Interviews</span>
                <h2>AI Mock Interview Platform for Virtual Internships in Pakistan</h2>
                <p> Prepare for <strong>technical</strong>
                  , <strong>marketing</strong>
                  , or <strong>business interviews</strong>
                  with our AI-powered mock interview system. Join <strong>Internee.pk’s virtual internship program</strong>
                  to get unlimited access, real-time feedback, and role-specific practice.
                </p>
                <a href="#" className="btn-green btn-bottom"> Apply Now for Virtual Internship
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right ml-2 mt-1 h-5 w-5">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg> </a>
              </div>
              <div className="card-container interview-cards">
                {careerProjects.map((Project) => {
                  return (
                    <BasicCard card={Project} />
                  );
                }
                )}


              </div>
            </div>

          </div>

          <div className="card-container internee-career">



            {showCaseProjects.map((Project) => {
              return (
                <DetailCard card={Project} />
              );
            }
            )}

          </div>

        </div>
      </section>





      <section className='last-section'>
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, enim et. Quasi, labore? Officia minima, ducimus nam necessitatibus beatae animi quam, rerum optio debitis obcaecati illum sunt eos quia error.
        </h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate animi culpa minus iste, quidem odit fugiat, molestias quibusdam facilis ipsam veritatis maiores quia eius ut ex quos obcaecati cupiditate eaque.
        </p>
      </section>


    </>
  )
}
