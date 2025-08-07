import React from 'react'
import arrowPng from '../assets/images/arrow.png'


export function InternshipCard(props) {
    return (
        <div className="intern-card">
            <div className="img-container"><img src={props.url} alt={props.title} /></div>
            <div className="details">
                <h4>{props.title}</h4>
                <a href='#'><img src={arrowPng} alt="arrow" /><span>Apply Now</span></a>
            </div>
        </div>

    );
}



export function DetailCard({ card }) {


    const isHaveList = card.detailList.length>0;
    return (

        <div className="card">
            <div className="icon">
                {card.iconSvg()}
            </div>
            <h2>{card.title}</h2>
            <p>{card.details()}</p>
            <ul>
                {card.detailList.map((listItem) => {
                    return (<li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check w-5 h-5 text-[#43A724] mr-3">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                    </svg> {listItem} </li>);
                }
                )}

            </ul>
           {
            isHaveList ? "" :  <a href="#" className='learn-btn'>{card.btn}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right h-4 w-4 ml-1">
                    <path d="m9 18 6-6-6-6"></path>
                </svg>
            </a>
           }
        </div>
    );
}


export function BasicCard({ card }) {
    return (
        <div className="card basic-card">
            <div className="icon">
                {card.iconSvg()}
            </div>
            <div className="l-details">
                <h2>{card.title}</h2>
                <p>{card.details()}</p>
            </div>
        </div>

    );
}



//         <div className="project-card">
//   <div className="icon">
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase text-[#43A724] w-7 h-7">
//       <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
//       <rect width="20" height="14" x="2" y="6" rx="2"></rect>
//     </svg>
//   </div>
//   <h2>Hands-on Industry Projects with internee.pk</h2>
//   <p>Gain practical experience through real-world projects that simulate actual industry scenarios. Each task is carefully designed to enhance your professional portfolio through our <b>virtual internships.</b></p>
//   <ul>
//     <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check w-5 h-5 text-[#43A724] mr-3">
//       <circle cx="12" cy="12" r="10"></circle>
//       <path d="m9 12 2 2 4-4"></path>
//     </svg>

//       Project-based learning</li>
//     <li>Industry-standard practices</li>
//     <li>Portfolio building</li>
//   </ul>
// </div>
