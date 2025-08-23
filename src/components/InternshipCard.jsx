import React from 'react';
import arrowPng from '../assets/images/arrow.png'

export default function InternshipCard(props) {
    return (
        <div className="intern-card">
            <div className="img-container"><img src={props.url} alt={props.title} loading="lazy" /></div>
            <div className="details">
                <h4>{props.title}</h4>
                <a href='#'><img src={arrowPng} alt="" loading="lazy" /><span>Apply Now</span></a>
            </div>
        </div>

    );
}