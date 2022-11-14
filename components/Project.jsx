import Image from "next/image";
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
      className="projectImage flex p-10 bg-slate-200  xs:p-5 items-center flex-col rounded-xl shadow-lg drop-shadow-lg dark:bg-dark4"
      onMouseLeave={openProjectHandler}
      onMouseEnter={openProjectHandler}
    >
      <Image
        className="rounded-md cursor-pointer"
        src={props.image}
        height={400}
        width={496}
        alt={props.title}
      />
      {isOpen && (
        <div
          className={`${
            isActive ? "project-in" : "project-out"
          } opacity-90 project-info p-10 bg-slate-200 dark:bg-dark4 xs:p-5 items-center rounded-xl`}
        >
          <p>{props.description}</p>
          <div className="flex gap-10 items-center  justify-center mt-10">
            {props.live ? <a href={props.live} rel="noreferrer" target="_blank">
              <button className="bg-cyan-400 p-2 pr-4 pl-4 rounded-xl hover:bg-cyan-500 active:scale-95">
                Live Site
              </button>
            </a> : <></>}
            <a href={props.repo} rel="noreferrer" target="_blank">
              <Image
                src={props.git}
                width={40}
                height={40}
                className="cursor-pointer active:scale-95"
              />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
