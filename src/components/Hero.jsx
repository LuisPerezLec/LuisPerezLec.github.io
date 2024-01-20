import React from 'react'
import styles from '../styles'
import Texto from './Texto'
import MainCard from './MainCard'
import LinkedInButton from './LinkedInButton'
import DownloadCVButton from './DownloadCVButton'

const Hero = () => {
  return (
    <div className={`bg:white dark:bg-slateBlue1 md:flex-row flex-col md:${styles.paddingY+ ' ' +styles.flexCenter}  py-16`}>
      <div className={`${styles.flexCenter} md:w-1/2`}>
        <MainCard />
      </div>
      <div className={`md:w-1/2`}>
        <Texto/>
        <LinkedInButton />
        <DownloadCVButton />
      </div>
    </div>
  )
}

export default Hero
