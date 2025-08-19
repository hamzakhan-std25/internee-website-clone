import React from 'react'
import '../../styles/global.css'
import ind_img from '../../assets/images/industry.jpg'
import ind2_img from '../../assets/images/industry-2.webp'
import ind3_img from '../../assets/images/industry-3.avif'

export default function GraduateProgram() {
  return (
    <div className='gp-page'>
      <div className="gp-head">
        <div className="head-container">
          <h1>Graduate Programs</h1>
          <p>Explore our comprehensive graduate programs designed to advance your career and expand your knowledge.Explore our comprehensive graduate programs designed to advance your career and expand your knowledge.</p>
        </div>

      </div>
      <div className="explore">
        <h2>Explore Categories</h2>
        <div className="industry-cards card-container">
          <div className="ex-card">
            <a href='#' className="card">
              <div className="ex-img">
                <img src={ind_img} alt="industry img" />
                <div className="ex-layer"></div>
              </div>
              <div className='ex-content'>
                <h3>Health Care</h3>
                <p>Step into the world where every second counts and lives are changed. Whether it's assisting in patient care, supporting medical research, or exploring health tech innovation our internships put you at the heart of the action. Join the frontlines of impact and make your mark in the future of healthcare.</p>
              </div>
            </a>
          </div>
          <div className="ex-card">
            <a href='#' className="card">
              <div className="ex-img">
                <img src={ind2_img} alt="industry img" />
                <div className="ex-layer"></div>
              </div>
              <div className='ex-content'>
                <h3>Health Care</h3>
                <p>Step into the world where every second counts and lives are changed. Whether it's assisting in patient care, supporting medical research, or exploring health tech innovation our internships put you at the heart of the action. Join the frontlines of impact and make your mark in the future of healthcare.</p>
              </div>
            </a>
          </div>
          <div className="ex-card">
            <a href='#' className="card">
              <div className="ex-img">
                <img src={ind3_img} alt="industry img" />
                <div className="ex-layer"></div>
              </div>
              <div className='ex-content'>
                <h3>Health Care</h3>
                <p>Step into the world where every second counts and lives are changed. Whether it's assisting in patient care, supporting medical research, or exploring health tech innovation our internships put you at the heart of the action. Join the frontlines of impact and make your mark in the future of healthcare.</p>
              </div>
            </a>
          </div>


        </div>

      </div>


    </div>
  )
}
