import React from "react";
import { FaUpwork } from "react-icons/fa6";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const EducationInfo = () => {
  return (
    <div className=" mx-auto  mt-40 ">
      <p className="text-center text-lg lg:text-xl font-bold text-[#b6b4b4] uppercase">
        Education
      </p>
      <h2 className="lg:text-5xl text-3xl font-semibold text-[#0b192c]  text-center mb-3 lg:mb-20   ">
        My Education Qualification
      </h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className=""
          //   contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          //   contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2023 - End"
          iconStyle={{ background: "#0b192c", color: "#fff" }}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
              />
            </svg>
          }
        >
          <h3 className="text-xl font-bold">Diploma In Computer Engineering</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Dhaka Mohila Polytechnic Institute
          </h4>
          <h4 className="text-md flex items-center">
            <span className="font-bold  ">CGPA:</span> 3.68 out of 4.00.
          </h4>
          <h4 className="text-md flex items-center">
            <span className="font-bold  ">Department:</span> Computer
            Technology.
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          //   contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          //   contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2019 - End"
          iconStyle={{ background: "#0b192c", color: "#fff" }}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
              />
            </svg>
          }
        >
          <h3 className="text-xl font-bold">
            Secondary School Certificate(SSC)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            UCEP Dhaka Technical School
          </h4>
          <h4 className="text-md flex items-center">
            <span className="font-bold  ">GPA:</span> 5.00 out of 5.00.
          </h4>
          <h4 className="text-md flex items-center">
            <span className="font-bold  ">Group:</span> Science
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default EducationInfo;
