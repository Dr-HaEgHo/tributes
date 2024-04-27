import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[30vh] bg-primaryTrans10 flex items-center justify-between relative z-0">
      <div className="absolute w-full h-full top-0 bg-orange-300 overflow-hidden">
        <img
          className="w-full bottom-0"
          src="https://img.freepik.com/premium-photo/sun-rays-breaking-through-clouds-mountains_198067-325843.jpg?w=1380"
          alt="background"
        />
      </div>
      <div className="l-container relative w-full h-full">
        <div className="w-full h-72 z-10 absolute top-1/3 flex items-end gap-6">
          <div className="w-72 h-72 bg-primary border-2 border-white rounded-lg">
            <img src="" alt="show Image" />
          </div>
          <div>
            <h1 className="text-6xl font-medium text-primary2">Herbert Onyewumbu Wigwe</h1>
            <p>1966 - 2024</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
