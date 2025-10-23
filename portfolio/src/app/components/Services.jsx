'use client'
import Image from "next/image";

import img from '../../public/asserts/web.png';
import img1 from '../../public/asserts/mobile.png';
import img2 from '../../public/asserts/uiux.png';



export default function Services() {
  return (
    <section className="bg-black text-white py-20">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-wide">SERVICES</h2>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          I build scalable, user-focused web and mobile apps with clean, efficient frontends, backends,
          and seamless integrations.
        </p>
      </div>

     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
  {/* Card 1 */}
  <div className="bg-[#1e1e1e] p-8 rounded-2xl hover:scale-105 transition-transform hover:shadow-2xl hover:shadow-orange-500/50">
    <Image src={img} alt="Web Development" className="w-48 h-48 mb-4 object-cover rounded-full" />
    <h3 className="text-xl font-bold mb-2">Web Applications</h3>
    <p className="text-gray-400 text-sm">
      Turning your big web ideas into functional, reliable and user loving sites.
    </p>
  </div>

  {/* Card 2 */}
  <div className="bg-[#1e1e1e] p-8 rounded-2xl hover:scale-105 transition-transform hover:shadow-2xl hover:shadow-orange-500/50">
    <Image src={img1} alt="Mobile Development" className="w-48 h-48 mb-4 object-cover rounded-full" />
    <h3 className="text-xl font-bold mb-2">Mobile Application</h3>
    <p className="text-gray-400 text-sm">
      Building seamless mobile apps with modern technologies.
    </p>
  </div>

  {/* Card 3 */}
  <div className="bg-[#1e1e1e] p-8 rounded-2xl hover:scale-105 transition-transform hover:shadow-2xl hover:shadow-orange-500/50">
    <Image src={img2} alt="UI/UX Design" className="w-48 h-48 mb-4 object-cover rounded-full" />
    <h3 className="text-xl font-bold mb-2">UX Designs</h3>
    <p className="text-gray-400 text-sm">
      Crafting human-centered designs that deliver smooth user experiences.
    </p>
  </div>
</div>
    </section>
  );
}
