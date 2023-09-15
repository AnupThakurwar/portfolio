import React from "react";
import profile from "../../Resources/Images/profile-1.png";
import { Profile } from "../../Constants/Profile";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section>
      {Profile.map((details) => (
        <div
          className="grid p-5 grid-cols-1 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2"
          key={details.id}
        >
          <article>
            <div className="h-96 flex items-center flex-col p-5 lg:h-screen lg:flex lg:items-center lg:flex-col">
              <div className="flex-grow flex justify-center flex-col">
                <h5 className="text-slate-200 font-semibold text-lg">
                  Hi, there
                </h5>
                <p className="">
                  <span className="text-slate-200 font-semibold text-2xl">
                    I'm
                  </span>
                  <div className="text-5xl md:text-6xl sm:text-5xl lg:text-7xl xl:text-10xl font-bold px-2 text-yellow-400 transition-all ease-in-out duration-300 hover:scale-150 uppercase">
                    {details.firstName}
                  </div>
                  <div className="text-5xl md:text-6xl sm:text-5xl lg:text-7xl xl:text-10xl font-bold px-2 text-yellow-400 transition-all ease-in-out duration-300 hover:scale-110 uppercase">
                    {details.lastName}
                  </div>
                </p>
                <p className="text-slate-200 font-semibold text-xl ">
                  {details.headLine}
                </p>
              </div>
              <div className="flex-0.5 w-full">
                <div className="flex justify-end gap-4">
                  <div className="text-4xl cursor-pointer hover:scale-150 transition-all ease-in-out duration-300">
                    <Link to="http://www.linkedin.com/in/anupthakurwar">
                      <i className="fa-brands fa-linkedin" />
                    </Link>
                  </div>
                  <div className="text-4xl cursor-pointer hover:scale-150 transition-all ease-in-out duration-300">
                    <Link to="https://github.com/AnupThakurwar">
                      <i className="fa-brands fa-github" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article>
            <div className="h-3/4 bg-slate-400 rounded-lg p-5 flex items-center justify-center lg:h-screen">
              <div className="h-96 w-fit  md:w-3/4 lg:w-full bg-yellow-400 rounded-full rotate-[135deg]">
                <div className="w-full h-full flex justify-center items-center lg:items-start">
                  <img
                    src={profile}
                    alt="profile_Image"
                    className="lg:w-4/5 lg:h-[35rem] md:h-[30rem] sm:h-[26rem] w-5/5 h-[20rem] object-contain rotate-[225deg] hover:scale-110 transition-all ease-linear duration-300"
                  />
                </div>
              </div>
            </div>
          </article>
        </div>
      ))}
    </section>
  );
};

export default Banner;
