import React from 'react'
import Android from "../assets/android.png";
import Html from "../assets/html.png";
import Tailwind from "../assets/tailwind.png";
import Javascript from "../assets/javascript.png";
import Node from "../assets/node.png";
import ReactIcn from "../assets/react.png";
// import Mongo from "../assets/mongo.png";
// import Mysql from "../assets/mysql.png";
import Spring from "../assets/spring.png";
// import Docker from "../assets/docker.png";
import Java from "../assets/java.png";
const Experience = () => {
    const skills = [
        {
            id:1,
            src: Html,
            txt: "HTML",
            style: 'shadow-orange-500'
        },
        {
            id:2,
            src: Tailwind,
            txt: "TAILWIND",
            style: 'shadow-sky-400'
        },
        {
            id:3,
            src: Javascript,
            txt: "JAVASCRIPT",
            style: 'shadow-yellow-500'
        },
        {
            id:4,
            src: ReactIcn,
            txt: "REACT",
            style: 'shadow-blue-600'
        },
        {
            id:5,
            src: Node,
            txt: "NODE",
            style: 'shadow-green-500'
        },
        {
            id:6,
            src: Java,
            txt: "JAVA",
            style: 'shadow-red-500'
        },
        {
            id:7,
            src: Android,
            txt: "ANDROID",
            style: 'shadow-green-500'
        },
        {
            id:8,
            src: Spring,
            txt: "SPRING",
            style: 'shadow-green-500'
        },
        // {
        //     id:9,
        //     src: Mysql,
        //     txt: "MYSQL",
        //     style: 'shadow-blue-500'
        // },
        // {
        //     id:10,
        //     src: Mongo,
        //     txt: "MONGODB",
        //     style: 'shadow-green-500'
        // },
        // {
        //     id:11,
        //     src: Docker,
        //     txt: "DOCKER",
        //     style: 'shadow-blue-500'
        // },

    ];

  return (
    <div
      name="experiences"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
