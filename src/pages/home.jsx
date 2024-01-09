import { Suspense, lazy, useContext, useEffect, useState } from "react";
import { Context } from "../context/contextApi";

import { RiArrowRightSLine } from "react-icons/ri";
// const CardVideo = lazy(() => import("../components/card-video"))
import CardVideo from "../components/card-video";
import getData from "../utils/api";
import CardSkeleton from "../components/skeleton/card-skeleton";

function Home() {
  const [ dataVideo, setDataVideo] = useState();
  const { setLoading } = useContext(Context);
  
  useEffect(() => {
    const getDataVideo = async () => {
      setLoading(true)
      await getData.videoRecomendation('vMGI2EA3OWc').then(resp => {
        setDataVideo(resp)
        console.log(resp);
        setLoading(false)
      }).catch(err => {
        console.log(err.code)
      })
    }
    getDataVideo();

  }, [])

  return (
    <div className="w-full px-5 my-2 overflow-y-scroll">
      <div className="home-rec-cate sticky bg-black top-0 flex items-center h-[50px] w-full z-10">
          <div className="card-container flex items-center gap-2 w-full">
            <div className="card flex items-center justify-center text-white rounded-lg w-fit px-3 h-8 bg-zinc-800 cursor-pointer">
              <p className="text-sm font-bold" >All</p>
            </div>
            <div className="card flex items-center justify-center text-white rounded-lg w-fit px-3 h-8 bg-zinc-800 cursor-pointer">
              <p className="text-sm font-bold" >Music</p>
            </div>
          </div>
          <div className="arrow absolute right-0 bg-gradient-to-l from-black from-60% w-20 flex items-center justify-end">
            <div className=" hover:bg-zinc-800 rounded-full cursor-pointer p-2 text-center">
              <RiArrowRightSLine className="text-white text-2xl" />
            </div>
          </div>
      </div>
      <div className="home-rec-video grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 pt-5">
        { dataVideo !== undefined ? 
          (dataVideo.map((item) => (
            <CardVideo
                  key={item.video_id}
                  {...item}
              />
          ))) : (
            Array.from({ length: 10 }).map((_, index) => (
              <CardSkeleton key={index} /> // or provide a unique key as per your requirement
            ))
          )
        }
      </div>
    </div>
  )
}

export default Home