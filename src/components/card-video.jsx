/* eslint-disable react/prop-types */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

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
  search = false,
  description,
}) {
  const cekStyle = () => {
    if (recomment) {
      return "flex h-[100px] gap-2";
    } else if (search) {
      return "flex gap-4 h-[200px] w-full";
    }
  };

  const url =
    "https://yt3.googleusercontent.com/ytc/AIf8zZQxo7UAlRLe9AYd_Cx6tlB__T8jKEORYEq_Ae4-aA=s48-c-k-c0x00ffffff-no-rj";

  return (
    <Link
      className={`${search ? "w-11/12" : "w-full"}`}
      to={`/watch/${video_id}`}
    >
      <div
        id={video_id}
        className={`${cekStyle()} h-64 rounded-xl cursor-pointer mb-5`}
      >
        <div
          className={`${
            recomment ? "w-2/4" : search ? "h-full" : "h-3/5"
          } thumbnail text-white`}
        >
          <div className={`${search && "w-[320px]"} thumb-img relative h-full`}>
            <img
              className={`${
                search == true ? "w-full" : "w-full"
              } bg-auto h-full rounded-lg lazyload`}
              data-src={thumbnails[1]?.url}
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
              recomment || search ? "hidden" : "block"
            } channel-thumb h-8 min-w-8`}
          >
            <img
              className="bg-cover rounded-full w-8 h-8"
              src={url}
              alt="channel"
            />
          </div>
          <div className="channel-detai">
            <p
              className={`font-bold h-10 w-full text-wrap text-sm tracking-tight truncate`}
            >
              {title}
            </p>
            <div className={search && "flex flex-col-reverse"}>
              <div
                id={channel_id}
                className={`nama-channel text-xs text-[#AAA] flex items-center gap-2 my-2 w-fit font-semibold tracking-tighter antialiased`}
              >
                <img
                  className={`${
                    search == true ? "flex" : "hidden"
                  } h-7 w-7 bg-cover rounded-full`}
                  src={url}
                  alt="channel"
                />
                <p>{author}</p>
              </div>
              <div
                className={`${
                  recomment ? "text-xs mt-1" : "text-xs"
                } video-views flex items-center gap-1 text-[#AAA] font-semibold`}
              >
                <p>{`${abbreviateNumber(number_of_views)} views`}</p>
                <div className="h-1 w-1 rounded-full bg-[#AAA]"></div>
                <p>{published_time}</p>
              </div>
            </div>
            <div className="desc text-xs text-[#AAA] w-full h-10 truncate mt-1 font-semibold">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardVideo;
