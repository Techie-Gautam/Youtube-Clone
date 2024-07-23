import React, { useState } from "react";
import Navbar from "./components/Navbar";
import {Routes, Route} from 'react-router-dom'
import Home from "./Pages/Home";
import Video from "./Pages/Video"
import Sidebar from "./components/Sidebar";
function App() {
  const [extendSidebar, setExtendSidebar] = useState(false);
  

  return (
    <main className="w-full min-h-screen bg-bgColor text-white ">
     <Navbar setExtendSidebar={setExtendSidebar} />
     <Routes>
        <Route path="/" element={<Home extendSidebar={extendSidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video extendSidebar={extendSidebar} />} />
     </Routes>
    </main>
  )
}

export default App;
