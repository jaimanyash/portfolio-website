import { CodeIcon } from "@heroicons/react/outline";
import Link from "next/Link";

const Logo = () => {
  return (
      
        <div className="container px-2 mx-auto mr-10 flex items-baseline justify-between">
        <Link href="/">
          <a
            className={
              "font-medium text-2xl tracking-wider transition-colors text-gray-900 hover:text-cyan-500 uppercase dark:text-white"
            }
          >
            YASH J.{" "}
          </a>
        </Link>
      <ul className="flex">
        <li className="mr-6">
          <Link href="/">
            <a className="  my-16  flex items-center space-x-1 ">
              <span className="  text-gray-700 dark:text-gray-200 font-normal text-xl tracking-tight whitespace-nowrap hover:text-cyan-500">
                Home
              </span>
            </a>
          </Link>
        </li>

        <li className="mr-6">
          <Link href="/">
            <a className="my-16 flex items-center space-x-1">
              <span className=" text-gray-700 dark:text-gray-200 font-normal text-xl tracking-tight whitespace-nowrap hover:text-cyan-500">
                Projects
              </span>
            </a>
          </Link>
        </li>

        <li className="mr-6">
          <Link href="/">
            <a className="my-16 flex items-center space-x-1">
              <span className=" text-gray-700 dark:text-gray-200 font-normal text-xl tracking-tight whitespace-nowrap ">
                Blog
              </span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
 
  );
};

export default Logo;
