import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Project = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(true);

  const openProjectHandler = () => {
    if (!isOpen) {
      setIsActive(true);
      setIsOpen(true);
    } else {
      setIsActive(false);
      setTimeout(() => {
        setIsOpen(false);
      }, 500);
    }
  };

  return (
    <div
      className="projectImage flex p-10 bg-slate-200  xs:p-5 items-center flex-col rounded-xl"
      onMouseLeave={openProjectHandler}
      onMouseEnter={openProjectHandler}
    >
      <Image
        className="rounded-md cursor-pointer"
        src="/project1.png"
        height={400}
        width={496}
        alt={props.title}
      />
      {isOpen && (
        <div
          className={`${
            isActive ? "project-in" : "project-out"
          } opacity-90 project-info p-10 bg-slate-200 xs:p-5 items-center rounded-xl`}
        >
          <p>
            This is my awesome website that I built using the Nextjs React
            framework. It is complete frotend application using Redux to manage
            the global state of all the items added to cart throughout the
            application. You can add an item to your cart from any of the three
            shop pages and open the cart on any page.
          </p>
          <div className="flex gap-10 items-center  justify-center mt-10">
            <Link href="google.com">
              <button className="bg-cyan-400 p-2 pr-4 pl-4 rounded-xl hover:bg-cyan-500 active:scale-95">
                Live Site
              </button>
            </Link>
            <Link href="google.com">
              <Image
                src="/github.svg"
                width={40}
                height={40}
                className="cursor-pointer active:scale-95"
              />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
