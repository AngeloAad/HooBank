import React from "react";
import { card } from "../assets";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className="section">
      <div className="sectionInfo">
        <h2 className="heading2">
          Find a better card deal
          <br className="sm:block hidden" />
          in few easy steps.
        </h2>
        <p className="paragraph max-w-[470px] mt-5">
          Effortlessly uncover the best card deals with our simple, quick
          comparison tool. Find the perfect card and save both time and money in
          just a few steps.
        </p>

        <Button styles="mt-10" />
      </div>

      <div className="sectionImg">
        <img src={card} alt="card" 
        className="w-[100%] h-[100%]"/>
      </div>
    </section>
  );
};

export default CardDeal;
