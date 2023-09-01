import React, {useState} from 'react';
import {Close, Menu, NavLogo} from "../../assets/index";
import {navLinks} from "../../constants/index";

const NavigationBar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="rounded-lg w-full flex py-2 px-2 justify-between items-center navbar mobile:space-between">
      {/*Menu items for the logo and title section*/}
      <img src={NavLogo} alt="hoobank" className="rounded-lg w-[90px] h-[60px] drop-shadow-2xl tablet:w-[80px] h-[40px] mobile:w-[40px] h-[40px] "/>
      <h1 className="mx-2 text-gradient front-light text-2xl">BookLibrary</h1>
      {/*Menu items for the large screen*/}
      <ul className="list-none tablet:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id} className={` cursor-pointer text-[16px] font-thin px-3 py-1 ${
            active === nav.title ? "transition duration-500 rounded-lg bg-cyan-500 shadow-lg shadow-cyan-500/50" : ""
          } ${index === navLinks.length - 1 ? "mr-0" : "mr-5"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      {/*Menu items for the mobile screen*/}
      {/*<div className="mobile:hidden flex flex-1 justify-end items-center">*/}
      {/*  <img*/}
      {/*    src={toggle ? Close : Menu}*/}
      {/*    alt="menu"*/}
      {/*    className="w-[28px] h-[28px] bg-blue-gradient p-2 rounded-md object-contain"*/}
      {/*    onClick={() => setToggle(!toggle)}*/}
      {/*  />*/}

      {/*  <div*/}
      {/*    className={`${*/}
      {/*      !toggle ? "hidden" : "flex"*/}
      {/*    } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}*/}
      {/*  >*/}
      {/*    <ul className="list-none flex justify-end items-start flex-1 flex-col">*/}
      {/*      {navLinks.map((nav, index) => (*/}
      {/*        <li*/}
      {/*          key={nav.id}*/}
      {/*          className={`font-poppins font-medium cursor-pointer text-[16px] ${*/}
      {/*            active === nav.title ? "text-center font-poppins w-full text-white rounded-lg bg-cyan-500 shadow-lg shadow-cyan-500/50" : "w-full text-center text-white"*/}
      {/*          } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}*/}
      {/*          onClick={() => setActive(nav.title)}*/}
      {/*        >*/}
      {/*          <a href={`#${nav.id}`}>{nav.title}</a>*/}
      {/*        </li>*/}
      {/*      ))}*/}
      {/*    </ul>*/}

      {/*  </div>*/}
      {/*</div>*/}
    </nav>
  );
};

export default NavigationBar;
