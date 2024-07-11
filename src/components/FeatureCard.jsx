import React from 'react'
import { features } from '../constants'

const FeatureCard = ({icon, title, content, index}) => {
  return (
    <div className={`flex flex-row p-6 max-w-[470px] rounded-[20px]
     ${index !== features.length - 1 ? "" : "mb-0"}
     feature-card`}>
        <div className={`w-[64px] h-[64px] rounded-full
            flex-center bg-dimBlue`}>
            <img src={icon} alt="features" 
            className="w-[50%] h-[50%] object-contain" />
        </div>

        <div className="flex-1 flex-col ml-3">
            <h4 className="font-poppins font-semibold
            text-[18px] leading-[23px] text-white
            mb-2">
                {title}
            </h4>
            <p className="font-poppins font-normal
            text-[15px] leading-[24px] text-dimWhite
            mb-1 w-full">
                {content}
            </p>
        </div>
    </div>
  )
}

export default FeatureCard