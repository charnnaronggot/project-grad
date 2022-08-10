import React, { useState } from "react";
import Header from "./header";
import MenuPost from "../item/MenuPost";
import MenuItem from "../item/MenuItem";

import ReactDOM from "react-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faGraduationCap,
  faCircleCheck,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

function Menu() {
  const [selected, iconSelected] = useState(null);
  const menuName = [
    {
      title: "Grading",
      url: faCircleCheck,
      link : "/menu" ,
    },
    {
      title: "Student",
      url: faGraduationCap,
      link : "/menu" ,
    },
    {
      title: "Edit",
      url: faBars,
      link : "/menu" ,
    },
  ];

  
  let menupost = null;
  function onIconClick(e) {
    e.preventDefault();
    // let wtf = e.target;
    // wtf.classList.add("bg-black")
    console.log("สวัสดี");
  }


  const menu = menuName.map((menus, index) => {
    console.log(menus) ;
    return <MenuItem key={index} title={menus.title} url={menus.url} link = {menus.link}/>;
  });

  return (
    <div className="bg-main-green flex justify-center items-center flex-row min-h-screen gap-10 ">

      {/* <p>{selected}</p> */}
      <div className="flex flex-col flex-wrap content-center text-center  gap-20 align-middle w-auto justify-center md:flex-row">
        {menu}
      </div>
    </div>
  );
}

export default Menu;
