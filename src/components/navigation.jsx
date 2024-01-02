import { Link, useLocation } from "react-router-dom";
import { categories } from "../utils/constants";
import { useEffect, useState } from "react";
import ExpandNav from "./expand-nav";

function Navigation() {
  const [cate, setCate] = useState([]);
  const [location, setLocation] = useState();
  let i = 1;
  const { pathname } = useLocation();

  useEffect(() => {
    setCate(categories.filter(item => item.type == "homecategory" ? item : ''));
    setLocation(pathname.slice(1, 6))
  },[pathname])

  return (
    <div className={`${
      location == "watch" ? "hidden" : "" 
    } w-[74px] h-full pt-2  bg-black`} >
        <ul className="h-[370px] px-1">
          {
            cate.map((item) => {
              const { name, icon } = item;
              return(
                <Link 
                  key={i++} 
                  to={`/${name == "Home" ? "" : name.toLowerCase()}`}
                  className="text-white h-[74px] w-full flex flex-col items-center justify-center hover:rounded-lg hover:bg-zinc-800 cursor-pointer"
                  >
                    <span className="text-[25px]">{icon}</span>
                    <p className="text-[10px] font-medium mt-1">{name}</p>
                </Link>
              )
            })
          }
        </ul>
        <ExpandNav />
    </div>
  )
}

export default Navigation