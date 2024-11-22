import React, { useEffect, useState } from "react";
import SkillCard from "../../Component/SkillCard/SkillCard";

const Skills = () => {
  const [skills, setSkills] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          "https://portfolio-server-rosy-pi.vercel.app/api/skills"
        );
        if (!res.ok) {
          throw new Error("Fetch failed");
        }
        const result = await res.json();
        setSkills(result);
      } catch (error) {
        setError(error?.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  console.log(skills);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="size-10 border-4 border-t-[#FBFBFB] border-[#0b192c] rounded-full animate-spin"></div>
      </div>
    );
  }
  return (
    <section id="project" className=" section  lg:mx-20  mt-20">
      <p className="text-center text-lg lg:text-xl font-bold text-[#b6b4b4] uppercase">
        Skill
      </p>
      <h2 className="lg:text-5xl text-3xl font-semibold text-[#0b192c]  text-center mb-3 lg:mb-20   ">
        My Technical Skills
      </h2>

      <div className="lg:mt-3  mt-10 mx-auto lg:mx-20   gap-4 grid lg:grid-cols-5 grid-cols-2">
        {skills?.data && skills?.data?.length > 0 ? (
          skills?.data.map((skill) => (
            <SkillCard key={skill?._id} skill={skill} />
          ))
        ) : (
          <h2 className="text-center">No Blog Found!!! </h2>
        )}
      </div>
    </section>
  );
};

export default Skills;
