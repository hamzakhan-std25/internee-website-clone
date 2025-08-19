import React from 'react'
// import KnowledgeCard from '../../components/KnowledgeCard';
import  KnowledgeCard  from '../../components/KnowledgeCard';






const knowledgeCards = [



  // first knowledge card
  {
    iconSvg:
      (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pen-tool text-[#43A724] w-7 h-7">
          <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path>
          <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path>
          <path d="m2.3 2.3 7.286 7.286"></path>
          <circle cx="11" cy="11" r="2"></circle>
        </svg>
      )
    ,
    title: 'AI Resume Building',
    details: "Stand out in the AI job market with our professional resume-building guide. Learn how to highlight your AI skills, experience, and key accomplishments to catch the attention of top employers.",

  },
  // second knowledge card
  {
    iconSvg:
      (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open text-[#43A724] w-7 h-7">
          <path d="M12 7v14"></path>
          <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
        </svg>
      )
    ,
    title: 'Cover Letter Creation',
    details: "Create compelling cover letters that showcase your passion for AI and demonstrate your value to employers. Make a strong first impression that speaks directly to your AI expertise.",

  },
  // third knowledge card
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
    title: 'Interview Preparation',
    details: "Ace your AI job interviews with confidence through practice questions, interview strategies, and tips for answering technical AI-related queries.",

  },
  // fourth knowledge card
  {
    iconSvg:
      (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb text-[#43A724] w-7 h-7">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
          <path d="M9 18h6"></path>
          <path d="M10 22h4"></path>
        </svg>
      )
    ,
    title: 'Industry Insights',
    details: "Stay ahead of the curve with up-to-date insights on the latest AI trends, market demands, and emerging technologies in the AI industry.",

  },

];






export default function Knowledge() {
  return (
   <>
   <div className="knowledge-container">
          <div className="knowledge-card-container">
            <div className="top-projects">



              {knowledgeCards.map((Project, idx) => {
                return (
                  <KnowledgeCard key={idx} card={Project} />
                );
              }
              )}
            </div>
            <div className="btm-card">
              <div className="card knowledge-card ">
                <div className="max-48">
                  <span className="green">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dollar-sign w-5 h-5 mr-2">
                      <line x1="12" x2="12" y1="2" y2="22"></line>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                    Monetize Your Expertise</span>
                  <h1>
                    Share Your Knowledge &amp;Earn
                  </h1>
                  <p>
                    Are you an AI expert? Share your knowledge through courses, tutorials, or content. Build your personal brand and generate income while helping others succeed in their AI careers. </p>
                </div>
              </div>
            </div>
            <div className="prices">
              <h2>Why Choose AI Career Coach?</h2>
              <div className="card-container price-card-container">
                <div className="price-card">
                  <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trophy text-[#43A724] w-8 h-8 mx-auto mb-4">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                    <path d="M4 22h16"></path>
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                  </svg></div>

                  <h3>Comprehensive Guidance</h3>
                  <p>Everything you need to succeed in the AI industry</p>
                </div>
                <div className="price-card">
                  <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles text-[#43A724] w-8 h-8 mx-auto mb-4">
                      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                      <path d="M20 3v4"></path>
                      <path d="M22 5h-4"></path>
                      <path d="M4 17v2"></path>
                      <path d="M5 18H3"></path>
                    </svg>

                  </div>
                  <h3>Industry-Ready Insights</h3>
                  <p>Stay updated on the latest AI trends</p>
                </div>
                <div className="price-card">
                  <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dollar-sign text-[#43A724] w-8 h-8 mx-auto mb-4">
                      <line x1="12" x2="12" y1="2" y2="22"></line>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>

                  </div>
                  <h3>Monetization Options</h3>
                  <p>Share your AI knowledge and earn income</p>
                </div>
              </div>
            </div>


          </div>
        </div>
   </>
  )
}
