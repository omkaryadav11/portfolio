import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg flex flex-col h-full mx-auto p-4 justify-center">
        <div className="pb-8">
           <p className="text-4xl font-bold inline border-b-4 border-gray-600">About</p>
        </div>
        <p className="text-xl mt-16">
                My name is Omkar Yadav. I'm a final year undergraduate student from pune univeristy.
                Currently pursuing my bachelor's in Computer Engineering. I have worked on technologies
                such as React.js, React Native, Java, Spring Boot, Node.js, Mysql, MongoDB, Docker,
                Linux and cloud technologies like Azure and AWS.
            </p>
            <br/>
            <p className="text-xl">
                Besides, personal projects I have previous work experience in mobile application development.
                I've Interned as an application developer where I've worked upon following tech-stack:
                React Native, Firebase & OpenCV. <br/>
                I would love to work on freelance/full-time roles based on the metioned technologies.
            </p>
      </div>
    </div>
  )
}

export default About;
