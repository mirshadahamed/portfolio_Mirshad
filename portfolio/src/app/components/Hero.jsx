'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import Framer Motion
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
    }, 10); // Delay for better animation effect

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="bg-black text-white py-24 px-40 flex flex-col md:flex-row items-center">
      {/* Left Content */}
      <div className="max-w-xl text-center md:text-left md:mr-80">
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
          {/* <button className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/50 transition-all duration-300 transform active:scale-95">
            Hire Me
          </button> */}
          {/* Motion applied to the Download CV button */}
          <motion.button
            className="border border-white py-3 px-8 rounded-md hover:bg-white hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.1 }} // Scaling effect on hover
            whileTap={{ scale: 0.95 }}  // Slight shrink effect on click
            transition={{ type: "spring", stiffness: 300, damping: 20 }} // Smooth spring transition
          >
            Download CV
          </motion.button>
        </div>

        {/* Skills with animated progress bars */}
        <div className="mt-10 space-y-5">
          {animatedSkills.map((skill, index) => (
            <div key={index}>
              <p className="font-semibold">{skill.label}</p>
              <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
                <motion.div
                  className="bg-orange-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: skill.value }}
                  transition={{ duration: 1, ease: "easeInOut" }} // Customize the animation duration
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image with a round gray background - Adjusted positioning */}
      <div className="mt-100 md:mt-0 relative md:w-[380px] md:h-[380px] md:ml-400">
        {/* Gray circle background */}
        <div className="w-800 h-800 md:w-[380px] md:h-[450px] bg-gray-900 rounded-full absolute -z-100"></div>
        {/* Profile image */}
        <Image
          src={profileImg}
          alt="Profile"
          className="relative rounded-full object-cover transform transition-all duration-1000 ease-in-out"
          width={400}
          height={400}
        />
      </div>
    </section>
  );
}