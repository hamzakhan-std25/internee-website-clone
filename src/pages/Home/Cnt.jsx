import React from 'react'
import CountUp from 'react-countup'

export default function Cnt() {
  return (
    <div className="counters">
        <div className="counter">
          <p className='c-head'><CountUp enableScrollSpy={true} end={20} />+</p>
          <p>Expert-led Internships</p>
        </div>
        <div className="pipe"></div>
        <div className="counter">
          <p className='c-head'><CountUp enableScrollSpy={true} end={1500} />+</p>
          <p>Successful Graduates</p>
        </div>
        <div className="pipe"></div>
        <div className="counter">
          <p className='c-head'><CountUp enableScrollSpy={true} end={50000} />+</p>
          <p>LinkedIn Followers</p>
        </div>

      </div>

  )
}
