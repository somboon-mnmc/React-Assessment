import React from "react";

const Navbar = () => {
  return (
    <>
    <nav className="h-20 bg-[#e8e8e8] flex text-xl justify-end text-black font-bold">
      <a href="/" className="mr-20">Home</a>
      <a href="/Owner" className="mr-20">Owner</a>
    </nav>
      <hr className="border-t border-black" />
    </>
  );
};

export default Navbar;
