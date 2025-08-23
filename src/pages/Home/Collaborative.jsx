import React from 'react'
import pic1 from '../../assets/icons/cloud.png'
import pic2 from '../../assets/icons/see.png'
import pic3 from '../../assets/icons/collab.png'
import pic4 from '../../assets/icons/logo1.png'
import pic5 from '../../assets/icons/nics.png'
import pic6 from '../../assets/icons/pitb.png'

export default function Collaborative() {
  return (
   <>
    <p className='clp'>Collaborated with Trusted Worldwide Partners</p>
        <div className="img-group">
          <a href="#"><div className='hide-d'></div><img src={pic1} alt="Cloud partner logo" loading="lazy" /></a>
          <a href="#"><div className='hide-d'></div><img src={pic2} alt="SEE partner logo" loading="lazy" /></a>
          <a href="#"><div className='hide-d'></div><img src={pic3} alt="Collaboration partner logo" loading="lazy" /></a>
          <a href="#"><div className='hide-d'></div><img src={pic4} alt="Logo1 partner logo" loading="lazy" /></a>
          <a href="#"><div className='hide-d'></div><img src={pic5} alt="NICS partner logo" loading="lazy" /></a>
          <a href="#"><div className='hide-d'></div><img src={pic6} alt="PITB partner logo" loading="lazy" /></a>
        </div>
   </>
  )
}
