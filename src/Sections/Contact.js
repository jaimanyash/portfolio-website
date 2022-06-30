import Image from "next/image";
import { contact } from "../data/config";
import { RoughNotation } from "react-rough-notation";

export default function Stack() {
  return (
    <section id="contact">
      <div className="container px-5 pb-16 mx-auto">
        <div className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300"></div>
        <div className="font-sans overflow-x-hidden w-full font-bold text-3xl">
          <h2 className="max-w-max mx-0 text-left relative mb-4 md:w-max ">
            <RoughNotation type="highlight" show={true} color="#FFC83D">
              {contact.title}
            </RoughNotation>
          </h2>
        </div>
        <p>
          Shoot me an email:{" "}
          <a
            className="font-sans font-medium dark:text-white transition-colors duration-500"
            href={`mailto:${contact.email}`}
          >
            <RoughNotation type="underline" show={true} color="#50E3C2">
              {contact.email}
            </RoughNotation>
          </a>
        </p>
        <div className="flex space-x-5 mt-5 text-lightText transition-colors duration-500">
          {contact.github && (
            <a
              href={`https://github.com/${contact.github}`}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/static/icons/github.svg"
                width={20}
                height={20}
                alt="Github icon"
              />
            </a>
          )}
          {contact.twitter && (
            <a
              href={`https://twitter.com/${contact.twitter}`}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/static/icons/twitter.svg"
                width={20}
                height={20}
                alt="Twitter icon"
              />
            </a>
          )}
          {contact.linkedin && (
            <a
              href={`https://linkedin.com/in/${contact.linkedin}`}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/static/icons/linkedin.svg"
                width={20}
                height={20}
                alt="LinkedIn icon"
              />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
