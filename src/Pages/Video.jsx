import React from "react";
import PlayVideo from "../components/PlayVideo";
import Recommended from "../components/Recommended";
import Sidebar from "../components/Sidebar";
import { useParams } from "react-router-dom";

function Video() {
  const {videoId, categoryId} = useParams()

  return (
    <div className="flex justify-between gap-5 w-[90%]  m-auto flex-wrap xl:flex-nowrap ">
      <PlayVideo videoId={videoId} />
      <Recommended categoryId={categoryId} />
    </div>
  )
}

export default Video;
