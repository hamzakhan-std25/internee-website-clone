import React from 'react'
import CountUp from 'react-countup'

export default function AnimatedNumberCountUp({ end, prefix = '', suffix = '+', duration = 2, className = '' }) {
  return (
    <span className={className}>
      {prefix}
      <CountUp enableScrollSpy end={end} duration={duration} />
      {suffix}
    </span>
  )
}