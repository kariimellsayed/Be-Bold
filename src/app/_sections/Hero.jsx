"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

const Hero = () => {
  const logoRef = useRef(null);
  const headingRef = useRef(null);

  useGSAP(function () {
    const tl = gsap.timeline();

    tl.from(logoRef.current, {
      duration: 1,
      autoAlpha: 0,
      y: -25,
      filter: "blur(20px)",
      ease: "power2.out",
    })
      .from(
        headingRef.current,
        {
          duration: 1,
          autoAlpha: 0,
          filter: "blur(20px)",
          y: -20,
          ease: "power2.out",
        },
        "-=0.5"
      )
      .from(
        ".banner-1",
        {
          duration: 1.5,
          strokeDashoffset: gsap.utils.wrap([986.84, 0]),
          ease: "power2.out",
          autoAlpha: 0,
        },
        "-=0.5"
      )
      .from(
        ".banner-2",
        {
          duration: 1.5,
          autoAlpha: 0,
          ease: "power2.out",
        },
        "-=1"
      )
      .from(
        ".banner-3",
        {
          duration: 1.5,
          autoAlpha: 0,
          ease: "power2.out",
        },
        "-=1"
      )
      .from(
        ".main-down-arrow-1",
        {
          duration: 0.7,
          strokeDashoffset: gsap.utils.wrap([152, 0]),
          ease: "power2.out",
          autoAlpha: 0,
        },
        "-=0.5"
      )
      .from(
        ".main-down-arrow-2",
        {
          duration: 1,
          strokeDashoffset: gsap.utils.wrap([31.11, 0]),
          ease: "power2.out",
          autoAlpha: 0,
        },
        "-=0.3"
      );
  }, []);
  return (
    <section className="w-full h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay*/}
      <div className="absolute inset-0 bg-foreground z-10" />

      {/* Content Of Hero */}
      <div className="relative top-[-8%] z-10 flex flex-col justify-center items-center h-full px-4 text-center gap-6">
        {/* Logo */}
        <Image
          src="/images/logo.png"
          alt="Be-Bold Marketing Agency"
          width={224}
          height={146}
          className="object-contain invisible"
          ref={logoRef}
        />
        {/* Title */}
        <h1
          ref={headingRef}
          className="text-4xl invisible sm:text-4xl text-white font-[100] leading-9 uppercase max-w-11/12 "
        >
          Your Shortcut to Effective Digital Marketing & Functioning Web Design
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="max-w-md uppercase font-roboto "
          viewBox="0 0 473.999 29.999"
        >
          <g>
            <text
              className="banner-3 invisible font-extralight fill-white w-full"
              x="50%"
              y="55%"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              <tspan className="tracking-tight">
                Helping businesses to grow since 2008
              </tspan>
            </text>
            <path
              className="banner-1 invisible"
              d="M473.5,15.5a10,10,0,0,1-10,10v4H10.5v-4a10,10,0,0,1,0-20V.5h453v5A10,10,0,0,1,473.5,15.5Z"
              strokeDasharray="986.8409423828125"
              style={{
                fill: "none",
                stroke: "#fff",
                strokeDashoffset: 0,
                strokeMiterlimit: 10,
                strokeWidth: 0.999,
              }}
            />
            <rect
              className="banner-2 invisible"
              width="5.914"
              height="5.914"
              transform="translate(16.817 10.817) rotate(45)"
              fill="#f06e2b"
            />
            <rect
              className="banner-2 invisible"
              width="5.914"
              height="5.914"
              transform="translate(457.814 10.814) rotate(45)"
              fill="#f06e2b"
            />
          </g>
        </svg>

        <a
          href="#"
          className="mt-10 w-10 h-10 flex items-center justify-center text-white  "
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55.414 55.414">
            <g transform="translate(0 0)">
              stroke: #fff;
              <rect
                className="main-down-arrow-1 invisible"
                strokeDasharray="152"
              />
              <path
                className="main-down-arrow-2 invisible"
                d="M38.707,30.707l-11,11-11-11"
                strokeDasharray="31.11269760131836"
                style={{
                  strokeDashoffset: 0,
                  stroke: "#d17e33",
                  fill: "none",
                  strokeMiterlimit: 10,
                }}
              />
            </g>
          </svg>
        </a>
      </div>

      {/* Lamp */}
      {/* <div className="absolute -top-28 sm:-top-64 left-1/2 -translate-x-1/2 z-[20]">
        <Image
          src="/images/lamp.png"
          alt="Lamp"
          width={550}
          height={200}
          className="object-contain pointer-events-none h-auto"
        />
      </div> */}
    </section>
  );
};

export default Hero;
