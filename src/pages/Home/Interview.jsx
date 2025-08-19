import React from 'react'
import BasicCard from '../../components/BasicCard';
import DetailCard from '../../components/DetailCard';

// Showcase projects for the interview page





const showCaseProjects = [
  // first showcase projects 
  {
    iconSvg:
      (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award text-[#43A724] w-8 h-8 mb-4">
          <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
          <circle cx="12" cy="8" r="6"></circle>
        </svg>
      )
    ,
    title: " Build Real Interview Confidence",
    details:

      (
        <>
          Reduce anxiety and increase success rate through repeated AI-based mock interview sessions.  </>
      )
    ,
    detailList: [
    ]
  },
  // secont showcase projects 
  {
    iconSvg:
      (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-no-axes-column-increasing text-[#43A724] w-8 h-8 mb-4">
          <line x1="12" x2="12" y1="20" y2="10"></line>
          <line x1="18" x2="18" y1="20" y2="4"></line>
          <line x1="6" x2="6" y1="20" y2="16"></line>
        </svg>
      )
    ,
    title: " Become Job-Ready Fast",
    details:

      (
        <>
          Structured interview training that prepares you for real-world scenarios. Perfect for <strong>students applying for internships</strong>
          . </>
      )
    ,
    detailList: [
    ]
  },
  // third showcase projects 
  {
    iconSvg:
      (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text text-[#43A724] w-8 h-8 mb-4">
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
          <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
          <path d="M10 9H8"></path>
          <path d="M16 13H8"></path>
          <path d="M16 17H8"></path>
        </svg>
      )
    ,
    title: " Track Progress with Reports",
    details:
      (
        <>
          Access detailed performance reports you can share with mentors and hiring managers.  </>
      )
    ,
    detailList: [
    ]

  },

];




const careerProjects = [

  // first interviw top project
  {
    iconSvg:
      (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square text-[#43A724] w-6 h-6">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      )
    ,
    title: "Realistic AI Interview Simulations",
    details:
      (
        <>
          Simulate real interview environments powered by AI. Perfect for students seeking <strong>online internship interview practice</strong>
          or job readiness.
        </>
      )

  },
  // second career top project
  {
    iconSvg:
      (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain text-[#43A724] w-6 h-6">
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
    ,
    title: "Smart Feedback with AI",
    details:
      (
        <>
          Instantly analyze your answers, tone, and relevance. Improve every time with feedback tailored for <strong>virtual internship candidates</strong>
          . </>
      )

  },

  // third career top project 
  {
    iconSvg:
      (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target text-[#43A724] w-6 h-6">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      )
    ,
    title: "SRole-Based Mock Interviews",
    details:

      (
        <>
          Practice interviews for <strong>software engineering</strong>
          , <strong>product management</strong>
          , <strong>business</strong>
          , and <strong>digital marketing</strong>
          roles in our <strong>internee.pk platform</strong>
          .</>
      )

  },
];




export default function Interview() {
    return (
        <>
            <div className="bg-layer"></div>
            <div className="interview-container">
                <div className="interview-top">
                    <div className="details-transparant">
                        <div className="top">
                            <span className="green">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain w-5 h-5 mr-2">
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
                            <p style={{ padding: 0 }}> Prepare for <strong>technical</strong>
                                , <strong>marketing</strong>
                                , or <strong>business interviews</strong>
                                with our AI-powered mock interview system. Join <strong>Internee.pk’s virtual internship program</strong>
                                to get unlimited access, real-time feedback, and role-specific practice.
                            </p>
                            <a href="#" className="btn-green btn-bottom"> Apply Now for Virtual Internship
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right ml-2 mt-1 h-5 w-5">
                                    <path d="m9 18 6-6-6-6"></path>
                                </svg> </a>
                        </div>
                        <div className="card-container interview-cards">
                            {careerProjects.map((Project, idx) => {
                                return (
                                    <BasicCard key={idx} card={Project} />
                                );
                            }
                            )}


                        </div>
                    </div>

                </div>

                <div className="card-container internee-career">



                    {showCaseProjects.map((Project, idx) => {
                        return (
                            <DetailCard key={idx} card={Project} />
                        );
                    }
                    )}

                </div>

            </div>
        </>
    )
}
