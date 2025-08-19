
import '../styles/global.css'

import Hero from './Home/Hero'
import Collaborative from './Home/Collaborative';
import Intern from './Home/Intern';
import Skill from './Home/Skill';
import Content from './Home/Content';
import Career from './Home/Career';
import Interview from './Home/Interview';
import Journey from './Home/Journey';
import Coach from './Home/Coach';
import Knowledge from './Home/Knowledge';
import Comm from './Home/Comm';
import Blc from './Home/Blc';
import Cnt from './Home/Cnt';

// hero section object of projects




// knowledge card secition project obj 


// show case section object of  projects


// interview  top right side  section card obj 


// internee career section cards object 



// content creator section card object 



// intenee mini projects section card object 



// internee projects section card object 





// internship section card object 








export default function Home() {




  return (
    <>

      {/* hero section  */}

      <section className="hero">
        <Hero />
      </section>
      {/* collaboration section  */}

      <section className='collaboration'>
        <Collaborative />
      </section>

      {/* internships section  */}

      <section className='internships'>
        <Intern />
      </section>
      {/* skills section  */}

      <section className="skills">
        <Skill />
      </section>
      {/* content- creator section  */}

      <section className='content-creator'>
        <Content />

      </section>

      {/* career section  */}
      <section className="career-section">
        <Career />

      </section>

      {/* interview section  */}
      <section className="interview-sec">
        <Interview />

      </section>
      {/* journey section  */}

      <section className="journey">
        <Journey />

      </section>

      {/* career-coaching section  */}

      <section className="career-coach">
        <Coach />

      </section>

      {/* knowledge section  */}

      <section className="knowledge-section">
        <Knowledge />

      </section>
      {/* community section  */}


      <section className="community">
      <Comm />

      </section>

      {/* black section  */}

      <Blc />
      {/* counter section  */}

      <Cnt />

      {/* footer section  */} 
    </>
  )
}
