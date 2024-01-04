import ReactPlayer from "react-player"

import { BiSolidDislike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidCommentDetail } from "react-icons/bi";
import { PiShareFatFill } from "react-icons/pi";


function Shorts() {
  return (
    <div className="text-white flex justify-center w-full h-full">
        <div className="video w-80 h-full  bg-orange-200">
            <ReactPlayer 
                url={`https://www.youtube.com/shorts/HANEARC7nGA`}
                controls
                width="100%"
                height="100%"
                playing={true}
            />
        </div>
        <div className="video-feature">
            <p>feature</p>
        </div>
    </div>
  )
}

export default Shorts