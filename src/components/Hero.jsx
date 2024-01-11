import React from 'react'
import Luis from '../assets/Luis.png'
import styles from '../styles'

const Hero = () => {
  return (
    <div className={`flex md:flex-row flex-col md:${styles.paddingY+ ' ' +styles.flexCenter} hero-background py-16`}>
      <div className={`bg-white rounded-tl-[100px] rounded-br-[100px] w-[80%] xs:w-[440px] p-8`}>
        <div>
          <img src={Luis} className="rounded-full" width={400}/>
        </div>
        <div></div>
      </div>
      <div>Lado derecho</div>
    </div>
  )
}

export default Hero
