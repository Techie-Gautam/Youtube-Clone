import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Feed({category}) {
    const [data, setData] = useState([]);


    const value_converter = (value) => {
        if (value >= 1000000 ) {
            return Math.floor(value/1000000)+"M"
        } else if(value >= 1000) {
            return Math.floor(value/1000)+"K"
        } else {
            return value
        }
    }

    const fetchData = async () => {
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${import.meta.env.VITE_API_KEY}`
        
        try {
            const response = await fetch(videoList_url)
            const jsonResponse = await response.json()
            setData(jsonResponse.items)
            console.log(jsonResponse);
        } catch (error) {
            console.log(error);
        }
        console.log(data);
    }

    useEffect(() => {
        fetchData()
    }, [category])
    




  return (
    <section className="w-full grid grid-cols-grid-cols-auto-fit gap-x-5 gap-y-10 mt-3  overflow-hidden px-8">
       {data.map((item, index) => {
        return (
         <Link key={index} to={`video/${item.snippet.categoryId}/${item.id}`} className="h-fit">
            <img className="w-full object-cover rounded-xl" src={item.snippet.thumbnails.medium.url} alt="" />
            <h2 className="font-semibold p-2">
              {item.snippet.title.length >= 60 ? `${item.snippet.title.slice(0, 60)}...` : item.snippet.title}
            </h2>
            <h3 className="px-2 text-sm  text-gray-300">{item.snippet.channelTitle}</h3>
            <p className=" px-2 text-sm  text-gray-300">{value_converter(item.statistics.viewCount)} &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
         </Link>
        )
       })}
    </section>
  )
}

export default Feed;
