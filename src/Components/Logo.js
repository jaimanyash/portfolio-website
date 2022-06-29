import React from "react";
import Link from "next/link";
import { CodeIcon } from "@heroicons/react/solid";

const Logo = () => {
  return (
    <div className="container justify-between font-sans font-medium">
      <ul className="flex flex-row">
        <li className="mr-5">
          <Link href="/">
            <a className="my-16 flex items-center space-x-1 ">
              <span className="  text-gray-700 dark:text-gray-200 text-lg tracking-tight whitespace-nowrap hover:text-cyan-500">
                Home
              </span>
            </a>
          </Link>
        </li>

        <li className="mr-5">
          <Link href="#projects">
            <a className="my-16 flex items-center space-x-1">
              <span className=" text-gray-700 dark:text-gray-200 text-lg tracking-tight whitespace-nowrap hover:text-cyan-500">
                Projects
              </span>
            </a>
          </Link>
        </li>

        <li className="mr-0">
          <Link href="/">
            <a className="my-16 flex items-center space-x-1">
              <span className=" text-gray-700 dark:text-gray-200 text-lg tracking-tight whitespace-nowrap hover:text-cyan-500 ">
                Contact
              </span>
            </a>
          </Link>
        </li>
      </ul>
  </div>
  );
};

export default Logo;
