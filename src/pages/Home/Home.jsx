
import '../../styles/global.css'

import Hero from './Hero'
import Collaborative from './Collaborative';
import Intern from './Intern';
import Skill from './Skill';
import Content from './Content';
import Career from './Career';
import Interview from './Interview';
import Journey from './Journey';
import Coach from './Coach';
import Knowledge from './Knowledge';
import Comm from './Comm';
import Blc from './Blc';
import Cnt from './Cnt';

// hero section object of projects




// knowledge card secition project obj 


// show case section object of  projects


// interview  top right side  section card obj 


// internee career section cards object 



// content creator section card object 



// intenee mini projects section card object 



// internee projects section card object 





// internship section card object 








export default function Home({isDarkMode}) {




  return (
    <>

      {/* hero section  */}

      <section className="hero">
        <Hero isDarkMode={isDarkMode}/>
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
