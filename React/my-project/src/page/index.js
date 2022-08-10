import React  from "react";
import { Link } from "react-router-dom";
import MenuItem from "../item/MenuItem";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



import {
  faCoffee,
  faGraduationCap,
  faCircleCheck,
  faBars,
 
} from "@fortawesome/free-solid-svg-icons";

//const [selected, iconSelected] = useState(null);
const menuName = [
    {
      title: "Examer",
      url: faCircleCheck,
      link : "/"
    },
    {
      title: "Student",
      url: faGraduationCap,
      link : "/Studentcheck"
    },

  ];

  const menu = menuName.map((menus, index) => {
    console.log(menus) ;
    return <MenuItem key={index} title={menus.title} url={menus.url} link={menus.link}/>;
  });
const Index = () => {
    
  return (
    
    <div className="bg-main-green flex justify-center items-center flex-row min-h-screen gap-10">
        {menu}
    </div>
    // <div className="bg-main-green">
    //   <div className="flex justify-center items-center flex-row min-h-screen gap-10">
    //     <div className=" flex justify-center items-center text-uproar-red bg-frozen-salmon w-32 h-24 rounded-md ">
    //       <Link
    //         to="/"
    //         className="selectMenu  focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 rounded-lg"
    //       >
    //         {" "}
    //         Examer
    //       </Link>
          
    //     </div>
    //     <div className="text-uproar-red bg-frozen-salmon w-32 h-24 rounded-md flex justify-center items-center">
    //       <Link
    //         to="/StudentCheck"
    //         className="selectMenu  focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 rounded-lg "
    //       >
    //         Student{" "}
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Index;
