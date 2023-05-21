import Image from "next/image";
import React from "react";
import heroImage from "../assets/hero.jpg";
import bubbles from "../assets/bg-bubbles.svg";
function Hero() {
  return (
    <section className="md:flex items-center justify-around my-20">
      <div className="max-w-[600px]">
        <h1 className="text-white text-4xl mb-2">
          Lorem ipsum dolor sit amet Vitae sollicitudin in l convallis.
        </h1>
        <p className="text-white mb-10 max-w-[80%]">
          Lorem ipsum dolor sit amet licitudin in dolor sit licitudin in l co
          Vitae sollicitudin in l convallis.
        </p>
        <button className="text-white bg-gradient-to-b from-green-400 to-indigo-500 py-2 px-8">
          Download Now
        </button>
      </div>
      <div className="relative overflow-hidden">
        <Image src={heroImage} alt="hero-img" width={400} height={500} />
        <Image
          src={bubbles}
          alt="backgroundbubbles-img"
          width={400}
          height={500}
          className="absolute "
        />
      </div>
    </section>
  );
}

export default Hero;
