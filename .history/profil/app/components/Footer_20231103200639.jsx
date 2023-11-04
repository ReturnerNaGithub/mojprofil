import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#384584] border-l-transparent border-r-transparent">
      <div className="container p-1 flex justify-between">
        <span>
        <div className="rounded-full bg-purple-600 w-[50px] h-[50px] lg:w-[112px] lg:h-[112px] relative">
            <Image
              src="/images/projects/discord.gif"
              alt="hero"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={90}
              height={100}
            />
          </div>
        </span>
        <p className="text-sky-400 p-1">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;