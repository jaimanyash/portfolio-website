import { FaReact, FaHtml5, FaCss3, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import Image from "next/image"
import profile from "../Images/me.jpg"
 
const Hero = () => {
return(
 <section className="text-gray-600">
 <div className="container mx-auto flex px-2 py-16 md:flex-row flex-col items-center">
   <div className="md:w-1/2 flex flex-col md:items-start mb-16 md:mb-0 items-center text-center">
     <h2 className="text-gray-600 text-3xl w-[740px] text-left leading-normal sm:text-4xl font-bold dark:text-gray-200">
       Hi 👋 , I am{" "}
     </h2>
     <br></br>
     <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-slate-100 text-3xl w-[740px] text-left leading-normal sm:text-5xl font-bold   dark:from-cyan-400 dark:to-indigo-200 ">
       Yash Jaiman
     </h2>
     <br></br>
     <p className="text-lg sm:text-md text-left text-gray-500 dark:text-gray-200">
       💡 A student, developer and most importantly, <b>a learner.</b>
       </p>
       <br/>
       <p className="text-lg sm:text-md text-left text-gray-500 dark:text-gray-200">
       Currently developing sites using React
       and learning new technologies in my free time. New to
       Next.js, Tailwindcss and Figma.
       </p><br />
       <p className="text-lg sm:text-md text-left text-gray-500 dark:text-gray-200">Welcome to my digital garden, where I share what I'm learning
       about shipping great products, becoming a better developer and
       growing a career in tech.
     </p>
     <br />
     <br></br>
     <p className="text-lg sm:text-md text-left text-gray-500 dark:text-gray-200">
       <b>👨‍💻 Tech Stack: </b>
     </p>
     <br />
     <ul className="flex">
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

   <div className="flex flex-wrap justify-center">
   <div className="w-11/12 sm:w-11/12 px-2">
             <Image
                 src={profile}
                 alt="Profile"
                 priority={true}
                 className="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
                 placeholder="blur"
             />
         </div>
   </div>
 </div>
</section>
);
}

export default Hero;