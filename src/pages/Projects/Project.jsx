import { useEffect, useState } from "react";
import ProjectCard from "../../Component/ProjectCard/ProjectCard";

const Project = () => {
  const [projects, setProjectsData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          "https://portfolio-server-rosy-pi.vercel.app/api/projects"
        );
        if (!res.ok) {
          throw new Error("Fetch failed");
        }
        const result = await res.json();
        setProjectsData(result);
      } catch (error) {
        setError(error?.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  console.log(projects);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="size-10 border-4 border-t-[#FBFBFB] border-[#0b192c] rounded-full animate-spin"></div>
      </div>
    );
  }
  return (
    <section id="project" className="   lg:mx-20  mt-20">
      <p className="text-center text-lg lg:text-xl font-bold text-[#b6b4b4] uppercase">
        Project
      </p>
      <h2 className="lg:text-5xl text-3xl font-semibold text-[#0b192c]  text-center mb-3 lg:mb-20   ">
        Showcasing My Projects
      </h2>

      <div className="lg:mt-3  mt-10 mx-auto   gap-4">
        {projects?.data && projects?.data?.length > 0 ? (
          projects?.data
            ?.slice(0, 3)
            .map((project) => (
              <ProjectCard key={project?._id} project={project} />
            ))
        ) : (
          <h2 className="text-center">No Blog Found!!! </h2>
        )}
      </div>
    </section>
  );
};

export default Project;
