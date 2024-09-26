import React, { useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import "remixicon/fonts/remixicon.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Landingpage = ({isclicked,flag,setflag}) => {

    const top = useRef(null);
    const bottom = useRef(null);
    const loadpage = useRef(null);

    if(flag){
      gsap.to(loadpage.current,{
          top:"-20vh",
          duration:1.5,
          ease: "power3.in"
      })
  }

  if(!flag){
      gsap.to(loadpage.current,{
          top:0,
          duration:1.5,
          ease: "power3.in"
      })
  }

    useGSAP(() => {
        const tl = gsap.timeline();
        
        // Adjust the delay to account for the Loading animation
        tl.to(top.current, {
          delay: 1.4,
          duration : 1,
          y: "0%",
          rotate:0,
          ease: "expo,in",
        });
        tl.to(bottom.current, {
            opacity:1,
            duration:.5
        })
      }); // Ensure useEffect runs only once after component mounts


  return (
    <div ref={loadpage} className="absolute top-0 left-0 bg-[url(https://images.prismic.io/arock-website-2023/d4147892-cb03-4582-af32-326bb109803f_AROCK-_1502.jpg?fm=webp&q=100&fit=crop)] bg-cover bg-center w-full h-screen text-white">
      <div className="absolute z-10 nav w-full h-[2.8vw] py-7 px-4  flex justify-between items-center">
        <img className="w-[3.4vw] h-[3.4vw]" src={logo} alt="" />

        <a onClick={() => isclicked(true,loadpage)} href="#" className="font-[a4] text-[8px]">
          MENU
        </a>
      </div>

      <div className="hero w-full h-[44.8vw] flex items-center justify-center">
        <div>
          <h1 className="text-[20.6vw] font-[u8] mt-14 leading-[0.8] overflow-hidden">
            <span ref={top} className="inline-block translate-y-[100%] rotate-[20deg] origin-bottom-left">AROCK</span>
          </h1>

          <div ref={bottom} className="opacity-0">
            <div className="flex justify-between font-[a4] text-[11px] font-lg">
              <div className="flex items-center gap-3">
                <i className="ri-play-circle-line text-4xl font-lighter"></i>
                <h1>
                  PLAY <br /> THE FILM
                </h1>
              </div>
              <div className="flex justify-between gap-20">
                <h1>
                  CREATOR <br /> CURATOR
                </h1>
                <h1>
                  NEW YORK
                  <br />
                  LOS ANGELES
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
