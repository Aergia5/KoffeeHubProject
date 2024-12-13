import React from "react";

const Footer = () => {
  return (
    <div className=" bg-gradient-to-r from-[#360C10] to-[#360C05] text-black rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4 text-orange-100 ">KoffeeHub</h1>
          <p className=" text-sm text-orange-100">
            Welcome to our coffee haven! Explore our aromatic brews, savor
            artisanal flavors, and discover the perfect roast to elevate your
            daily ritual.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0 text-orange-100">Links</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer text-orange-100"
              href="/"
            >
              Menu
            </a>
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer text-orange-100"
              href="/"
            >
              About Us
            </a>
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer text-orange-100"
              href="/"
            >
              Products
            </a>

          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0 text-orange-100">Menu</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer text-orange-100"
              href="/"
            >
              Cappuccino
            </a>
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer text-orange-100"
              href="/"
            >
              Latte
            </a>
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer text-orange-100"
              href="/"
            >
              Americano
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0 text-orange-100">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer text-orange-100"
              href="/"
            >
              KoffeeHub@gmail.com
            </a>
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer text-orange-100"
              href="/"
            >
              9853735382
            </a>
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer text-orange-100"
              href="/"
            >
              KoffeeHub
            </a>
          </nav>
        </div>
      </div>
      <div>
        <p>

        </p>
      </div>
    </div>
  );
};

export default Footer;
