import React from 'react'
import BasicCard from '../../components/BasicCard'
import DetailCard from '../../components/DetailCard';

// Sample data for internee projects



const icon =
    (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-workflow w-5 h-5 mr-2">
            <rect width="8" height="8" x="3" y="3" rx="2"></rect>
            <rect width="8" height="8" x="13" y="13" rx="2"></rect>
            <path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
        </svg>
    )





const interneeProjectmini = [

    // first mini projects 
    {
        iconSvg:
            (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-workflow w-5 h-5 mr-2">
                    <rect width="8" height="8" x="3" y="3" rx="2"></rect>
                    <rect width="8" height="8" x="13" y="13" rx="2"></rect>
                    <path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
                </svg>
            )
        ,
        title: "SDLC Implementation via internee.pk",
        details:

            (
                <>
                    Experience the complete Software Development Life Cycle through structured tasks and milestones, part of our <b>virtual internship</b> offerings.
                </>
            )
    }
    ,


    // second mini project 
    {
        iconSvg:
            (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open w-6 h-6 text-[#43A724]">
                    <path d="M12 7v14"></path>
                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                </svg>
            )
        ,
        title: "Guided Learning Path at internee.pk",
        details:
            (
                <>
                    Follow a structured learning path designed for both beginners and advanced learners as part of our <b>virtual internship</b> curriculum.
                </>
            )

    },

];



const interneeProjects = [

    // first internee project 
    {
        iconSvg:
            (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase text-[#43A724] w-7 h-7">
                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                </svg>
            )
        ,
        title: " Hands-on Industry Projects with internee.pk",
        details:

            (
                <>
                    Gain practical experience through real-world projects that simulate actual industry scenarios. Each task is carefully designed to enhance your professional portfolio through our <b>virtual internships.</b>
                </>
            )
        ,
        detailList: [
            "Project-based learning",
            "Industry-standard practices",
            "Portfolio building"
        ]
    },

    // second internee project  
    {
        iconSvg:
            (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge-check text-[#43A724] w-7 h-7">
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                </svg>
            )
        ,
        title: "Skill Verification System by internee.pk",
        details:
            (
                <>
                    Each completed task adds to your verified skills portfolio. Showcase your capabilities with confidence through our <b>virtual internships</b> and comprehensive tracking system.
                </>
            )
        ,
        detailList: [
            "Skill verification",
            "Progress tracking",
            "Achievement badges"
        ]
    },



];





export default function Skill() {
    return (
        <>
            <div className="bg-layer"></div>
            <div className="skill-container">
                <div className="top">
                    <span className="green">
                        {icon}
                        Task Management Platform</span>
                    <h2>Master Real-World Skills with Our Task Portal at internee.pk</h2>
                    <p>Transform theoretical knowledge into practical expertise through our comprehensive task portal. Build, learn, and grow with industry-standard projects from our <b>virtual internships</b> on <b>internee.pk.</b></p>

                </div>
                <div className="skill-card-container">
                    <div className="top-projects">

                        {interneeProjects.map((Project, idx) => {
                            return (
                                <DetailCard key={idx} card={Project} />
                            );
                        }
                        )}


                    </div>
                    <div className="top-projects basic-projects">


                        {interneeProjectmini.map((Project, idx) => {
                            return (
                                <BasicCard key={idx} card={Project} />
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right ml-2 mt-1 h-5 w-5">
                                    <path d="m9 18 6-6-6-6"></path>
                                </svg> </a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
