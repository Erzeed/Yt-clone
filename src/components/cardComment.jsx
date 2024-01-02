/* eslint-disable react/prop-types */
import { TiArrowSortedDown } from "react-icons/ti";
import { BiDislike } from "react-icons/bi";
import { AiOutlineLike } from "react-icons/ai";

function CardComment({ author_name, published_time, text, like_count, number_of_replies, thumbnails }) {

  return (
    <div className="comment-card flex gap-2 text-[#F1F1F1] mb-5">
      <img className="h-10 w-10 rounded-full" src={thumbnails[0].url} alt="profile" />
      <div className="detail">
        <div className="detailname flex items-center gap-1">
          <p className="text-[13px] tracking-tighter font-bold">
            {author_name}
          </p>
          <p className="text-xs text-[#AAA]">
            {published_time}
          </p>
        </div>
        <div className="detailcontent tracking-tighter text-sm font-bold py-2">
          <p>{text}</p>
        </div>
        <div className="detailicon flex items-center gap-3">
          <div className="iconlike flex gap-1">
            <AiOutlineLike className="text-lg" />
            <p className="text-xs text-[#AAA] font-semibold">
              {like_count}
            </p>
          </div>
          <BiDislike className="text-lg" />
          <p className="text-xs font-bold">Reply</p>
        </div>
        <div className="numberreply flex items-center mt-3 font-bold  text-blue-500 text-sm gap-2">
            {
                number_of_replies && (
                    <>
                        <TiArrowSortedDown className="text-lg" />
                        <p>{number_of_replies} replies</p>
                    </>
                )
            }
        </div>
      </div>
    </div>
  );
}

export default CardComment;
