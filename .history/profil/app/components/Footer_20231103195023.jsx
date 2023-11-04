import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>
        
        </span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
      <div></div><Image
              src="/images/projects/discord.gif"
              alt="hero"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={200}
              height={200}
            />
    </footer>
  );
};

export default Footer;