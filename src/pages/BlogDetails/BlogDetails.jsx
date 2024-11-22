import React from "react";
import { useLoaderData } from "react-router-dom";
import QuilToNormalHTML from "../../Component/QuilToNormalHTML/QuilToNormalHTML";

const BlogDetails = () => {
  const singleBlog = useLoaderData();
  const {
    title,
    description,

    image,
  } = singleBlog?.data;
  return (
    <div className="min-h-screen lg:mx-auto max-w-6xl mt-5 mx-5 mb-10">
      <h4 className="lg:text-4xl text-xl font-bold ">{title}</h4>
      <div className="w-full my-8">
        <img src={image} alt="" className="w-full h-[400px] rounded-xl" />
      </div>
      <div className="lg:text-lg text-sm font-light mt-4 text-justify pe-4 ">
        <QuilToNormalHTML description={description} />
      </div>
    </div>
  );
};

export default BlogDetails;
