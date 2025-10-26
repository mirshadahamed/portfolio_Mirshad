'use client'; // Ensures this is a client component

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import Framer Motion
import profileImg from "../../public/asserts/my_photo2.png";

const About = () => {
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
    <section className="bg-black text-white py-20 px-6 md:px-20">
      <h2 className="text-center text-4xl font-bold mb-12">About Me</h2>

      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Image */}
        <div className="flex-1">
          <motion.div
            className="rounded-3xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }} // Initial state: hidden and smaller
            animate={{ opacity: 1, scale: 1 }} // Animated state: fully visible and normal size
            transition={{ duration: 1 }} // Transition duration
            whileHover={{ scale: 1.05 }} // Scale up the image on hover
          >
            <Image
              src={profileImg} // Put your image inside public/images folder
              alt="About Me"
              width={500}
              height={500}
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Right Side - Description */}
         <div className="flex-1 text-lg leading-relaxed text-gray-300">
          {/* Animating text with delay */}
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            I'm a dedicated developer with a strong passion for building scalable,
            user-focused web and mobile applications. I love bringing ideas to life
            through technology—designing intuitive interfaces, developing efficient
            backend systems, and integrating third-party services to create complete,
            seamless digital experiences.
          </motion.p>
          <br />
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            My approach combines clean code, thoughtful design, and modern development
            practices to ensure every project is fast, secure, and maintainable. I enjoy
            learning new tools and frameworks, staying up-to-date with industry trends,
            and continuously improving my skills to deliver solutions that truly make an
            impact.
          </motion.p>
          <br />
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          >
            Whether working independently or in a collaborative team environment, I aim
            to create applications that are not only functional but also meaningful and
            enjoyable to use.
          </motion.p>


          {/* Button */}
          <button className="mt-6 bg-gradient-to-r from-orange-500 to-yellow-600 text-white py-2 px-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50 hover:opacity-100 transition-all duration-300">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;