import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import bannerImg from "../../assets/bannerImg.jpg";
const Banner = () => {
  return (
    <section
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="3000"
      id="home"
      className="  mx-4  lg:mx-20  mt-20 rounded-md "
    >
      <div className="lg:flex gap-20 w-full">
        <div className=" w-full lg:w-[60%] ">
          <h2 className="text-2xl lg:text-5xl  ">Hi, I'm Keya Moni</h2>

          <h5 className=" text-lg lg:text-xl font-bold my-2 ">
            MERN STACK Developer
          </h5>
          <p className="  text-lg text-justify">
            As a junior MERN developer, my goal is to create engaging and
            intuitive web applications that enhance user experience and drive
            business success. I am eager to expand my skills and explore new
            technologies to bring innovative ideas to my life.
          </p>
          <div className=" flex gap-5 mt-7 mb-5 items-center">
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100036332574044"
              className="text-xl"
            >
              <FaFacebookF></FaFacebookF>{" "}
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com/in/keya-moni-43a437221/"
              className="text-xl"
            >
              <FaLinkedinIn></FaLinkedinIn>{" "}
            </a>
            <a
              target="_blank"
              className="text-xl"
              href="https://github.com/keyamoni05866"
            >
              <FaGithub />
            </a>
          </div>

          <div className="flex gap-5 mt-10">
            <button className="text-md px-6 py-[8px] border rounded-2xl">
              Download Resume
            </button>
            <button className="custom-btn">
              <a href="#contact">Contact Me</a>
            </button>
          </div>
        </div>
        <div className="lg:w-[40%] mt-5 ">
          <div className=" h-[280px]">
            <img
              src={bannerImg}
              alt=""
              className="w-[400px] h-full shadow-md rounded-2xl "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
