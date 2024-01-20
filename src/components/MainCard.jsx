import React, { useState } from 'react';
import Luis from '../assets/Luis.png'

const CardColores = () => {

  return (
    <div className={`bg-white/10 relative  transition-all duration-300 after:absolute after:h-full after:bg-[#abd373] z-20  after:-z-20 after:w-full after:inset-0 after:rounded-lg hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden after:-translate-y-full after:hover:translate-y-0 rounded-3xl w-[80%] xs:w-[440px] p-8 transition-all
          ${{/*Next 3 make the bright blue light on hover*/}} hover:shadow-2xl hover:shadow-sky-400 transition-shadow
          `}>
        <div>
          <div className={`flex justify-center items-center bg-white rounded-full`}>
            <img src={Luis} className="rounded-full" width={400}/>
          </div>
        </div>
        <div></div>
      </div>
  )
}

export default CardColores