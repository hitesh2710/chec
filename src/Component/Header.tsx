import React from "react";
import { useNavigate } from "react-router";
function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="
        bg-gray-400
        h-[10vh]
        w-[100vw]
        text-[#00264D]
        text-center
        p-2
        text-[5vh]
"
      >
        Taiyo.AI
      </div>
      <div className="flex flex-row ">
        <div
          className="
            bg-gray-200
            text-[#0052A2]
            h-[90vh]
            w-[21vw]
            gap-[0px]
            opacity-[0px]
            text-center
"
        >
          <div
            className="h-[10vh] b-1
            w-[19vw] bg-gray-300 p-3 m-2 rounded-lg 
            hover:bg-gray-400 cursor-pointer transition duration-200"
            onClick={() => navigate("/")}
          >
            Dashboard
          </div>
          <div
            className="h-[10vh]
            w-[19vw] bg-gray-300 border-2 p-3 m-2 rounded-lg 
            hover:bg-gray-400 cursor-pointer transition duration-200"
            onClick={() => navigate("/contact")}
          >
            Contact
          </div>
          <div
            className="h-[10vh]
            w-[19vw] bg-gray-300 border-2 p-3 m-2 rounded-lg 
            hover:bg-gray-400 cursor-pointer transition duration-200"
            onClick={() => navigate("/chart_map")}
          >
            Charts and Maps
          </div>
          <div
            className=" absolute bottom-0 h-[10vh] text-center 
            w-[19vw] bg-gray-300 border-2 border-gray-400 p-3 m-2 rounded-lg"
          >
            Hiteshwarm Dubey
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
