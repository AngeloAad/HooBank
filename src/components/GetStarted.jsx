import React from 'react'
import { arrowUp } from '../assets'

const GetStarted = () => {
  return (
    <div className="flex-center w-[140px] h-[140px] rounded-full
    bg-blue-gradient p-[2px] cursor-pointer">

      <div className="flex-center flex-col bg-primary
      w-[100%] h-[100%] rounded-full">

        <div className="flex-start flex-row">
          <p className="font-poppins font-medium
          text-[18px] leading-[23px] mr-3">
            <span className="text-gradient">Get</span>
          </p>
            <img src={arrowUp} alt="arrowUp" className="w-[23px]
            h-[23px] object-contain"/>
        </div>

        <p className="font-poppins font-medium
          text-[18px] leading-[23px]">
          <span className="text-gradient">Started</span>
        </p>
        
      </div>

    </div>
  )
}

export default GetStarted