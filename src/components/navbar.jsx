import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

import logoYt from "../assets/yt-logo.png";

import { Context } from "../context/contextApi";
import Loader from "../shared/loader";

function Navbar() {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();
    const { loading, setShowExpandNav } = useContext(Context);

    const onHandleShowExpand = () => {
        setShowExpandNav(true)
    }

    const searchQueryHandler = (ev) => {
        if((ev?.key === "Enter" || ev === "searchButton") && searchQuery.length > 0){
            navigate(`/results/search_query/${searchQuery}`);
        }
    }

  return (
    <div className="navbar sticky px-5 py-2 top-0 h-14 flex flex-row items-center justify-between bg-white  dark:bg-black">
        { loading && <Loader /> }
        <div className="flex gap-2 items-center">
            <div className="menu_navbar hover:rounded-full hover:bg-slate-800 h-10 w-10 items-center justify-center hidden md:flex ">
                <SlMenu 
                    className="text-white text-xl cursor-pointer" 
                    onClick={onHandleShowExpand}
                />
            </div>
            <div className="logo_navbar">
                <Link to="/" className="flex h-5 items-center">
                    <img className="h-full" src={logoYt} alt="youtube" />
                </Link>
            </div>
        </div>
        <div className="search_navbar flex items-center group">
            <div className="hidden md:flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
                <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
                    <IoIosSearch className="text-white text-xl" />
                </div>
                <input
                    type="text"
                    className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyUp={searchQueryHandler}
                    placeholder="Search"
                    value={searchQuery}
                />
            </div>
            <button
                className="w-[40px] h-10 absolute right-[14vw] md:static  md:flex items-center justify-center md:border border-l-0 border-[#303030] rounded-r-3xl md:bg-white/[0.1]"
                onClick={() => searchQueryHandler("searchButton")}
            >
                <IoIosSearch className="text-white text-2xl" />
            </button>
        </div>
        <div className="btn_navbar h-10 w-15">
            <button 
                type="button" 
                className="h-full w-full px-4 py-4 md:border border-[#303030] rounded-full text-sky-400 flex items-center justify-center gap-2 text-sm hover:bg-sky-950">
                    <CgProfile className="absolute right-5 md:static text-white md:text-sky-400 text-2xl" />
                    <p className="hidden md:block font-bold" >Sign in</p>
            </button>
        </div>
    </div>
  )
}

export default Navbar