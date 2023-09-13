import React, { useState } from "react";
import aboutProfile from "../../Resources/Images/profile-2.jpg";
import { Profile } from "../../Constants/Profile";

const About = () => {
  const [isBlur, setIsBlur] = useState(true);
  const removeBlur = () => {
    setIsBlur(false);
  };
  return (
    <section id="about">
      {Profile.map((items) => (
        <div className="bg-slate-400 p-5" key={items.id}>
          <h2 className="text-4xl uppercase font-bold text-slate-800 ">
            About
          </h2>
          <div className="m-auto p-2 grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
            <div className="relative">
              <div className="p-5">
                {/* <div className="">
                  <div className="absolute top-1 right-1 text-slate-100 text-2xl bg-slate-700 p-2 rounded-lg backdrop:blur-sm">
                    <span className="text-yellow-400">hover me</span> to view my
                    skills
                  </div>
                  <i className="fa fa-circle text-sm text-slate-100 block absolute top-[11rem] right-[20rem]"></i>
                  <i className="fa fa-circle text-md text-slate-100 block absolute top-[10rem] right-[18rem]"></i>
                  <i className="fa fa-circle text-lg text-slate-100 block absolute top-[8rem] right-[15rem]"></i>
                </div> */}
                <div className="absolute top-1 left-1 flex items-center justify-center opacity-0 hover:opacity-100 w-full h-full bg-transparent rounded-full transition-all ease-in-out duration-300 hover:backdrop-blur-sm ">
                  <div className=" text-slate-100 text-2xl font-semibold ">
                    <div className="text-5xl stroke-slate-500">SKILLS</div>
                    {items.skills.map((ele) => (
                      <div key={ele.title} className="p-2">
                        <i className={ele.icon}></i>
                        <span className="p-2">{ele.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <img
                  src={aboutProfile}
                  alt="about_Image"
                  className="h-full w-full rounded-full ring hover:scale-110 transition-all ease-in-out duration-300 hover:bg-transparent hover:border-[30px] hover:border-slate-500 hover:top-0 hover:h-full hover:w-full hover:rounded-full"
                ></img>
              </div>
            </div>
            <div className="flex items-center relative">
              <article className={isBlur ? "" : "hidden"}>
                <div className="absolute h-full w-full z-20 top-0 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <div>
                    <h2 className="text-4xl text-slate-200 m-2">
                      Want to Know about me?
                    </h2>
                    <button
                      className="ring p-5 rounded-lg bg-slate-200 font-bold uppercase text-slate-700 text-lg transition-all ease-linear duration-300 hover:bg-yellow-400"
                      onClick={removeBlur}
                    >
                      Click Here
                    </button>
                  </div>
                </div>
              </article>

              <article>
                <div className="text-4xl uppercase font-bold text-slate-400 p-3 ring bg-slate-700 my-2 rounded-lg">
                  About me
                </div>
                <div className="font-semibold text-slate-200 rounded-lg bg-slate-700 ring p-5">
                  <div className="text-2xl">
                    Hi, I'm{" "}
                    <span className="text-yellow-400 hover:scale-300">
                      Anup
                    </span>{" "}
                    frontend developer at spring computing technology in React
                    JS.
                  </div>
                  <div className="text-lg text-left">
                    <p className="p-2">
                      Working from past 2 years in React JS feels my strength in
                      creating challenging and exceptional User Interfaces for
                      clients, started from UI developer my journey continues
                      becoming software developer thereby learning new skills
                      and persue new roles and responsibilities.
                    </p>
                    <p className="p-2">
                      I enjoy exploring creative stuff to play around them, in
                      similar way i found my interest in drawing cartoons,
                      designing stuffs using tools like photoshop, video-editing
                      stuff, etc.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default About;
