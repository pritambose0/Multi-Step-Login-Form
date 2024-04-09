import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons";
import React from 'react'
import {Footer, Navbar} from  "../components/index"
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

function FinalStep() {
  const email = useSelector(state => state.email);
  return (
    <>
        <Navbar/>
        <div className='w-full md:w-[80%] lg:w-[60%] mx-auto text-center flex flex-col items-center justify-center p-5 gap-5 h-[100dvh]'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold'>Please verify your email...</h2>

            <FontAwesomeIcon icon={faEnvelopeCircleCheck} className='text-7xl md:text-[110px] text-gray-400'/>

            <p className='text-sm sm:text-base md:text-lg text-textLight font-semibold'>Please verify your email address. We've sent a confirmation email to:</p>

            {/* Email */}

            <p className='text-sm sm:text-base md:text-lg font-bold'>
              {email && email}
            </p>

            <p className='text-sm sm:text-base md:text-lg  text-textLight font-semibold'>Click the confirmation link in that email to begin using Dribbble</p>

            <p className='text-sm sm:text-base md:text-lg  text-textLight font-semibold'>
                Didn't receive the email? Check your spam folder, it may have been caught by a filter. If you still don't see it, you can 
                <Link to="#" className='text-primary text-sm sm:text-base md:text-lg font-semibold'> resend the confirmation email.</Link>
            </p>

            <p className='text-sm sm:text-base md:text-lg text-textLight font-semibold'>Wrong email address?
                <Link to="#" className='text-primary text-sm sm:text-base md:text-lg font-semibold'> Change it.</Link>
            </p>

        </div>
        <Footer/>
    </>
  )
}

export default FinalStep