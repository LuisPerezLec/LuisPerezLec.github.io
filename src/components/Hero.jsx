import React from 'react'
import Luis from '../assets/Luis.png'
import styles from '../styles'

const Hero = () => {
  return (
    <div className={`bg-slateBlue1 flex md:flex-row flex-col md:${styles.paddingY+ ' ' +styles.flexCenter}  py-16`}>
      <div className={`hero-background bg-slateBlue1 hover:bg-slateBlue2 rounded-full w-[80%] xs:w-[440px] p-8 transition-all
          ${{/*Next 3 make the bright blue light on hover*/}} hover:shadow-2xl hover:shadow-sky-400 transition-shadow
          `}>
        <div>
          <div className={`flex justify-center items-center`}>
            <img src={Luis} className="rounded-full" width={400}/>
          </div>
        </div>
        <div></div>
      </div>
      <div>Luis Ernesto Pérez Lechuga</div>
    </div>
  )
}

export default Hero
