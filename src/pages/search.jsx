import { useParams } from "react-router-dom";
import { CardVideo } from "../components";
import { useEffect, useState } from "react";
import getData from "../utils/api";

function Search() {
  const [dataSearch, setDataSearch] = useState();
  const { searchQuery } = useParams();

  useEffect(() => {
    const getDataSearch = async () => {
      await getData.searchVideo(searchQuery).then(data => {
        setDataSearch(data)
      }).catch(err => {
        console.log(err)
      });
    }
    getDataSearch()
  }, [searchQuery])

  const updateSearch = dataSearch?.map(item => ({
    ...item,
    search: true,
  }))
  
  return (
    <div className="text-white px-6 pt-3 w-full overflow-y-scroll">
      <div className="card-container flex flex-col items-center w-full">
        {
          dataSearch && (
            updateSearch.map(item => (
              <CardVideo key={item.video_id} {...item} />
            ))
          )
        }
      </div>
    </div>
  )
}

export default Search;