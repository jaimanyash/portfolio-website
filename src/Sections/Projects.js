import Image from "next/image";
import { projects } from "../data/config";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container px-5 pb-24 mx-auto">
        <div className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300"></div>
        <div className="overflow-x-hidden w-9/12 font-sans font-bold ">
          <h2 className="text-3xl font-bold mb-4 ">
            <RoughNotation type="highlight" show={true} color="#FFC83D">
              {projects.title}
            </RoughNotation>
          </h2>
        </div>
        <p className="font-sans text-base">{projects.desc}</p>
        <div className="font-sans font-medium mt-8">
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
    </section>
  );
}
