/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function NavItem({ name, icon, colorText}) {
  return (
    <div className="pl-2">
        <Link 
        to={`/${name.toLowerCase()}`}
        className="text-white w-full flex items-center pl-3 py-2 my-1 gap-3 hover:rounded-xl hover:bg-zinc-800 cursor-pointer"
        >
            <span className={`${colorText} text-[22px]`}>{icon}</span>
            <p className="text-[14px]  mt-1">{name}</p>
        </Link>
    </div>
  )
}

export default NavItem;