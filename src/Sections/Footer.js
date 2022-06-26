import React from "react";
import { TbBrandNextjs } from "react-icons/tb";
import { SiVercel, SiTailwindcss } from "react-icons/si";
import CustomLink from "../Components/CustomLink";

const Footer = () => {
  return (
    <div className="container mt-2 pb-16 ">
      <div className="max-w-4xl px-4 mx-auto text-gray-600 dark:text-white ">
        <div className="pb-8 mb-2 text-center border-t-2 border-gray-300 dark:border-white-300"></div>
          <ul className="flex">
            <li className="mr-4">
              <p>Built with</p>
            </li>
            <li className="mr-4">
              <CustomLink href="www.google.com">
                <TbBrandNextjs className="w-6 h-6 dark:text-gray-200 hover:text-slate-300 dark:hover:text-slate-300" />
              </CustomLink>
            </li>
            <li className="mr-4">
              <SiTailwindcss className="w-6 h-6 dark:text-gray-200 hover:text-sky-500 dark:hover:text-sky-500" />
            </li>
            <li className="mr-4">
              <SiVercel className="w-6 h-6 dark:text-gray-200 hover:text-slate-500 dark:hover:text-slate-500" />
            </li>
          </ul>
        </div>  
      </div>

  );
};

export default Footer;
