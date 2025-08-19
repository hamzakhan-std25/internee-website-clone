import React from 'react';  

export default function DetailCard({ card }) {


    const isHaveList = card.detailList.length > 0;
    return (

        <div className="card">
            <div className="icon">
                {card.iconSvg}
            </div>
            <h2>{card.title}</h2>
            <p>{card.details}</p>
            <ul>
                {card.detailList.map((listItem, idx) => {
                    return (<li key={idx}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-5 h-5 text-[#43A724] mr-3">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                    </svg> {listItem} </li>);
                }
                )}

            </ul>
            {
                isHaveList ? "" : <a href="#" className='learn-btn'>{card.btn}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 ml-1">
                        <path d="m9 18 6-6-6-6"></path>
                    </svg>
                </a>
            }
        </div>
    );
}
