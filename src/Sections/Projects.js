import Image from 'next/image';
import { projects } from "../data/config"

export default function Projects() {
  return (
    <div className="container px-5 pb-24 mx-auto">
       <div className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300"></div> 
      <div className="overflow-x-hidden w-9/12">
        <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-400 dark:from-cyan-400 dark:to-indigo-200 text-3xl title-font font-bold mb-4">
          {projects.title}
        </h2>
      </div>
      <p className="text-lg">{projects.desc}</p>
      <div className=" mt-8">
        {projects.projects.map((item, index) => {
          return (
            <div
              key={index}
              className="p-6 border border-gray-300 rounded-2xl mb-4"
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="flex items-center flex-wrap -m-3 pt-5">
                {item.link && (
                  <a
                    href={item.link}
                    className="flex items-center  py-1 px-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/static/icons/link.svg"
                      width={18}
                      height={18}
                      alt="Link icon"
                    />
                    <span className="ml-2  text-lightText  transition-colors duration-500">
                      {item.link}
                    </span>
                  </a>
                )}
                {item.github && (
                  <a
                    href={`https://github.com/${item.github}`}
                    className="flex items-center py-1 px-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/static/icons/github.svg"
                      width={18}
                      height={18}
                      alt="Link icon"
                    />
                    <span className="ml-2  text-lightText  transition-colors duration-500">
                      {item.github}
                    </span>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}