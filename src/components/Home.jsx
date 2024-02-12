import React from 'react'
import HeroImage from "../assets/heroImage.jpg"
import { HiOutlineArrowRight } from "react-icons/hi";
const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center  justify-between h-full px-4 md:flex-row">
        <div className="h-full flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
                Hello, Welcome to my page
            </h2>
            <p className="text-gray-400 py-4 max-w-md">
               I'm a Full Stack Developer with experience in developing mobile and web applications.
            </p>
            <div>
              <a href='/resume.pdf' download={true}>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500
             to-blue-500 cursor-pointer font-medium text-2xl">
                Resume
                <span className="group-hover:rotate-90 duration-300">
                <HiOutlineArrowRight className="ml-2"/>
                </span>  
            </button>
            </a>
        </div>
        </div>
        <div>
            <img src={HeroImage} alt='my profile'
            className="rounded-2xl mx-auto w-2/4 md:w-full"
            />
        </div>
      </div>
    </div>
  )
}

export default Home
