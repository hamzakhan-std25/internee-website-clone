import React from 'react'

export default function Journey() {
    return (
        <>
            <div className="journey-content">
                <div className="white">How It Works</div>
                <h1><span>A Simple and Seamless</span>
                    <span>Process to Start Your</span>
                    <span>Internship Journey</span></h1>
            </div>
            <div className="three-step">
                <div className="side-container">
                    <div className="dashes"></div>
                    <div className="cont">
                        <div className="step">
                            <div className="step-btn">Step 1</div>
                            <div className="step-content card">
                                <h3>Sign Up & Choose a Domain</h3>
                                <p>Explore a wide range of internships across various industries, tailored to match your skills.</p>
                            </div>
                        </div>
                        <div className="step">
                            <div className="step-btn">Step 2</div>
                            <div className="step-content card">
                                <h3>Fill out the Desired Form</h3>
                                <p>Fill out a quick application form to and secure your internship opportunity.</p>
                            </div>
                        </div>
                        <div className="step">
                            <div className="step-btn">Step 3</div>
                            <div className="step-content card">
                                <h3>Earn Your Certificate</h3>
                                <p>Complete your internship, gain valuable hands-on experience, and receive a certificate.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#" className="btn-green btn-step">Get Started Now</a>
            </div>
        </>
    )
}
