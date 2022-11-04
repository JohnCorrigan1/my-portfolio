import React from "react";
import Image from "next/image";
import Me from "./../../public/me.jpg";
import Linkedln from "./../../public/linkedln.svg";
import BitBucket from "./../../public/bitbucket.png";
import Github from "./../../public/github.svg";
import Twitter from "./../../public/twitter.svg";

export default function About() {
  return (
    <div className="flex justify-center mt-10">
      <div className="flex container gap-10 w-2/3 justify-center bg-slate-100 p-5 shadow-lg drop-shadow-lg xl:w-11/12">
        <Image src={Me} alt="Picture of me" />
        <div className="flex flex-col">
          <p className="mt-5">
          Hi! My love for computers began at a young age with video games and
            ever since I have been building my own computers constantly looking
            for ways technology can improve my life. 
           </p>
           <p className="mt-5">
            I am currently focused on
            learning all things web development. I learned the fundamentals of programming in my time at Florida State University in Java, C++, Python, and SQL.
            Most of my web development knowledge is from building projects on my own and the open source course <a className="text-blue-400 hover:text-blue-500" href="https://www.theodinproject.com" rel="noreffer" target="_blank">The Odin Project</a>.
          </p> 
          <p className="mt-5 mb-5">
            Reach out to me at the links below or send me an email at jcorrigan322@gmail.com.
          </p>
          <div className="flex gap-5 mt-auto justify-center items-center">
            <a
              href="https://www.linkedin.com/in/john-corrigan322/"
              rel="noreferrer"
              target="_blank"
            >
              <Image
                className="cursor-pointer"
                src={Linkedln}
                height={40}
                width={40}
                alt="Linkeldn icon"
              />
            </a>
            <a
              href="https://github.com/JohnCorrigan1"
              rel="noreferrer"
              target="_blank"
            >
              <Image
                className="cursor-pointer"
                src={Github}
                height={40}
                width={40}
                alt="Github icon"
              />
            </a>
            <a
              href="https://bitbucket.org/jcorrigan322/"
              rel="noreferrer"
              target="_blank"
            >
              <Image
                className="cursor-pointer"
                src={BitBucket}
                height={40}
                width={40}
                alt="Bitbucket Icon"
              />
            </a>
            <a
              href="https://twitter.com/john_j_corrigan"
              rel="noreferrer"
              target="_blank"
            >
              <Image
                className="cursor-pointer"
                src={Twitter}
                height={40}
                width={40}
                alt="Twitter icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
