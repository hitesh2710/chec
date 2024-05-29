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
        text-[#00264D]
        text-center
        p-2
        w-[auto]
        text-[4vh]
"
      >
        Taiyo.AI
      </div>
      <div className="flex md:flex-row flex-col md:h-[90vh] ">
        <div
          className="
            bg-gray-200
            text-[#0052A2]
            h-[50vh]
            md:w-[21vw]
            w-full
            gap-[0px]
            text-center
"
        >
          <div
            className="h-[10vh] b-1
            md:w-[19vw] w-[98] bg-gray-300 p-3 m-2 rounded-lg 
            hover:bg-gray-400 cursor-pointer transition duration-200"
            onClick={() => navigate("/")}
          >
            Dashboard
          </div>
          <div
            className="h-[10vh]
            md:w-[19vw] w-[98vw] bg-gray-300 border-2 p-3 m-2 rounded-lg 
            hover:bg-gray-400 cursor-pointer transition duration-200"
            onClick={() => navigate("/contact")}
          >
            Contact
          </div>
          <div
            className="h-[10vh]
            md:w-[19vw] w-[98vw] bg-gray-300 border-2 p-3 m-2 rounded-lg 
            hover:bg-gray-400 cursor-pointer transition duration-200"
            onClick={() => navigate("/chart")}
          >
            Charts
          </div>
          <div
            className="h-[10vh]
            md:w-[19vw] w-[98vw] bg-gray-300 border-2 p-3 m-2 rounded-lg 
            hover:bg-gray-400 cursor-pointer transition duration-200"
            onClick={() => navigate("/map")}
          >
            Maps
          </div>
          <div
            className=" absolute bottom-0 h-[10vh] text-center 
            md:w-[19vw] max-md:opacity-0 bg-gray-300 border-2 border-gray-400 p-3 m-2 rounded-lg"
          >
            Hiteshwarm
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
