import { Suspense, lazy, useEffect, useState } from "react"
// import { Player } from "../components"
const Player = lazy(() => import("../components/short-player"))
import getData from "../utils/api";

function Shorts() {
    const [dataVideos ,setDataVideos] = useState([]);

    useEffect(() => {
        const getDataVideos = async () => {
            await getData.dataShort().then(data => {
                setDataVideos(data)
            }).catch(err => {
                console.log(err)
            })
        }
        getDataVideos();
    }, [])
  return (
    <div className=" flex flex-col gap-5 w-full overflow-y-scroll snap-y">
        <Suspense fallback={<div className="text-white">Loading...</div>}>
            {
                dataVideos && (
                    dataVideos.map(data => (
                        <Player key={data.video_id} id={data.video_id} />
                    ))
                )
            }
        </Suspense>
    </div>
  )
}

export default Shorts