import React from "react";
import {useNavigate} from 'react-router'
function Dashboard() {
    const navigate=useNavigate();
  return (
   
     <div className=" md:w-[79vw] md:h-[90vh] md:text-center md:absolute md:top-[10vh] md:left-[21vw]
      bg-white-300 md:border-2 md:border-gray-400 md:p-[40vh]  md:text-[4vh] p-[6vh] w-[98vw] absolute top-[60vh] text-[5vh] text-center h-auto ">Hello, Welcome to Taiyo.ai</div>
    
  );
}

export default Dashboard;
