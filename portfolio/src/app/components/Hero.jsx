'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import profileImg from "../../public/asserts/my_photo.png"; // <-- Add your image here

export default function HeroSection() {
  const [animatedSkills, setAnimatedSkills] = useState([]);

  useEffect(() => {
    // Simulate loading animation with a slight delay
    const timeoutId = setTimeout(() => {
      setAnimatedSkills([
        { label: "UX/UI", value: "80%" },
        { label: "Mobile Application", value: "60%" },
        { label: "Web Application", value: "70%" },
      ]);
    }, 500); // Delay for better animation effect

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="bg-black text-white py-24 px-8 flex flex-col md:flex-row items-center justify-between">
      {/* Left Content */}
      <div className="max-w-xl text-center md:text-left">
        <p className="text-lg">
          <span className="text-orange-500 font-semibold">Hi</span> I am
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mt-2 text-gray-300">
          Mirshad Ahamed
        </h1>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-4 bg-gradient-to-r from-orange-400 to-yellow-600 text-transparent bg-clip-text">
          Full stack developer
        </h2>

        {/* Buttons with hover animations */}
        <div className="mt-8 flex gap-6 justify-center md:justify-start">
          <button className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/50 transition-all duration-300 transform active:scale-95">
            Hire Me
          </button>
          <button className="border border-white py-3 px-8 rounded-md hover:bg-white hover:text-black transition-all duration-300">
            Download CV
          </button>
        </div>

        {/* Skills with animated progress bars */}
        <div className="mt-10 space-y-5">
          {animatedSkills.map((skill, index) => (
            <div key={index}>
              <p className="font-semibold">{skill.label}</p>
              <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
                <div
                  className="bg-orange-500 h-2 rounded-full transition-all duration-1000 ease-in-out"
                  style={{ width: skill.value }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image with a round gray background - Adjusted positioning */}
      <div className="mt-10 md:mt-0 relative md:-ml-118 lg:-ml-16">
        {/* Gray circle background */}
        <div className="w-80 h-80 md:w-[380px] md:h-[380px] bg-gray-800 rounded-full absolute -z-10"></div>
        
        {/* Profile image */}
        <Image
          src={profileImg}
          alt="Profile"
          className="relative rounded-full object-cover transform transition-all duration-1000 ease-in-out"
          width={380}
          height={380}
        />
      </div>
    </section>
  );
}