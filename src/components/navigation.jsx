import { Link } from "react-router-dom";
import { categories } from "../utils/constants";
import { useEffect, useState } from "react";
import ExpandNav from "./expand-nav";

function Navigation() {
  const [cate, setCate] = useState([]);
  let i = 1;

  useEffect(() => {
    setCate(categories.filter(item => item.type == "homecategory" ? item : ''));
  },[])

  return (
    <div className="w-[74px] h-full bg-black" >
        <ul className="h-[370px] px-1">
          {
            cate.map((item) => {
              return(
                <Link 
                  key={i++} 
                  to={`/${item.name.toLowerCase()}`}
                  className="text-white h-[74px] w-full flex flex-col items-center justify-center hover:rounded-lg hover:bg-zinc-800 cursor-pointer"
                  >
                    <span className="text-[23px]">{item.icon}</span>
                    <p className="text-[10px] font-medium mt-1">{item.name}</p>
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