import React from 'react'
import DetailCard from '../../components/DetailCard';



const contentCreatorProjects = [
  // first internee project 
  {
    iconSvg:
      (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cloud-upload text-[#43A724] w-8 h-8">
          <path d="M12 13v8"></path>
          <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>

          <path d="m8 17 4-4 4 4"></path>
        </svg>
      )
    ,
    title: " Upload Tutorials & Exercises",
    details:

      (
        <>
          Use <b>internee.pk</b> to share tutorials, exercises, and projects. Help others learn while you grow with <b>virtual internships</b> that reward your skills
        </>
      )
    ,

    detailList: [
    ],
    btn: "Learn more "
  },

  // second obj 

  {
    iconSvg:
      (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dollar-sign text-[#43A724] w-8 h-8">

          <line x1="12" x2="12" y1="2" y2="22"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      )
    ,
    title: " Earn from Your Expertise",
    details:

      (
        <>
          Internee.pk offers <b>virtual internships</b> in <b>Pakistan</b> where tech creators and instructors can earn passive income by sharing their knowledge.
        </>
      )
    ,

    detailList: [
    ],
    btn: "Learn more "
  },
  // third obj 

  {
    iconSvg:
      (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-check text-[#43A724] w-8 h-8">

          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>

          <polyline points="16 11 18 13 22 9"></polyline>

        </svg>
      )
    ,
    title: "Build Your Instructor Profile",
    details:

      (
        <>
          Become a trusted voice on <b>internee.pk.</b> Our <b>virtual internship</b> ecosystem helps you build your personal brand in the online learning space.
        </>
      )
    ,

    detailList: [
    ],
    btn: "Learn more "
  },
  // fourth obj 

  {
    iconSvg:
      (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-handshake text-[#43A724] w-8 h-8">

          <path d="m11 17 2 2a1 1 0 1 0 3-3"></path>

          <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path>
          <path d="m21 3 1 11h-2"></path>
          <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path>


          <path d="M3 4h8"></path>
        </svg>

      )
    ,
    title: " Fair Revenue Sharing",
    details:
      (
        <>
          We keep it transparent. Join <b>internee.pk </b>and benefit from a fair model that pays you well — all while gaining experience in <b>virtual internships.</b>
        </>
      )
    ,

    detailList: [
    ],
    btn: "Learn more "
  },

]

export default function Content() {
  return (
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



            {contentCreatorProjects.map((Project, idx) => {
              return (
                <DetailCard key={idx} card={Project} />
              );
            }
            )}
          </div>

        </div>
  )
}
