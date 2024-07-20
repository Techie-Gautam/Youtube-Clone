import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";


function Home({extendSidebar}) {
  const [category, setCategory] = useState(0);
  

  return (
    <main className="flex">
      <Sidebar extendSidebar={extendSidebar} category={category} setCategory={setCategory} />
      <Feed category={category} />
    </main>
  );
}

export default Home;
