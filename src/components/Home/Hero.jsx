import React from "react";
import char from "../../photos/download (3).png";
import "./style.css";
function Hero() {
  return (
    <div id="Hero" className="bg-black relative">
      <div className="container mx-auto pt-20 px-3 ">
        <section className="lg:flex h-screen justify-center lg:items-center lg:gap-x-[10%] ">
          <div className="lg:w-2/4 sora">
            <div className="relative lg:h-[40rem] h-[500px] lg:w-2/4 mx-auto">
              <img
                src={char}
                alt="Pharaoh Character"
                className="absolute w-full h-full object-contain lg:-top-20 lg:-left-8 lg:scale-150 sora "
            />
            </div>
          </div>
          <div className="relative text-white lg:w-2/4 flex flex-col justify-center items-center lg:items-start sm:mt-10 sora">
            <h1 className="text-4xl lg:text-5xl font-bold transform lg:scale-150 text-center lg:text-left">
              You Probably Didn't Know About Ancient <span className="text-[#F3CA52]">Egypt</span>
            </h1>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Hero;
