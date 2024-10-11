import React from "react";

function Header() {
  return (
    <div className="bg-slate-800 ">
      <div className="container mx-auto px-24 flex justify-between items-center">
        <div className="logo">
          <a className=" text-white text-3xl  font-bold font-sans" href="/">
            USER
          </a>
        </div>
        <nav className="flex gap-5">
          <a href="/" className="text-white text-md hover:text-slate-300">
            Home
          </a>
          <a href="/about" className="text-white text-md hover:text-slate-300">
            About
          </a>
        </nav>
        <a href="/" className="flex gap-3 rounded-xl py-2 px-2 bg-cyan-500">
          <p className="text-white text-md">Lo gout</p>{" "}
        </a>
      </div>
    </div>
  );
}

export default Header;
