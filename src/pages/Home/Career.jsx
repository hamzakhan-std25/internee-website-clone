import React from 'react'
import DetailCard from '../../components/DetailCard';

const interneeCareers = [

    // first internee career 
    {
        iconSvg:
            (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target text-[#43A724] w-7 h-7">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                </svg>
            )
        ,
        title: " Targeted Learning",
        details:

            (
                <>
                    Industry-specific <strong>virtual internships</strong> designed to build practical skills and experience.
                </>
            )
        ,
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
            (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users text-[#43A724] w-7 h-7">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
            )
        ,
        title: " Mentorship Program",
        details:
            (
                <>
                    Learn directly from industry experts at <strong>Internee.pk</strong>
                </>
            )
        ,
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
            (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award text-[#43A724] w-7 h-7">
                    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                    <circle cx="12" cy="8" r="6"></circle>
                </svg>
            )
        ,
        title: " Certification Track",
        details:

            (
                <>
                    Earn recognized certifications through <strong>virtual internships</strong>
                </>
            )
        ,
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




export default function Career() {


    return (
        <>
            <div className="bg-layer"></div>
            <div className="career">
                <div className="top">
                    <span className="green">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap w-5 h-5 mr-2">
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
                    {interneeCareers.map((Project, idx) => {
                        return (
                            <DetailCard key={idx} card={Project} />
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text text-[#43A724] w-5 h-5">
                                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                    <path d="M10 9H8"></path>
                                    <path d="M16 13H8"></path>
                                    <path d="M16 17H8"></path>
                                </svg>
                                <span>first resouse</span></div>
                            <div className="resource">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square text-[#43A724] w-5 h-5">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                </svg>
                                <span>2nd resouse</span></div>
                            <div className="resource">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-no-axes-column-increasing text-[#43A724] w-5 h-5">
                                    <line x1="12" x2="12" y1="20" y2="10"></line>
                                    <line x1="18" x2="18" y1="20" y2="4"></line>
                                    <line x1="6" x2="6" y1="20" y2="16"></line>
                                </svg>
                                <span>third resouse</span></div>
                            <div className="resource">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open text-[#43A724] w-5 h-5">
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right ml-2 mt-1 h-5 w-5">
                                    <path d="m9 18 6-6-6-6"></path>
                                </svg> </a>
                            <a href="#" className="btn-white btn-bottom floating-btn">Start Your Journey Now
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
