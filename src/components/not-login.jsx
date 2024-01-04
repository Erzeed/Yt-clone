import { BsCollectionPlay } from "react-icons/bs";
import { BiSolidVideos } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { useLocation } from "react-router-dom";
import { PiClockCounterClockwise } from "react-icons/pi";

function NotLogin({title, desc, icon}) {
    let location = useLocation();
    const path  = location.pathname.slice(1)
    
    return (
        <div className="flex flex-col gap-3 justify-center items-center text-white w-full">
            <div className="icon text-9xl">
                {
                    path == "subscriptions" ? (
                        <BsCollectionPlay />
                    ) : path == "you" ? (
                        <BiSolidVideos />
                    ) : (
                        <PiClockCounterClockwise />
                    )
                }
            </div> 
            <h1 className="text-2xl font-semibold" >{title}</h1>
            <p className="text-sm tracking-tight" >{desc}</p>
            <button 
                type="button" 
                className="h-10 w-28 md:border border-[#303030] rounded-full text-sky-400 flex items-center justify-center gap-2 text-sm hover:bg-sky-950">
                    <CgProfile className="absolute md:static text-white md:text-sky-400 text-2xl" />
                    <p className="hidden md:block font-bold" >Sign in</p>
            </button>
        </div>
    )
}

export default NotLogin