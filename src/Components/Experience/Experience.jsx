import React from "react";
import {
  personalProject,
  workExperience,
} from "../../Constants/WorkExperience";
import { Link } from "react-router-dom";

const Experience = () => {
  return (
    <section id="experience">
      <div className="bg-slate-800 p-5 relative">
        <h2 className="text-4xl uppercase font-bold text-slate-400 ">
          Work Experience
        </h2>
        <div className="h-3/4 m-auto p-2 grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
          {workExperience.map((details) => (
            <div className=" w-full p-2" key={details.companyName}>
              <div className="ring h-full rounded-lg">
                <div className="h-96">
                  <img
                    src={details.projectImage}
                    alt=""
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>
                <div className=" m-2">
                  <div className="">
                    <div className="h-12 flex items-center justify-between px-2 py-2 bg-slate-300 rounded-lg">
                      <img
                        src={details.logo}
                        alt="logo_image"
                        className="h-full rounded-full flex-none ring"
                      />
                      <div className="flex-1 font-semibold text-slate-700">
                        {details.companyName}, {details.location}
                      </div>
                    </div>
                    <div className="text-left">
                      <span className="font-semibold text-slate-100 px-1">
                        Role :
                      </span>
                      <span className="text-slate-200">{details.role}</span>
                    </div>
                    <div className="text-left">
                      <span className="font-semibold text-slate-100 px-1">
                        Duration :
                      </span>
                      <span className="text-slate-200">
                        {details.startDate}-{details.endDate}
                      </span>
                    </div>
                    <div className="text-left">
                      <span className="font-semibold text-slate-100 px-1">
                        Project Name :
                      </span>
                      <span className="text-slate-200">
                        {details.projectName}
                      </span>
                    </div>
                    <div className="text-left text-slate-200">
                      <span className="font-semibold text-slate-100 px-1">
                        Project Description :
                      </span>
                      <span> {details.projectDescription}</span>
                    </div>
                    <div className="text-left text-slate-200">
                      <span className="font-semibold text-slate-100 px-1">
                        Project Role :
                      </span>
                      <span> {details.yourRole}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-4xl uppercase font-bold text-slate-400 ">
          Personal Project
        </h2>
        <div className="h-3/4 m-auto p-2 grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
          {personalProject.map((details) => (
            <div className=" w-full p-2" key={details.projectName}>
              <div className="ring h-full rounded-lg">
                <div className="h-96">
                  <img
                    src={details.projectImage}
                    alt=""
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>
                <div className=" m-2">
                  <div className="">
                    <div className="h-12 flex items-center justify-between px-2 py-2 bg-slate-300 rounded-lg">
                      <img
                        src={details.logo}
                        alt="logo_image"
                        className="h-full rounded-full flex-none ring"
                      />
                      <div className="flex-1 font-semibold text-slate-700">
                        {details.companyName}, {details.location}
                      </div>
                    </div>
                    <div className="text-left">
                      <span className="font-semibold text-slate-100 px-1">
                        Role :
                      </span>
                      <span className="text-slate-200">{details.role}</span>
                    </div>
                    <div className="text-left">
                      <span className="font-semibold text-slate-100 px-1">
                        Project Name :
                      </span>
                      <span className="text-slate-200">
                        {details.projectName}
                      </span>
                    </div>
                    <div className="text-left text-slate-200">
                      <span className="font-semibold text-slate-100 px-1">
                        Project Description :
                      </span>
                      <span> {details.projectDescription}</span>
                    </div>
                    <div className="text-left text-slate-200">
                      <span className="font-semibold text-slate-100 px-1">
                        Project Role :
                      </span>
                      <span> {details.yourRole}</span>
                    </div>
                    <div className="text-left text-slate-200">
                      <span className="font-semibold text-slate-100 px-1">
                        Link :
                      </span>
                      <Link to={details.link}>
                        <button className="bg-yellow-400 p-2 rounded-lg text-slate-700 font-semibold hover:animate-bounce">
                          click here visit website
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
