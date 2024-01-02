import { useContext, useEffect, useState } from "react";
import { Context } from "../context/contextApi";
import { Link } from "react-router-dom";
import { categories } from "../utils/constants";

import { SlMenu } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";

import logoYt from "../assets/yt-logo.png";
import NavItem from "./expand-nav-item";

function ExpandNav() {
    const [homecategory, setHomecategory] = useState([]);
    const [exploreCategory, setExploreCategory] = useState([]);
    const [moreYoutubeCate, setMoreYoutubeCate] = useState([]);
    const [cateMenu, setCateMenu] = useState([]);
    const { showExpandNav, setShowExpandNav } = useContext(Context)
    
    useEffect(() => {
        setHomecategory(categories.filter(item => item.type == "homecategory" ? item : ''));
        setExploreCategory(categories.filter(item => item.type == "category" ? item : ''));
        setMoreYoutubeCate(categories.filter(item => item.type == "moreyoutube" ? item : ''));
        setCateMenu(categories.filter(item => item.type == "menu" ? item : ''));
    },[showExpandNav])

    const onHandleShowExpand = () => {
        setShowExpandNav(false)
    }

  return (
    <div className={
        `${showExpandNav == true ? "translate-x-0" : "-translate-x-full"} absolute z-20 left-0 flex top-0 h-full w-full transition-all duration-150`
    }>
        <div className="w-1/5 h-full bg-black text-white overflow-y-scroll">
            <div className="flex sticky top-0 bg-black gap-2 ml-5 py-1 items-center">
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
            <div className="pt-3">
                <div className="nav_top">
                    {
                        homecategory.map((item) => {
                            return(
                                <>
                                    <NavItem key={item.name} {...item} />
                                    {item.name == "Subscriptions" ? <div className="relative -left-3 my-2 bottom-0 w-[106%] border-b-[.5px] border-zinc-800"></div> : ""}
                                </>
                            )
                        })
                    }
                </div>
                <div className="sign_btn pl-7 m-2 py-3 text-[14px] border-y-[.5px] font-bold border-zinc-800">
                    <p>Sign in to like videos, comment, and subscribe.</p>
                    <button 
                        type="button" 
                        className="px-3 py-2 my-2 border border-[#303030] rounded-full text-sky-400 flex items-center justify-center gap-2 text-sm hover:bg-sky-950">
                            <CgProfile className="absolute right-5 md:static text-sky-400 text-xl" />
                            <p className="hidden md:block font-bold" >Sign in</p>
                    </button>
                </div>
                <div className="explore border-b-[.5px] border-zinc-800 mt-4">
                    <p className="font-bold pl-5 text-[16px]">Explore</p>
                    {
                        exploreCategory.map((item) => {
                            return <NavItem key={item.name} {...item} />
                        })
                    }
                </div>
                <div className="more border-b-[.5px] border-zinc-800 mt-4">
                    <p className="font-bold pl-5 text-[16px]">More From YouTube</p>
                    {
                        moreYoutubeCate.map((item) => {
                            return <NavItem key={item.name} {...item} colorText="text-red-500" />
                        })
                    }
                </div>
                <div className="menu">
                    {
                        cateMenu.map((item) => {
                            return <NavItem key={item.name} {...item} />
                        })
                    }
                </div>
                <div className="text_clone border-t-[.5px] flex justify-center w-full border-zinc-800 mt-4">
                    <p className="text-xs font-bold py-3">Clone BY <a className="underline" href="https://github.com/Erzeed" target="_blank" rel="noreferrer">Erzeed</a></p>
                </div>
            </div>
        </div>
        <div className="w-4/5 bg-black opacity-30"></div>
    </div>
  )
}

export default ExpandNav