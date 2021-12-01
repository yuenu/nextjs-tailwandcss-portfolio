import Image from "next/image";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GrFormLocation } from "react-icons/gr";
import { useTheme } from "next-themes";

const Sidebar = () => {
  function sendEmail(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault
    window.open('mailto:miraiku82@gmail.com')
  }

  const { theme, setTheme } = useTheme()

  const changeThemeHandler = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <div>
      <Image
        className="object-cover mx-auto rounded-full"
        src="/avatar.jpeg"
        alt="User Avatar"
        width={128}
        height={128}
        layout="intrinsic"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green">Josh</span>
        &nbsp;Hsu
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        Frontend Developer
      </p>
      <a
        href=""
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200"
        download="name"
      >
        <GiTie />
        Download Resume
      </a>
      {/* social icon */}
      <div className="flex justify-around w-8/12 mx-auto my-5 text-green-500 md:w-full">
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* address */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div>
          <span className="flex items-center justify-center">
            <GrFormLocation />
            Taipei, Taiwan
          </span>
          <p>miraiku82@gmail.com</p>
          <p>+886 983507382</p>
        </div>
      </div>
      {/* Email Button */}
      <button onClick={sendEmail} className="w-8/12 px-5 py-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none">Email Me</button>
      <button 
        onClick={changeThemeHandler}
        className="w-8/12 px-5 py-2 mt-4 text-white rounded-full bg-gradient-to-r from-green to-blue-400">
        {theme} UI
        </button>
    </div>
  );
};

export default Sidebar;
