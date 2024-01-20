// https://uiverse.io/Madflows/stale-baboon-45
import React from 'react'
import Resume from '../assets/Resume.pdf'

const DownloadCVButton = () => {
  return (
    <button class="relative overflow-hidden h-12 px-8 rounded-full bg-purple-800 text-white border-none cursor-pointer group">
      <a href={Resume} download={"LuisPerezCV"}>
      <span class="relative z-10">Download CV</span>
      <span class="absolute inset-0 transform origin-left transition-transform scale-x-0 bg-gradient-to-r from-purple-600 to-indigo-600 group-hover:scale-x-100 transition-all duration-500 ease-in-out"></span>
      </a>
    </button>
  )
}

export default DownloadCVButton