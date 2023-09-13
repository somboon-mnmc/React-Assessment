import React from "react";

const Sector = () => {
  return (
    <>
      <div className="bg-[#e8e8e8] h-[40vh] flex flex-col gap-9 items-center py-9 pt-[70px] ">
        <h1 className="text-5xl font-bold text-center mb-5">
          Generation Thailand
          <br />
          React - Assessment
        </h1>
        <div className="flex flex-row justify-between w-2/6 items-start">
          <div className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-col justify-center h-12 items-center rounded">
            <a href="/user" className="font-['Inter'] font-bold mx-4">
              User Home Sector
            </a>
          </div>
          <div className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-col justify-center h-12 items-center rounded">
            <a href="/admin" className="font-['Inter'] font-bold mx-3">
              Admin Home Sector
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sector;
