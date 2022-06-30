import React from "react";
import { FaReact, FaHtml5, FaCss3, FaNodeJs, FaCode } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const Hero = () => {
  return (
    <section>
      <section className="text-gray-600 dark:text-gray-100 ">
        <div className="container  px-5 pb-8 mx-auto">
          <div className="p-5 flex items-center mx-auto  mb-10 border-gray-300 rounded-lg sm:flex-row flex-col">
            <div class="w-2/6 h-2/6 md:mr-10 sm:mr-10 inline-flex items-center justify-center flex-shrink-0 transition duration-500 hover:scale-125">
              <FaCode className="w-full h-full hover:text-cyan-400  " />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h1 className="text-5xl mb-6 text-gray-100  ">
                <RoughNotation type="highlight" show={true} color="#22D3EE">
                  Hello, I'm <b>Yash 👋</b>
                </RoughNotation>
              </h1>
              <p className=" text-base text-left text-gray-500 dark:text-gray-200">
                I'm a student, developer and most importantly,&nbsp;
              </p>
              <p className=" text-base text-left text-gray-600 dark:text-gray-200">
                <RoughNotation type="box" show={true} color="#FFC83D">
                  <b>a learner 📚 </b>
                </RoughNotation>
              </p>
              <br />
              <h2 className=" text-base text-left text-gray-500 dark:text-gray-200">
                Currently developing sites using
                <RoughNotation type="circle" show={true} color="#F06988">
                  <b> React </b>
                </RoughNotation>
                and learning new technologies in my free time. New to NextJS,
                TailwindCSS and Figma✏️
              </h2>
              <br />
              <p className=" text-base text-left text-gray-500 dark:text-gray-200">
                Welcome to my digital garden, where I share what I'm learning
                about shipping great products, becoming a better developer and
                growing a career in tech🚀
              </p>
              <div className="py-8 leading-3">
                <h1 className="font-medium  text-gray-700 dark:text-gray-100 text-xl  mb-2">
                  My Stack 👨‍💻
                </h1>
                <br />
                <div className="  text-base inline-block mr-2">
                  <div className="flex  pr-2 h-full items-center">
                    <FaHtml5 className="w-8 h-8 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-500" />
                    <p className=" pl-2">HTML5</p>
                  </div>
                </div>
                <div className="mb-4  text-base inline-block mr-2">
                  <div className="flex  pr-2 h-full items-center">
                    <FaCss3 className="w-8 h-8 dark:text-gray-200 hover:text-sky-500 dark:hover:text-sky-500" />
                    <p className=" pl-2">CSS3</p>
                  </div>
                </div>
                <div className="   text-base inline-block mr-2">
                  <div className="flex  pr-2 h-full items-center">
                    <SiJavascript className="w-8 h-8 dark:text-gray-200 hover:text-yellow-500 dark:hover:text-yellow-500" />
                    <p className="pl-2">JavaScript</p>
                  </div>
                </div>
                <div className="  text-base inline-block mr-2">
                  <div className="flex  pr-2 h-full items-center">
                    <FaReact className="w-8 h-8 dark:text-gray-200 hover:text-sky-500 dark:hover:text-sky-500" />
                    <p className="pl-2">ReactJs</p>
                  </div>
                </div>

                <div className="  text-base inline-block mr-2">
                  <div className="flex pr-2 h-full items-center">
                    <FaNodeJs className="w-8 h-9 dark:text-gray-200 hover:text-green-500 dark:hover:text-green-500" />
                    <p className="pl-2">NodeJs</p>
                  </div>
                </div>
                <div className="  text-base inline-block mr-2">
                  <div className="flex pr-2 h-full items-center">
                    <SiTailwindcss className="w-8 h-8 dark:text-gray-200 hover:text-sky-500 dark:hover:text-sky-500" />
                    <p className="pl-2">Tailwind CSS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
