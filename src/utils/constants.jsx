import { AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdOutlineSubscriptions } from "react-icons/md";
import { PiMusicNoteLight, PiFilmSlate, PiClockCounterClockwise } from "react-icons/pi";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { GoTrophy, GoHome } from "react-icons/go";
import { SiYoutubegaming, SiYoutubeshorts, SiYoutubemusic } from "react-icons/si";
import { RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import { BiSolidVideos } from "react-icons/bi";
import { GrYoutube } from "react-icons/gr";
import { TbBrandYoutubeKids } from "react-icons/tb";

export const categories = [
    { name: "Trending", icon: <MdLocalFireDepartment />, type: "category" },
    { name: "Music", icon: <PiMusicNoteLight />, type: "category" },
    { name: "Movies", icon: <PiFilmSlate />, type: "category" },
    { name: "Gaming", icon: <SiYoutubegaming />, type: "category" },
    { name: "News", icon: <HiOutlineNewspaper />, type: "category" },
    { name: "Sports", icon: <GoTrophy />, type: "category" },

    { name: "Settings", icon: <FiSettings />, type: "menu" },
    { name: "Report History", icon: <AiOutlineFlag />, type: "menu" },
    { name: "Help", icon: <FiHelpCircle />, type: "menu" },
    { name: "Send feedback", icon: <RiFeedbackLine />, type: "menu" },

    { name: "Home", icon: <GoHome />, type: "homecategory" },
    { name: "Shorts", icon: <SiYoutubeshorts />, type: "homecategory" },
    { name: "Subscriptions", icon: <MdOutlineSubscriptions />, type: "homecategory" },
    { name: "You", icon: <BiSolidVideos />, type: "homecategory" },
    { name: "History", icon: <PiClockCounterClockwise />, type: "homecategory" },

    { name: "YouTube Premium", icon: <GrYoutube />, type: "moreyoutube" },
    { name: "YouTube Music", icon: <SiYoutubemusic />, type: "moreyoutube" },
    { name: "YouTube Kids", icon: <TbBrandYoutubeKids />, type: "moreyoutube" },
];