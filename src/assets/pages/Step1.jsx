import React from "react";
import { Logo, heroImg } from "../images/index";
import SignupForm from "../components/SignupForm";
import { Link } from "react-router-dom";


function Step1() {
  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen">
        <div className="w-full lg:w-[40%] bg-heroBg flex flex-col gap-5 items-center lg:items-start">
          <div className="flex flex-col gap-5 items-center md:items-start px-16 mt-3 md:mt-12">
          <Link to="/">
            <img className="w-24 m-3 ml-5" src={Logo} alt="logo" />
          </Link>
            <h2 className="text-2xl font-black text-amber-900 opacity-70">
              Discover the world's top  Designers & Creatives.
            </h2>
          </div>
          <img src={heroImg} alt="header-bg" className="h-64 md:h-auto"/>
        </div>

        <div className="w-full lg:w-[60%] mb-5 lg:mb-0">
          <div className="flex p-5 w-full justify-end">
            <div className="flex gap-1">
              <h3 className="text-sm font-medium">Already a member?</h3>
              <Link to="#" className="text-sm font-medium text-secondary">
                Sign In
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-0 lg:p-5">
          <SignupForm children="Sign up to Dribble"/>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Step1;