import React from "react";
import {
  personalProject,
  workExperience,
} from "../../Constants/WorkExperience";
import ExperienceCard from "./ExperienceCard";
import PersonalExperienceCard from "./PersonalExperienceCard";

const Experience = () => {
  return (
    <section id="experience">
      <div className="bg-slate-800 p-5 relative">
        <h2 className="text-4xl uppercase font-bold text-slate-400 ">
          Work Experience
        </h2>
        <div className="h-3/4 m-auto p-2 grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
          {workExperience.map((details) => (
            <ExperienceCard details={details} />
          ))}
        </div>
        <h2 className="text-4xl uppercase font-bold text-slate-400 ">
          Personal Project
        </h2>
        <div className="h-3/4 m-auto p-2 grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
          {personalProject.map((details) => (
            <PersonalExperienceCard details={details} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
