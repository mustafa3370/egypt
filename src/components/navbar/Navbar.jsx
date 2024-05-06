import React from "react";
import { Link } from 'react-router-dom';
import { MdClose } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
import { HiMenuAlt3 } from "react-icons/hi";
import logo from '../../photos/download (1).png'
import { useState } from "react";
import './style.css'
function Nav() {
  const [drobdown, setdrobdown] = useState(false);
  const showDrobdown = () => {
    setdrobdown(!drobdown);
  };
  return (
    <nav className="w-full h-24 flex flex-col justify-center items-center  bg-black bg-cover lg:relative fixed z-20">
      <div className="container mx-auto lg:px-6">
        <div className="lg:w-full w-11/12 mx-auto h-full flex justify-between items-center">
          <div className="flex flex-col gap-y-4 lg:w-1/3">
            <span className="flex items-center gap-x-2 font-bold text-2xl">
              <img src={logo} alt="" className="w-24 flex items-center justify-center " />
            </span>
          </div>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            <Link to="/Hero" className="leading-normal text-lg no-underline text-white">Home</Link>
            <Link to="/test" className="leading-normal text-lg no-underline text-white">Explore</Link>
            <Link to="#" className="leading-normal text-lg no-underline text-white">Articles</Link>
            <Link to="#" className="leading-normal text-lg no-underline text-white">Galaries</Link>
            <Link to="#" className="leading-normal text-lg no-underline text-white">Contact</Link>
          </ul>
          <div className="lg-block hidden ">
            <TbGridDots className="text-[#ce8a5c] text-4xl"/>
          </div>
          {drobdown ? (
            <div onClick={showDrobdown} className="lg:hidden text-[22px] cursor-pointer text-white">
              <MdClose />
            </div>
          ) : (
            <div onClick={showDrobdown} className="lg:hidden text-[22px] cursor-pointer text-white">
              <HiMenuAlt3 />
            </div>
          )}
        </div>
        {drobdown ? (
          <div onClick={showDrobdown} className="lg:hidden w-full h-full fixed top-24 bg-nav bg-cover ease-in-out duration-100">
            <div className="w-full h-full flex flex-col  justify-center items-center pt-8 gap-4">
              <ul className="text-center flex flex-col  justify-center items-center h-[200px] gap-y-10">
                <Link to="/Hero" className="leading-normal style no-underline text-white justify-center items-center h-full ">Home</Link>
                <Link to="/test" className="leading-normal style no-underline text-white flex justify-center items-center h-full ">Explore</Link>
                <Link to="#" className="leading-normal style no-underline text-white flex justify-center items-center h-full ">Articles</Link>
                <Link to="#" className="leading-normal style no-underline text-white flex justify-center items-center h-full ">Galaries</Link>
                <Link to="#" className="leading-normal style no-underline text-white flex justify-center items-center h-full ">Contact</Link>
              </ul>
            </div>
          </div>
        ) : null}
        
      </div>
    </nav>
  );
}

export default Nav;
