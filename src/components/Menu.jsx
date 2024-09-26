import React, { useRef } from "react";
import { Tilt } from "react-tilt";
import logo from "../assets/logo.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Menu = ({ flag, setflag }) => {
  const menupage = useRef(null);

  if (flag) {
    gsap.to(menupage.current, {
      display: "block",
      top: 0,
      duration: 1.5,
      ease: "power3.in",
    });
  }

  if (!flag) {
    gsap.to(menupage.current, {
      display: "none",
      top: "100vh",
      duration: 1.5,
      ease: "power3.in",
    });
  }

  return (
    <div
      ref={menupage}
      className="hidden z-30 absolute top-[100vh] w-full h-screen bg-[#1A1A1A]"
    >
      <div className="flex w-[100%] h-[100%] overflow-hidden">
        <div className="p-24 w-2/3 h-full">
          <Tilt className="left w-[100%] h-[100%] p-12 relative">
            <img
              className="w-full h-full absolute top-0 left-0 scale-100 opacity-85 object-cover"
              src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop"
              alt=""
            />
            <img
              className="w-full h-full absolute top-0 left-0 scale-95 opacity-65 object-cover "
              src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop"
              alt=""
            />
            <img
              className="w-full h-full absolute top-0 left-0 scale-75 opacity-55 object-cover "
              src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop"
              alt=""
            />
            <img
              className="w-full h-full absolute top-0 left-0 scale-110 opacity-60 object-cover "
              src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop"
              alt=""
            />
            <img
              className="w-full h-full absolute top-0 left-0 scale-125 opacity-30 object-cover "
              src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop"
              alt=""
            />
          </Tilt>
        </div>
        <div className="right h-full w-1/3 text-white pl-28 pr-4 py-4">
          <div className="flex  items-center justify-end font-[a4] text-[8px]">
            <h1 onClick={() => setflag(false)}>CLOSE</h1>
          </div>

          <img
            className="w-[3.6vw] h-[3.6vw] mt-4 object-cover"
            src={logo}
            alt=""
          />

          <a
            className="text-[2.2vw] leading-none font-[u8] block mt-24 w-[14vw] h-[2vw] overflow-hidden  relative group"
            href=""
          >
            <span className="block absolute top-0 left-0 transition-all duration-500 ease-in-out group-hover:top-[-100%] ">
             ABOUT
            </span>
            <span className="block absolute top-[100%] left-0 transition-all duration-500 ease-in-out group-hover:top-0">
              ABOUT
            </span>
          </a>

          <a
            className="text-[2.2vw] leading-none font-[u8] block  w-[14vw] h-[2vw] overflow-hidden  relative group"
            href=""
          >
            <span className="block absolute top-0 left-0 transition-all duration-500 ease-in-out group-hover:top-[-100%] ">
              STORY
            </span>
            <span className="block absolute top-[100%] left-0 transition-all duration-500 ease-in-out group-hover:top-0">
              STORY
            </span>
          </a>
          <a
            className="text-[2.2vw] leading-none font-[u8] block  w-[14vw] h-[2vw] overflow-hidden  relative group"
            href=""
          >
            <span className="block absolute top-0 left-0 transition-all duration-500 ease-in-out group-hover:top-[-100%] ">
              PROJECTS
            </span>
            <span className="block absolute top-[100%] left-0 transition-all duration-500 ease-in-out group-hover:top-0">
              PROJECTS
            </span>
          </a>
          <a
            className="text-[2.2vw] leading-none font-[u8] block  w-[14vw] h-[2vw] overflow-hidden  relative group"
            href=""
          >
            <span className="block absolute top-0 left-0 transition-all duration-500 ease-in-out group-hover:top-[-100%] ">
              RELEASES
            </span>
            <span className="block absolute top-[100%] left-0 transition-all duration-500 ease-in-out group-hover:top-0">
              RELEASES
            </span>
          </a>

          <div className="mt-24 w-full flex gap-16">
            <div className="btleft font-[a4] text-[8px] flex flex-col gap-8">
              <h1>
                FOLLOW <br /> (AROCK©️)
              </h1>

              <h1>
                LISTEN <br /> (AROCK©️)
              </h1>

              <h1>GET IN TOUCH</h1>

              <h1>
                SAN DIEGO <br /> BPM MUSIC <br /> 1600 NATIONAL AVE <br /> SAN
                DIEGO, CA 92123
              </h1>
            </div>
            <div className="btleft font-[a4] text-[8px] flex flex-col gap-8">
              <h1>
                INSTAGRAM <br /> YOUTUBE
              </h1>

              <h1>
                SPOTIFY <br /> MIXCLOUD
              </h1>

              <h1>EMIAL</h1>

              <h1>
                LOS ANGELES <br /> 6255 SUNSET BLVD. <br /> SUITE #700 <br />{" "}
                LOS ANGELES, CA 90028
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
