import React from "react";
import Navbar from "../../CommonComponents/Navbar/Navbar";
import Banner from "../../CommonComponents/Banner/Banner";
import Experience from "../Experience/Experience";
import About from "../About/About";
import { HashLink } from "react-router-hash-link";
import Footer from "../../CommonComponents/Footer/Footer";

function Home() {
  return (
    <div className="w-auto h-auto bg-slate-950 flex justify-center py-9">
      <div className="w-4/5 bg-slate-500 h-4/5 m-auto rounded-[25px]">
        <div className="fixed bottom-0 right-0 p-5">
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
