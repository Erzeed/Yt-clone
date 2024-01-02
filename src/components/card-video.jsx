/* eslint-disable react/prop-types */

import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";

function CardVideo({
  author,
  video_id,
  title,
  channel_id,
  published_time,
  video_length,
  thumbnails,
  number_of_views,
  recomment = false,
}) {
  const onCutText = (text, numb) => {
    return text.length > numb ? `${text.slice(0, numb)}...` : text;
  };

  const url =
    "https://yt3.googleusercontent.com/ytc/AIf8zZQxo7UAlRLe9AYd_Cx6tlB__T8jKEORYEq_Ae4-aA=s48-c-k-c0x00ffffff-no-rj";

  return (
    <Link to={`/watch/${video_id}`}>
      <div
        id={video_id}
        className={`${
          recomment && "flex h-[100px] gap-2"
        } h-64 rounded-xl cursor-pointer mb-5`}
      >
        <div
          className={`${recomment ? "w-2/5" : "h-3/5"} thumbnail text-white`}
        >
          <div className="thumb-img relative h-full">
            <img
              className="bg-cover h-full w-full rounded-lg"
              src={thumbnails[1]?.url}
              alt="boboboiy"
            />
            <div className="thumb-duration absolute text-xs font-bold right-1 bottom-0 rounded px-1 bg-black">
              <p>{video_length}</p>
            </div>
          </div>
        </div>
        <div
          className={`${
            recomment ? "w-3/5" : "h-2/5 py-4"
          } detail-video flex gap-2 text-white`}
        >
          <div
            className={`${
              recomment ? "hidden" : "block"
            } channel-thumb h-9 w-9`}
          >
            <img className="bg-cover rounded-full" src={url} alt="channel" />
          </div>
          <div className="channel-detai">
            <p className={`${
                recomment ? "text-sm" : "text-base"
              } font-bold`}>{onCutText(title, 40)}</p>
            <div
              id={channel_id}
              className={`${
                recomment ? "text-xs" : "text-sm"
              } nama-channel text-[#AAA] flex items-center gap-2 w-fit font-semibold pt-1`}
            >
              <p>{author}</p>
              {/* <BsFillCheckCircleFill className={`${
                    badges[0]?.type === "VERIFIED_CHANNEL" ? "" : "hidden"
                  } text-xs`} 
                /> */}
            </div>
            <div className={`${
                recomment ? "text-xs mt-1" : "text-sm"
              } video-views flex items-center gap-1 text-[#AAA] font-semibold`}>
              <p>{`${abbreviateNumber(number_of_views)} views`}</p>
              <div className="h-1 w-1 rounded-full bg-[#AAA]"></div>
              <p>{published_time}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardVideo;
