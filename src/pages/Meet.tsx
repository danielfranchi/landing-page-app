import React from "react";
import Carousel from "../components/Carousel";
import Button from "../components/Button";

const Meet: React.FC = () => {
  return (
    <div className="bg-royal-violet p-8 px-[5rem] pt-[5rem] text-white flex flex-col lg:flex-col items-center justify-between">
      <div className="flex lg:flex-row flex-col items-center lg:items-start lg:justify-between w-full text-center sm:text-left">
        <div className="lg:w-3/4 mb-4 lg:mb-0">
          <h2 className="text-yellow-gold text-xs lg:text-sm font-medium sm:text-left">
            Join other Sun harvesters
          </h2>
          <h1 className="font-sans text-3xl lg:text-4xl font-extrabold mt-2 sm:text-left">
            Make something awesome
          </h1>
          <p className="text-sm lg:text-lg mt-4 text-white sm:text-left">
            <span className="block">
              Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
              Eleifend mi tristique
            </span>
            <span className="block">
              condimentum congue fusce nunc, donec magnis commodo.
            </span>
          </p>
        </div>
        <div className="lg:w-1/4 flex lg:justify-end mt-4 lg:mt-0">
          <Button text="Request a Quote" color="yellow-gold" />
        </div>
      </div>
      <div className="w-full mt-8">
        <Carousel />
      </div>
    </div>
  );
};

export default Meet;
