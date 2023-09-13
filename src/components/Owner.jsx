import React from "react";
import Navbar from "./Navbar";

const Owner = () => {
  return (
    <div className="flex flex-col w-screen min-h-screen">
      <Navbar />
      
      <section className="flex flex-col items-center gap-9  py-8">
        <h2 className="text-3xl font-semibold ">Michael - Group E - 43</h2>
        <div className="relative w-[271px] h-56 mb-1">
          <div className="absolute top-0 left-0 w-[270px] h-56 bg-gray-400 border-black border"></div>
          <img
            src="https://file.rendit.io/n/aqiVX3KwuibaOoDZ5zBL.svg"
            className="absolute top-0 left-0 w-[271px] h-56"
            alt="User Profile"
          />
          <div
            className="bg-[url(https://file.rendit.io/n/jgeADdKIon0NxjpBlmU4.svg)] bg-cover bg-50% bg-blend-normal bg-no-repeat relative w-[271px] h-56 items-center py-8"
            id="Line2"
          >
            <div className="text-center text-sm font-semibold">Picture</div>
          </div>
        </div>
        <div className="text-center text-sm font-semibold w-2/3">
          <p>Short Biography:</p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Owner;
