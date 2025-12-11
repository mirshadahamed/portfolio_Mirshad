'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import profileImg from "../../public/asserts/my_photo2.png";

const About = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-20 font-mono">
      <h2 className="text-center text-4xl font-bold mb-12 text-gray-300">
        <span className="text-orange-500">&lt;</span>
        About Me
        <span className="text-orange-500">/&gt;</span>
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Image without border */}
        <div className="flex-1">
          <motion.div
            className="rounded-3xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={profileImg}
              alt="About Me"
              width={500}
              height={500}
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Right Side - Description with transparent background */}
        <div className="flex-1">
          <div className="bg-transparent p-6 rounded-xl">
            {/* whoami section - transparent with larger font */}
            <div className="mb-8">
              <div className="text-green-400 text-xl mb-3">$ whoami</div>
              <div className="text-cyan-400 text-2xl font-bold">Full Stack Developer</div>
            </div>

            {/* skills section */}
            <div className="mb-8">
              <div className="text-green-400 text-xl mb-3">$ skills</div>
              <div className="text-gray-300 text-lg space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-300 text-xl">•</span>
                  <span>Web & Mobile Applications</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-300 text-xl">•</span>
                  <span>UI/UX Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-300 text-xl">•</span>
                  <span>Modern Frameworks</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-300 text-xl">•</span>
                  <span>Clean Code Architecture</span>
                </div>
              </div>
            </div>

            {/* philosophy section */}
            <div className="mb-8">
              <div className="text-green-400 text-xl mb-3">$ philosophy</div>
              <div className="text-gray-300 text-lg leading-relaxed">
                Building scalable solutions with clean code and modern practices. 
                Focused on creating applications that are both functional and meaningful.
              </div>
            </div>

            {/* Button with larger font */}
            {/* <motion.button
              className="mt-6 bg-gradient-to-r from-orange-500 to-yellow-600 text-white py-4 px-8 rounded-lg font-mono text-lg font-bold hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              $ curl -O cv.pdf
            </motion.button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;