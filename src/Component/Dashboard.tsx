import React from "react";
import {useNavigate} from 'react-router'
function Dashboard() {
    const navigate=useNavigate();
  return (
   
     <div className=" w-[79vw] h-[90vh] text-center absolute top-[10vh] left-[21vw]
             bg-white-300 border-2 border-gray-400 p-[40vh]  text-[4vh]">Hello, Welcome to Taiyo.ai</div>
    
  );
}

export default Dashboard;
