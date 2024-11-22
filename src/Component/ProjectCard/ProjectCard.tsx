import React from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const {
    _id,
    title,
    description,
    image,
    technologies,
    serverRepo,
    clientRepo,
    liveLink,
  } = project;
  //   console.log(image);
  return (
    <div>
      <div className="lg:flex lg:flex-row-reverse lg:justify-between mb-10 gap-6 shadow-[#b9bec4] rounded-lg my-5 border px-7 py-9 shadow-sm ">
        <div className="lg:w-[50%] shadow-md rounded-2xl">
          <div
            key={project.id}
            className="box w-full lg:h-[280px] h-[100px] bg-cover bg-top transition-all duration-[5s] ease-in-out hover:bg-bottom"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>
        <div className="lg:w-[50%] lg:my-0 my-6">
          <h4 className="lg:text-2xl text-xl font-semibold primary-color">
            {title}
          </h4>
          <p className="text-md">
            {description.substring(0, 200)}...
            <Link
              to={`/projectDetails/${_id}`}
              className=" text-blue-500  hover:underline"
            >
              see more
            </Link>
          </p>

          <div className="flex  gap-2 mt-3">
            {technologies
              ?.slice(0, 3)
              .map((feature: string, index: React.Key | null | undefined) => (
                <div
                  key={index}
                  className="text-gray-700 bg-base-300 lg:px-5 px-2  py-1 rounded-2xl text-[10px] lg:text-[16px] "
                >
                  {feature}
                </div>
              ))}
          </div>

          <div className="flex  gap-2 mt-3">
            {technologies
              ?.slice(3, 6)
              .map((feature: string, index: React.Key | null | undefined) => (
                <div
                  key={index}
                  className="text-gray-700 bg-base-300 lg:px-5 px-2  py-1 rounded-2xl text-[10px] lg:text-[16px]"
                >
                  {feature}
                </div>
              ))}
          </div>
          <div className="flex  gap-2 mt-3">
            {technologies
              ?.slice(6, technologies.length)
              .map((feature: string, index: React.Key | null | undefined) => (
                <div
                  key={index}
                  className="text-gray-700 bg-base-300 lg:px-5 px-2  py-1 rounded-2xl text-[10px] lg:text-[16px]"
                >
                  {feature}
                </div>
              ))}
          </div>
          <div className="mt-3 flex  lg:justify-end">
            <a
              href={liveLink}
              target="_blank"
              className=" text-gray-700 px-5  py-1 rounded-2xl flex items-center hover:underline hover:text-blue-500 lg:text-[16px] text-[12px] "
            >
              <FaExternalLinkAlt className="text-md me-1"></FaExternalLinkAlt>
              Live
            </a>
            <a
              href={clientRepo}
              target="_blank"
              className=" text-gray-700 px-5  py-1 rounded-2xl flex items-center hover:underline hover:text-blue-500 lg:text-[16px]  text-[12px]"
            >
              <FaGithub className="text-md me-1"></FaGithub>Client-Code
            </a>
            <a
              href={serverRepo}
              target="_blank"
              className=" text-gray-700 px-5  py-1 rounded-2xl flex items-center hover:underline hover:text-blue-500 lg:text-[16px]  text-[12px]"
            >
              <FaGithub className="text-md me-1"></FaGithub>Server-Code
            </a>
          </div>

          <div className="flex justify-start pt-2">
            <button className=" custom-outline-btn  flex justify-center items-center gap-2">
              View Details <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
