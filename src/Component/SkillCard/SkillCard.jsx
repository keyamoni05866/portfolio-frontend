import React from "react";

const SkillCard = ({ skill }) => {
  return (
    <div>
      <div className=" w-[180px] h-[120px] shadow-md text-center  rounded-xl ">
        <img
          src={skill?.image}
          alt=""
          className="w-[100px] h-[70px] mx-auto mt-4 bg-base-200 rounded-2xl"
        />
        <h2 className="text-xl font-semibold mt-2 ">{skill?.name}</h2>
      </div>
    </div>
  );
};

export default SkillCard;
