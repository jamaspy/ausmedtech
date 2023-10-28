import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <main
      className="w-full items-center justify-between min-h-screen bg-gradient-to-r from-mint to-navy p-8 flex flex-row"
      style={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 92%)" }}
    >
      <div className="flex-1">
        <Image
          src={"/logo.svg"}
          width={200}
          height={200}
          alt="logo"
          className="opacity-60 m-auto mb-12 flex md:hidden"
        />
        <p className="text-4xl lg:text-6xl font-semibold text-white text-center md:text-left">
          Australasian <br /> MedTech Alliance
        </p>
        <p className="text-lg md:text-xl text-white mt-4 text-center md:text-left">
          AMTA is Australiasian MedTech Alliance focused on the development of
          the MedTech industry in Australia and New Zealand.
        </p>
      </div>
      <div className="flex-1 hidden md:flex">
        <Image
          src={"/logo.svg"}
          width={700}
          height={700}
          alt="logo"
          className="opacity-60 ml-auto"
        />
      </div>
    </main>
  );
};

export default Hero;
