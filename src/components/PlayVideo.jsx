import React, { useEffect, useState } from "react";
import video from "../assets/Batman.mp4";
import avatar from "../assets/avatar.png";
import { BiLike, BiDislike } from "react-icons/bi";
import { PiShareFatLight } from "react-icons/pi";
import { GiSaveArrow } from "react-icons/gi";
import moment from "moment";
import { useParams } from "react-router-dom";

function PlayVideo() {
  const {videoId} = useParams()

  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [comments, setComments] = useState([]);

  const value_converter = (value) => {
    if (value >= 1000000) {
      return Math.floor(value / 1000000) + "M";
    } else if (value >= 1000) {
      return Math.floor(value / 1000) + "K";
    } else {
      return value;
    }
  };

  const fetchVideoData = async () => {
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${import.meta.env.VITE_API_KEY}`;
    try {
      const response = await fetch(videoDetails_url);
      const jsonResponse = await response.json();
      setApiData(jsonResponse.items[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchChannelData = async () => {
    const channelDetails_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${import.meta.env.VITE_API_KEY}`;
    try {
      const response = await fetch(channelDetails_url);
      const jsonResponse = await response.json();
      setChannelData(jsonResponse.items[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCommentData = async () => {
    const comments_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${import.meta.env.VITE_API_KEY}`;
    try {
      const response = await fetch(comments_url);
      const jsonResponse = await response.json();
      setComments(jsonResponse.items);
      console.log(jsonResponse);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    fetchChannelData();
    fetchCommentData();
  }, [apiData]);

  return (
    <div className="w-[75%] basis-[100%] min-h-screen py-8 flex-grow overflow-hidden">
      {/* <video className="shadow-gray-800 shadow-2xl rounded-2xl" src={video} controls autoPlay muted></video> */}
      <iframe
        className="w-[100%] md:h-[80vh] h-[50vh] shadow-gray-800 shadow-2xl rounded-2xl"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h3 className="text-2xl font-semibold py-4">
        {apiData ? apiData.snippet.title : "Title Here"}
      </h3>
      <div className="flex flex-col md:flex-row md:items-center items-start justify-between pb-3">
        <p className="text-sm text-gray-300">
          {apiData ? value_converter(apiData.statistics.viewCount) : "0"} Views
          &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
        </p>
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-2 text-xl cursor-pointer">
            <BiLike />{" "}
            {apiData ? value_converter(apiData.statistics.likeCount) : 0}
          </span>
          <span className="flex items-center gap-2 text-xl cursor-pointer">
            <BiDislike />
          </span>
          <span className="flex items-center gap-2 text-xl cursor-pointer">
            <PiShareFatLight /> Share
          </span>
          <span className="flex items-center gap-2 text-xl cursor-pointer">
            <GiSaveArrow /> Download
          </span>
        </div>
      </div>
      <hr />
      <div className="flex items-center py-4 gap-3 w-full">
        <img
          className="w-10 rounded-full"
          src={channelData ? channelData.snippet.thumbnails.default.url : ""}
          alt=""
        />
        <div>
          <p className="font-semibold">
            {apiData ? apiData.snippet.channelTitle : ""}
          </p>
          <span className="text-sm text-gray-300 font-medium">
            {channelData
              ? value_converter(channelData.statistics.subscriberCount)
              : "0"}{" "}
            Subcribers
          </span>
        </div>
        <button className="ml-20 px-4 py-2 bg-white text-black font-medium rounded-full hover:bg-gray-200">
          Subscribe
        </button>
      </div>

      <div className="pl-[50px]">
        <p className="text-gray-300 py-1">
          {apiData
            ? apiData.snippet.description.slice(0, 250)
            : "Description here"}
        </p>
        <hr />
        <h4 className="font-semibold text-xl py-5">
          {apiData ? value_converter(apiData.statistics.commentCount) : "0"} Comments
        </h4>
        {comments.map((item, index) => {
          return (
            <div key={index} className="flex items-start gap-5 py-5">
              <img className="w-10 rounded-full" src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
              <div>
                <p className="font-semibold">
                 {item.snippet.topLevelComment.snippet.authorDisplayName}
                  <span className="text-sm font-light text-gray-300 ml-2">
                    1 day ago
                  </span>
                </p>
                <p className="text-gray-300 overflow-hidden text-sm md:text-lg  break-words w-full">
                 {item.snippet.topLevelComment.snippet.textDisplay}
                </p>
                <div className="flex items-center gap-2 text-xl py-2">
                  <BiLike />
                  <span className="text-sm">{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                  <BiDislike className="ml-2" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PlayVideo;
