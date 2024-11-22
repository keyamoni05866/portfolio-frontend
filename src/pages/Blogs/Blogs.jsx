import { useEffect, useState } from "react";
import BlogCard from "../../Component/BlogsCard/BlogCard";

const Blogs = () => {
  const [blogData, setBlogsData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          "https://portfolio-server-rosy-pi.vercel.app/api/blogs"
        );
        if (!res.ok) {
          throw new Error("Fetch failed");
        }
        const result = await res.json();
        setBlogsData(result);
      } catch (error) {
        setError(error?.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="size-10 border-4 border-t-[#FBFBFB] border-[#0b192c] rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="2000"
      id="contact"
      className=" section  lg:mx-28  mt-28 pb-28"
    >
      <p className="text-center text-lg lg:text-xl font-bold text-[#b6b4b4] uppercase">
        Blogs
      </p>
      <h2 className="lg:text-5xl text-3xl font-semibold text-[#0b192c]  text-center mb-3 lg:mb-20   ">
        My Thoughts On Technology
      </h2>

      <div className="lg:mt-3  mt-10 mx-auto   gap-4">
        {blogData?.data && blogData?.data?.length > 0 ? (
          blogData?.data?.map((blog) => <BlogCard key={blog._id} blog={blog} />)
        ) : (
          <h2 className="text-center">No Blog Found!!! </h2>
        )}
      </div>
    </section>
  );
};

export default Blogs;
