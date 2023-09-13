import React from "react";

const ExperienceCard = ({ details }) => {
  return (
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
            <div>
              <span className="font-semibold text-slate-100 px-1">Role :</span>
              <span className="text-slate-200">{details.role}</span>
            </div>
            <div>
              <span className="font-semibold text-slate-100 px-1">
                Duration :
              </span>
              <span className="text-slate-200">
                {details.startDate}-{details.endDate}
              </span>
            </div>
            <div>
              <span className="font-semibold text-slate-100 px-1">
                Project Name :
              </span>
              <span className="text-slate-200">{details.projectName}</span>
            </div>
            <div className=" text-slate-200">
              <span className="font-semibold text-slate-100 px-1">
                Project Description :
              </span>
              <span> {details.projectDescription}</span>
            </div>
            <div className=" text-slate-200">
              <span className="font-semibold text-slate-100 px-1">
                Project Role :
              </span>
              <span> {details.yourRole}</span>
            </div>
            <div className=" text-slate-200">
              <span className="font-semibold text-slate-100 px-1">
                Project Resposibilities :
              </span>
              <span className="block">
                {details?.summary?.map((line) => (
                  <div key={line}>&#9679; {line}</div>
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
