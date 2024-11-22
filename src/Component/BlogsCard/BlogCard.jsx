import React from "react";
import QuilToNormalHTML from "../QuilToNormalHTML/QuilToNormalHTML";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { _id, title, image, description } = blog;
  return (
    <div data-aos="fade-up" data-aos-easing="linear" className="my-10">
      <div className=" divider"></div>
      <div className="lg:flex justify-between gap-6  w-full ">
        <div className="lg:w-[25%] w-[320px] mx-auto mb-5 lg:mb-0">
          <img src={image} alt="" className="w-full lg:h-[200px]" />
        </div>
        <div className="lg:w-[75%] mx-[20px] h-full">
          <div className="">
            <h4 className="lg:text-4xl font-bold primary-color">{title}</h4>
          </div>

          <div className="lg:text-lg text-sm font-light mt-4 text-justify pe-4 ">
            <Link to={`/blogDetails/${_id}`}>
              <QuilToNormalHTML description={description} maxLength={220} />
            </Link>
          </div>
          <h4 className="text-sm text-gray-500 ">
            {new Date(blog?.createdAt).toLocaleTimeString("en-US", {
              hour12: true,
              timeZone: "Asia/Dhaka",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </h4>
          <div className="flex justify-end">
            <Link to={`/blogDetails/${_id}`} className="custom-outline-btn ">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
