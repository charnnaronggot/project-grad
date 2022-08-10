import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
function MenuItem(props) {
  const { title, url, link } = props;

  return (
    <div className="flex justify-center items-center  bg-gray-light w-60 h-44 rounded-md active:drop-shadow-2xl">
      <Link
        to={link}
        className="flex flex-col  content-center text-center "
      >
        <FontAwesomeIcon
          icon={url}
          className="text-8xl hover:text-red-500 "
        ></FontAwesomeIcon>{" "}
        {title}
      </Link>

      {/*      
     <a href= "link">
      <FontAwesomeIcon
        icon= {url}
        className="text-8xl hover:text-red-500 "
      ></FontAwesomeIcon>
      <h1>{title}</h1>

     </a> */}
    </div>
  );
}

export default MenuItem;
