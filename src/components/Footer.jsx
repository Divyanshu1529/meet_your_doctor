import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/*-----------------------------left side----------------------*/}
            <div className='flex flex-col'>
                <div>
            <img className='mb-5 w-10' src={assets.logo} alt="" />
            <p>meet your doctor</p>
            </div>
            <p className='w-full md:w-2/3 text-grey-600 leading-6'>Welcome to "Meet Your Doctor"—a digital gateway connecting patients to trusted healthcare professionals. This theme prioritizes simplicity and accessibility, with a clean and modern layout.</p>
            </div>
             {/*-----------------------------center section----------------------*/}
             <div>
                <p className='text-xl font-medium mb-5 '>COMPANY</p>
                <ul className='flex flex-col gap-2 text-grey-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
                </div>

                 {/*-----------------------------right side----------------------*/}
            <div>
                <p className='text-xl font-medium mb-5 '>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-grey-600'>
                    <li>+91-993-600-8057</li>
                    <li>meet_your_doctor@gmail.com</li>
                </ul>
                </div>
        </div>
        
                             {/*-----------------------------copyright section ----------------------*/}
          <div>
            <hr />
            <p className='py-5 text-sm text-center'>
            Copyright © 2025 (by-div) - All Right Reserved.
            </p>
        </div>
    </div>
  )
}

export default Footer