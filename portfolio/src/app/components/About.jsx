import Image from "next/image";
import aboutImg from "../../public/asserts/my_photo2.png";
const About = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-20">
      <h2 className="text-center text-4xl font-bold mb-12">About Me</h2>

      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Image */}
        <div className="flex-1">
          <Image
            src={aboutImg} // Put your image inside public/images folder
            alt="About Me"
            width={500}
            height={500}
            className="rounded-3xl object-cover"
          />
        </div>

        {/* Right Side - Description */}
        <div className="flex-1 text-lg leading-relaxed text-gray-300">
          <p>
            I'm a dedicated developer with a strong passion for building scalable,
            user-focused web and mobile applications. I love bringing ideas to life
            through technology—designing intuitive interfaces, developing efficient
            backend systems, and integrating third-party services to create complete,
            seamless digital experiences.
          </p>
          <br />
          <p>
            My approach combines clean code, thoughtful design, and modern development
            practices to ensure every project is fast, secure, and maintainable. I enjoy
            learning new tools and frameworks, staying up-to-date with industry trends,
            and continuously improving my skills to deliver solutions that truly make an
            impact.
          </p>
          <br />
          <p>
            Whether working independently or in a collaborative team environment, I aim
            to create applications that are not only functional but also meaningful and
            enjoyable to use.
          </p>

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
