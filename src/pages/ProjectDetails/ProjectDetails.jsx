import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const ProjectDetails = () => {
  const singleProject = useLoaderData();
  const {
    title,
    description,
    technologies,

    image,
    liveLink,
    clientRepo,
    serverRepo,
  } = singleProject?.data;
  // console.log(singleProject?.data);
  return (
    <div className="min-h-screen mx-auto max-w-6xl mt-20">
      <div className="lg:flex justify-between gap-20 mx-4 lg:mx-0">
        <div className="lg:w-[50%] shadow-md rounded-2xl">
          <div
            className="box w-full lg:h-[400px] h-[100px] bg-cover bg-top transition-all duration-[5s] ease-in-out hover:bg-bottom"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>
        <div className="lg:w-[50%] lg:my-0 my-6">
          <h4 className="lg:text-2xl text-xl font-semibold primary-color">
            {title}
          </h4>
          <div className="mt-3 flex  lg:justify-end mb-4">
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
          <p className="text-md">{description}</p>

          <div className="flex  gap-2 mt-3">
            {technologies?.slice(0, 3).map((feature, index) => (
              <div
                key={index}
                className="text-gray-700 bg-base-300 lg:px-5 px-2  py-1 rounded-2xl text-[10px] lg:text-[16px] "
              >
                {feature}
              </div>
            ))}
          </div>

          <div className="flex  gap-2 mt-3">
            {technologies?.slice(3, 6).map((feature, index) => (
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
              .map((feature, index) => (
                <div
                  key={index}
                  className="text-gray-700 bg-base-300 lg:px-5 px-2  py-1 rounded-2xl text-[10px] lg:text-[16px]"
                >
                  {feature}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
