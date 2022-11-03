import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className=" max-w-full bg-teal-600 w-full p-5 flex justify-between  shadow-lg drop-shadow-md">
      <h1 className="sm:pl-1 sm:text-xl pl-10 text-2xl font-bold cursor-default hover:-translate-y-1 duration-300">
        John Corrigan
      </h1>
      <nav>
        <ul className="flex gap-10 pr-10 sm:pr-1 sm:gap-3 sm:text-md">
          <Link href="#projects" >
            <li className="text-lg hover:font-semibold hover:underline cursor-pointer hover:-translate-y-1 duration-300">
              Projects
            </li>
          </Link>
          <Link href="#skills" >
            <li className="text-lg hover:font-semibold hover:underline cursor-pointer hover:-translate-y-1 duration-300">
              Skills
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
