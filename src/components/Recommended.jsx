import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Recommended({categoryId}) {
    const [apiData, setApiData] = useState([]);

    const fetctData = async () => {
        const recommend_video_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=US&videoCategoryId=${categoryId}&key=${import.meta.env.VITE_API_KEY}`
        try {
            const response = await fetch(recommend_video_url)
            const data = await response.json()
            setApiData(data.items)
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetctData()
    }, [])
    
    
  const value_converter = (value) => {
    if (value >= 1000000) {
      return Math.floor(value / 1000000) + "M";
    } else if (value >= 1000) {
      return Math.floor(value / 1000) + "K";
    } else {
      return value;
    }
  };



  return(
    <div className="w-[25%] basis-[25%] aspect-video flex-grow py-8 flex-shrink-0">
    {apiData.map((item, index) => {
        return (
            <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="flex gap-3 mb-4 flex-shrink-0">
            <img className="w-[35%] shadow-gray-800 shadow-2xl rounded" src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="">
                <h4>{item.snippet.title.length >= 60 ? `${item.snippet.title.slice(0,60)}...` : item.snippet.title}</h4>
                <p className="text-gray-300 text-sm font-light mt-2">{item.snippet.channelTitle}</p>
                <p className="text-gray-300 text-sm font-light">{value_converter(item.statistics.viewCount)} views</p>
            </div>
        </Link>
        )
    })}
    </div>
  )
}

export default Recommended;
