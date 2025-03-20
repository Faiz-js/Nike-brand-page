import React from "react";

export default function HeroSection() {
  return (
    <section className="px-5 md:px-32 flex flex-col lg:flex-row justify-center items-center my-10">
      <div className="flex flex-col gap-4 w-full md:w-1/2">
        <h1 className="text-5xl lg:text-sm font-semibold text-center lg:text-left">
          YOUR FEET DESERVE THE BEST
        </h1>

        <p className="text-center lg:text-left text-zinc-600">
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="flex flex-col lg:flex-row gap-4">
          <button className="bg-red-500 text-white py-2 rounded-md lg:px-4">
            Shop Now
          </button>
          <button className="border border-black py-2 rounded-md lg:px-4">
            Category
          </button>
        </div>

        <p className="mt-4">Also avaliable on</p>

        <div className="flex gap-4">
          <img src="/images/flipkart.png" alt="Flipkart Logo" />
          <img src="/images/amazon.png" alt="Amazon Logo" />
        </div>
      </div>

      <div className="lg:w-1/2 flex justify-center items-center">
        <img
          src="/images/shoe_image.png"
          alt="Nike Shoes"
          className="w-60 lg:w-[500px]"
        />
      </div>
    </section>
  );
}
