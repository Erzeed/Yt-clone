import ReactPlayer from "react-player";

import { BiSolidDislike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidCommentDetail } from "react-icons/bi";
import { PiShareFatFill } from "react-icons/pi";

function Player({ id }) {
  return (
    <div className="container w-full flex justify-center items-center snap-center bg-black">
      <div className="video w-80 h-[80vh]">
        <ReactPlayer
          url={`https://www.youtube.com/shorts/${id}`}
          className='lazyload'
          controls
          width="100%"
          height="100%"
          frameborder="0" 
          style={{
            backgroundColor: "#000000",
            borderRadius: "20px",
            overflow: "hidden",
            top: 0,
            left: 0,
            objectFit: "cover",
          }}
        />
      </div>
      <div className="video-feature flex flex-col justify-end gap-4 ml-5 w-[55px] h-full">
        <div className="card flex flex-col justify-center w-full items-center gap-2">
          <div className="icon p-3 rounded-full bg-zinc-800 hover:bg-zinc-700 cursor-pointer">
            <BiSolidLike className="text-white text-2xl" />
          </div>
          <p className="text-sm font-semibold">2.9M</p>
        </div>
        <div className="card flex flex-col justify-center w-full items-center gap-2">
          <div className="icon p-3 rounded-full bg-zinc-800 hover:bg-zinc-700 cursor-pointer">
            <BiSolidDislike className="text-white text-2xl" />
          </div>
          <p className="text-sm font-semibold">Dislike</p>
        </div>
        <div className="card flex flex-col justify-center w-full items-center gap-2">
          <div className="icon p-3 rounded-full bg-zinc-800 hover:bg-zinc-700 cursor-pointer">
            <BiSolidCommentDetail className="text-white text-2xl" />
          </div>
          <p className="text-sm font-semibold">16K</p>
        </div>
        <div className="card flex flex-col justify-center w-full items-center gap-2">
          <div className="icon p-3 rounded-full bg-zinc-800 hover:bg-zinc-700 cursor-pointer">
            <PiShareFatFill className="text-white text-2xl" />
          </div>
          <p className="text-sm font-semibold">Share</p>
        </div>
        <div className="card flex justify-center items-center rounded-full h-[50px] w-[50px] bg-zinc-800 hover:bg-zinc-700 cursor-pointer">
          <p className="text-xl font-semibold pb-2">...</p>
        </div>
      </div>
    </div>
  );
}

export default Player;
