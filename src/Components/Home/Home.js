import React from "react";
import Navbar from "../../CommonComponents/Navbar/Navbar";
import Banner from "../../CommonComponents/Banner/Banner";
import Experience from "../Experience/Experience";
import About from "../About/About";
import { HashLink } from "react-router-hash-link";
import Footer from "../../CommonComponents/Footer/Footer";

function Home() {
  return (
    <div className="w-[100%] h-full overflow-hidden bg-slate-950 flex justify-center py-9">
      <div className=" bg-slate-500 w-5/5 h-4/5 lg:w-4/5 lg:h-4/5 lg:m-auto lg:rounded-[25px]">
        <div className="fixed bottom-0 right-0 p-5 z-30">
          <HashLink to="#" smooth>
            <i className="fa fa-circle-up text-slate-200 text-4xl"></i>
            <p htmlFor="" className="text-slate-200">
              back to top
            </p>
          </HashLink>
        </div>
        <Navbar />
        <Banner />
        <Experience />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
