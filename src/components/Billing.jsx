import React from 'react'
import { apple, bill, google } from '../assets'

const Billing = () => {
  return (
    <section id="product" className="sectionReverse">

      <div className="sectionImgReverse">
        <img src={bill} alt="billing" 
        className="w-[100%] h-[100%] relative z-[5]"/>

        <div className="absolute z-[3] -left-1/2
        top-0 w-[50%] h-[50%] rounded-full white__gradient"/>
        <div className="absolute z-[0] -left-1/2
        bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"/>
      </div>

      <div className="flex flex-col justify-center">
        <h2 className="heading2">Easily control your <br className="sm:block hidden" />
        billing & invoicing.
        </h2>
        <p className="paragraph max-w-[470px] mt-5">
        Effortlessly manage your finances with our billing 
        and invoicing tools. Simplify expense tracking and 
        payments for accuracy and efficiency.
        </p>

        <div className="flex flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="app_store"
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
          <img src={google} alt="google_play"
          className="w-[144px] h-[43px] cursor-pointer" />
        </div>
      </div>
    </section>
  )
}
 
export default Billing