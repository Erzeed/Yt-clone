/* eslint-disable react/no-children-prop */
import { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { abbreviateNumber } from "js-abbreviation-number";

import userIcon from "../assets/user.png";
import { CardComment, CardVideo } from "../components";

import { BiDislike } from "react-icons/bi";
import { AiOutlineLike } from "react-icons/ai";
import { PiShareFatThin } from "react-icons/pi";

import getData from "../utils/api";
import { useParams } from "react-router-dom";

//95pWNTBqCVM
function VideoDetail() {
  const [expand, setExpand] = useState(false);
  const [dataComment, setDataComment] = useState();
  const [dataVideo, setDataVideo] = useState();
  const [vidioRecomend, setVideoRecomend] = useState();
  const { id } = useParams();
  const url =
    "https://yt3.ggpht.com/je4eJUDso0BxDhixJzvGpQquDRjzSgpbhQLtGijFV5E3rCa9ZJNoL-rgA9ezYYG82LTpktPQfw=s48-c-k-c0x00ffffff-no-rj";

  const getVideoDetails = async () => {
    await getData
      .videoDetail(id)
      .then((data) => {
        setDataVideo(data);
        setTimeout(() => {
            getVideoComment();
          }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getVideoComment = async () => {
    await getData
      .videoComment(id)
      .then((data) => {
        setDataComment(data);
        setTimeout(() => {
            getVideoSuggestion();
          }, 3000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getVideoSuggestion = async () => {
    await getData
      .videoRecomendation(id)
      .then((data) => {
        setVideoRecomend(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getVideoDetails();
  }, [id]);

  const parseDescription = (description) => {
    // Split the description into lines
    const lines = description.split("\n");
    return lines.map((line, index) => {
      // Check if the line contains a URL
      const urlMatch = line.match(/(https?:\/\/[^\s]+)/);
      if (urlMatch) {
        // If URL found, split the line by the URL to insert the link
        const parts = line.split(urlMatch[0]);

        return (
          <div key={index}>
            {parts[0]}{" "}
            <a
              className="text-blue-600 underline"
              href={urlMatch[0]}
              target="_blank"
              rel="noopener noreferrer"
            >
              {urlMatch[0]}
            </a>{" "}
            {parts[1]}
            <br />
          </div>
        );
      }
      // If no URL, simply return the line
      return (
        <div key={index}>
          {line}
          <br />
        </div>
      );
    });
  };

  const convertDate = (dateTimeString) => {
    const date = new Date(dateTimeString);

    // Get month name
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = monthNames[date.getMonth()];

    // Get day and year
    const day = date.getDate();
    const year = date.getFullYear();

    // Create the formatted date string
    return `${month} ${day}, ${year}`;
  };

  const onClickExpandDesk = () => {
    expand ? setExpand(false) : setExpand(true);
  };

  const updatedVideos = vidioRecomend?.map((item) => ({
    ...item,
    recomment: true,
  }));

  if (dataVideo == undefined) {
    return <p>Loading...</p>;
  }
  return (
    <div className="w-full md:flex px-5 pt-5 h-full text-white">
      <div className="md:w-2/3 h-full">
        <div className="player rounded-lg h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${dataVideo.video_id}`}
            controls
            width="100%"
            height="100%"
            style={{
              backgroundColor: "#000000",
              borderRadius: "20px",
              overflow: "hidden",
              top: 0,
              left: 0,
              objectFit: "cover",
            }}
            playing={true}
            light={true}
          />
        </div>
        <div className="desk-channel my-3">
          <h1 className="text-xl font-extrabold">{dataVideo.title}</h1>
          <div className="desk flex w-full items-center h-[50px] justify-between my-1">
            <div className="chan-icon flex items-center gap-3">
              <img className="h-10 w-10 rounded-full" src={url} alt="" />
              <div className="title">
                <p id={dataVideo.channel_id} className="text-base font-bold">
                  {dataVideo.author}
                </p>
                <p className="text-[12px] font-semibold text-[#AAA]">
                  {abbreviateNumber(dataVideo.number_of_views)} subscribers
                </p>
              </div>
              <button
                className="bg-white rounded-full text-black text-xs font-bold px-4 h-9 cursor-pointer"
                type="button"
              >
                Subscribe
              </button>
            </div>
            <div className="desk-btn flex items-center justify-between w-[35%]">
              <div className="like flex justify-between items-center h-9 bg-zinc-800 rounded-full ">
                <div className="like flex items-center justify-center h-full gap-2 w-20 cursor-pointer hover:rounded-l-full hover:bg-zinc-700">
                  <AiOutlineLike className="text-xl" />
                  <p className="font-bold text-sm">56k</p>
                </div>
                <div className="border border-zinc-700 h-7"></div>
                <div className="unlike flex items-center justify-center h-full w-14 cursor-pointer hover:rounded-r-full hover:bg-zinc-700">
                  <BiDislike className="text-xl" />
                </div>
              </div>
              <div className="share h-9 px-3 flex gap-2 items-center justify-center bg-zinc-800 rounded-full cursor-pointer hover:bg-zinc-700">
                <PiShareFatThin className="text-xl" />
                <p className="font-bold text-sm">Share</p>
              </div>
              <p className="text-xl text-center h-9 w-9 bg-zinc-800 rounded-full cursor-pointer hover:bg-zinc-700">
                ...
              </p>
            </div>
          </div>
        </div>
        <div className="desk-video bg-zinc-800 rounded-xl p-2 hover:bg-zinc-700">
          <div className="desktitle flex gap-2 text-sm font-bold">
            <p>{`${abbreviateNumber(dataVideo.number_of_views, 2)} views`}</p>
            <p>{convertDate(dataVideo.published_time)}</p>
          </div>
          <div
            className={`${
              expand ? "h-fit" : "max-h-[80px] truncate"
            } whitespace-pre-line text-sm font-semibold`}
          >
            <p>{parseDescription(dataVideo.description)}</p>
          </div>
          <button onClick={onClickExpandDesk} className="text-sm" type="button">
            {expand ? "show less" : "...more"}
          </button>
        </div>
        {dataComment !== undefined ? (
          <div className="comment text-white p-2 mt-4">
            <p className="font-extrabold text-lg">{`${dataComment.total_number_of_comments.toLocaleString()} Comments`}</p>
            <div className="input flex my-3 gap-2 h-15 w-full">
              <img className="h-10 w-10" src={userIcon} alt="user icon" />
              <input
                className="w-full bg-black border-b h-7 placeholder-[#AAA] font-semibold text-sm border-[#AAA] focus:outline-none"
                type="text"
                name="input"
                id="comment"
                placeholder="Add a comment..."
              />
            </div>
            <div className="comment-container w-full mb-2 mt-10">
              {dataComment &&
                dataComment.comments.map((item) => (
                  <CardComment key={item.id} {...item} />
                ))}
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="suggestion md:w-1/3 px-4">
        {vidioRecomend !== undefined ? 
            (updatedVideos.map((item) => (
                <CardVideo key={item.video_id} {...item} />
          ))) : (<p>Loading...</p>)
        }
      </div>
    </div>
  );
}

export default VideoDetail;
