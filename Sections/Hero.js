import { FaReact, FaHtml5, FaCss3, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import Image from "next/image";
import profile from "../Images/me.png";



const Hero = () => {
  return (
    <div className="flex flex-row w-11/12 px-6 mr-10 justify-between md:items-start mb-16 md:mb-0 items-center text-center">
      <div className="flex flex-col">
        <h1 className=" text-gray-600 text-3xl xs:text-left leading-normal xs:text-4xl font-bold dark:text-gray-200">
          Hi 👋 , I am{" "}
        </h1>
        <br></br>
        <h1 className="flex flex-col bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-400 text-5xl  text-left leading-normal font-bold   dark:from-cyan-400 dark:to-indigo-200 ">
          Yash Jaiman
        </h1>
        <br></br>
        <p className="text-lg text-left text-gray-500 dark:text-gray-200">
          💡 A student, developer and most importantly, <b>a learner.</b>
        </p>
        <br />
        <p className="text-lg text-left text-gray-500 dark:text-gray-200">
          🧰Currently developing sites using React and learning new technologies
          in my free time. New to Next.js, Tailwindcss and Figma.
        </p>
        <br />
        <p className="text-lg  text-left text-gray-500 dark:text-gray-200">
          🏡Welcome to my digital garden, where I share what I'm learning about
          shipping great products, becoming a better developer and growing a
          career in tech.
        </p>
        <br />
        <br></br>
        <p className="text-lg text-left text-gray-500 dark:text-gray-200">
          <b>👨‍💻 Tech Stack: </b>
        </p>
        <br />
        <ul className="flex text-gray-600">
          <li className="mr-6">
            
            <FaHtml5 className="w-10 h-10 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-500" />
          </li>
          <li className="mr-6">
            <FaCss3 className="w-10 h-10 dark:text-gray-200 hover:text-sky-500 dark:hover:text-sky-500" />
          </li>
          <li className="mr-6">
            <SiJavascript className="w-10 h-10 dark:text-gray-200 hover:text-yellow-500 dark:hover:text-yellow-500" />
          </li>
          <li className="mr-6">
            <FaReact className="w-10 h-10 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-500" />
          </li>
          <li className="mr-6">
            <FaNodeJs className="w-10 h-10 dark:text-gray-200 hover:text-green-500 dark:hover:text-green-500" />
          </li>
          <li className="mr-6">
            <SiTailwindcss className="w-10 h-10 dark:text-gray-200 hover:text-sky-500 dark:hover:text-sky-500" />
          </li>
        </ul>
      </div>
      <div className="flex-row items-center my-10 ml-24  ">
        <Image
          src={profile}
          className="rounded-full shadow-lg hover:shadow-cyan-400 "
          height={600}
          width={600}
        ></Image>
      </div>
    </div>
  );
};

export default Hero;
