import groupImg from '../../assets/images/Group-img-white.webp'
import groupImgdark from '../../assets/images/Group-img.webp'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';



export default function Hero({isDarkMode}) {




  return (
    <>
              <div className="container">
                <div className="content">
                  <h1>Looking for
                    dream internship?</h1>
                  <p>Internee.pk kickstart student's tech careers with first internships, providing industry exposure, practical skills, and networking opportunities.</p>
                  <div className="btns">
                    <a href="#" className='btn-green'>Our Job Portal</a>
                    <SignedOut>
                        <a href="#" className='btn-white'>Sign in 
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform rotate-45">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg></a>
                    </SignedOut>
                    <SignedIn>
                      <a href="#" className='btn-white'>DashBoard
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform rotate-45">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg></a>
                    </SignedIn>
                  </div>
                </div>
                {
                  isDarkMode ?
                  <img src={groupImg} alt="group-img" />:
                  <img src={groupImgdark} alt="group-img" />
                }
      
              </div>
              <div className="shadow"></div>
    </>
  )
}
