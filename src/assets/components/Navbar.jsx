import React, { useState } from "react";
import { Logo } from "../images/index";
import { Button, Input } from "./index";
import {
  faBars,
  faBriefcaseClock,
  faSearch,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const avatar = useSelector(state => state.avatar)

  return (
    <>
      <header className="w-full max-h-screen shadow shadow-gray-100 fixed">
        <nav className="bg-white p-4 border-gray-200 flex justify-between">
          <div className="flex items-center gap-5">
          <Link to="/">
            <img className="w-24 m-3 ml-5" src={Logo} alt="logo" />
          </Link>

            <div className="hidden lg:flex items-center gap-5">
              <Link to="#" className="text-textLight text-sm font-bold">
                Inspiration
              </Link>
              <Link to="#" className="text-textLight text-sm font-bold">
                Find Work
              </Link>
              <Link to="#" className="text-textLight text-sm font-bold">
                Learn Design
              </Link>
              <Link to="#" className="text-textLight text-sm font-bold">
                Go Pro
              </Link>
              <Link to="#" className="text-textLight text-sm font-bold">
                Hire Designers
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex gap-4 items-center mr-2">
            <div className="w-28 rounded-lg flex items-center justify-center bg-gray-200">
              <FontAwesomeIcon icon={faSearch} className="text-gray-400 ml-3" />

              <Input
                type="text"
                placeholder="Search"
                className="mt-0 border-none focus:outline-none p-0"
              />
            </div>

            <FontAwesomeIcon
              icon={faBriefcaseClock}
              className="text-gray-400 cursor-pointer"
            />

            <div className="w-9 h-9 bg-gray-300 rounded-full flex items-center justify-center">
              {!avatar && (
                <FontAwesomeIcon icon={faUser} className="text-white text-xl" />
              )}
              {avatar && (
                <img
                  src={URL.createObjectURL(avatar)}
                  alt="avatar"
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                />
              )}
            </div>

            <Button children="Upload" className="w-[30%]" />
          </div>

          {isOpen ? (
            <FontAwesomeIcon
              icon={faXmark}
              className="text-2xl bg-white my-auto text-gray-600 cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              className="lg:hidden my-auto text-xl text-gray-600 cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </nav>

        {/* HAMBERGUR MENU FOR SMALL DEVICES */}

        {isOpen && (
          <>
            <div className="fixed top-0 mx-auto h-screen w-[60%] p-4 bg-gray-100">
              <div className="flex items-center justify-between">
              <Link to="/">
            <img className="w-24 m-3 ml-5" src={Logo} alt="logo" />
          </Link>
              </div>

              <div className="flex flex-col mt-10 gap-3">
                <Link
                  to="#"
                  className="text-textLight text-sm font-bold w-full hover:bg-gray-100 transition duration-200 ease-in-out p-2 rounded lg"
                >
                  Inspiration
                </Link>
                <Link
                  to="#"
                  className="text-textLight text-sm font-bold w-full hover:bg-gray-100 transition duration-200 ease-in-out p-2 rounded lg"
                >
                  Find Work
                </Link>
                <Link
                  to="#"
                  className="text-textLight text-sm font-bold w-full hover:bg-gray-100 transition duration-200 ease-in-out p-2 rounded lg"
                >
                  Learn Design
                </Link>
                <Link
                  to="#"
                  className="text-textLight text-sm font-bold w-full hover:bg-gray-100 transition duration-200 ease-in-out p-2 rounded lg"
                >
                  Go Pro
                </Link>
                <Link
                  to="#"
                  className="text-textLight text-sm font-bold w-full hover:bg-gray-100 transition duration-200 ease-in-out p-2 rounded lg"
                >
                  Hire Designers
                </Link>

                {avatar && (
                <img
                  src={URL.createObjectURL(avatar)}
                  alt="avatar"
                  className="w-9 h-9 ml-2 rounded-full flex items-center justify-center"
                />
              )}
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
}

export default Navbar;
