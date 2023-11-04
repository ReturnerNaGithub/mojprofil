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
      <div>
        <Image
              src="/images/projects/discord.gif"
              alt="hero"
              className=" mr-11 "
              width={100}
              height={100}
            />
      </div>
    </footer>
  );
};

export default Footer;