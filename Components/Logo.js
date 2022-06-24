import { CodeIcon } from "@heroicons/react/outline";
import Link from "next/Link";

const Logo = () => {
  return (
    <>
      <div className="sticky py-2 md:py-9 md:mb-0">
        <div className="container px-60 mx-auto lg:max-w-4xl flex items-center justify-between"></div>
        <Link href="/">
          <a
            className={
              "font-medium text-2xl tracking-wider transition-colors text-gray-900 hover:text-cyan-500 uppercase dark:text-white"
            }
          >
            YASH J.{" "}
          </a>
        </Link>
      </div>
      <ul className="flex">
        <li className="mr-6">
          <Link href="/">
            <a className="my-16 flex items-center space-x-1 ">
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
                About
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
              <span className=" text-gray-700 dark:text-gray-200 font-normal text-xl tracking-tight whitespace-nowrap hover:text-cyan-500">
                Blog
              </span>
            </a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Logo;
