import React from "react";
import img from "../assets/img/home.png";
import Button from "../layouts/Button";
import Login from "./Login";

const Home = ({loginPage}) => {
  return (
    
    <div className=" min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 bg-gradient-to-r from-[#360C10] to-[#360C05] ">
      <div className=" w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0">
        <h1 className="text-orange-100 font-semibold text-5xl text-center lg:text-start leading-tight">
          Start your day with a steaming cup of coffee
        </h1>
        <p className="text-orange-100">
          Boost your productivity and build your mood with a glass of coffee in
          the morning
        </p>

        <div className=" flex flex-row gap-6">
          <Button title="ORDER" />
        </div>
      </div>

      <div className="relative">
        <img src={img} alt="img" />

        <div className=" absolute bg-white px-8 py-2 top-5 right-0 rounded-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
          <h2 className=" font-semibold">Americano</h2>
        </div>

        <div className=" absolute bg-white px-8 py-2 bottom-0 -left-10 rounded-full">
          <h2 className=" font-semibold">Cappuccino</h2>
        </div>
      </div>
      {loginPage?<Login/>:""}
    </div>
  );
};

export default Home;
