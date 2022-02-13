import type { NextPage } from "next";
import Nav from "../components/Nav/Nav";

import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiTypescript,
} from "react-icons/si";
import Opening from "../components/Section/Opening";

const Home: NextPage = () => {
  return (
    <>
      <Nav />
      <Opening/>
      

      <section
        id="skills"
        className="mx-auto flex flex-col justify-center h-screen max-w-screen-xl px-5 text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold">Tech Stack</h1>
        <p className="mt-5  text-lg md:text-xl font-light">
          Stack i used while building a website
        </p>
        <div id="list-tech" className="mt-24 flex justify-center gap-20 flex-wrap">
          <a href="">
            <SiNextdotjs className="h-16 w-16 md:h-24 md:w-24" />
          </a>
          <a href="">
            <SiReact className="h-16 w-16 md:h-24 md:w-24" />
          </a>
          <a href="">
            <SiNodedotjs className="h-16 w-16 md:h-24 md:w-24" />
          </a>
          <a href="">
            <SiTypescript className="h-16 w-16 md:h-24 md:w-24" />
          </a>
        </div>
      </section>

      <section id="projects" className=" mx-auto flex flex-col ustify-center mt-28 h-screen max-w-screen-xl px-5 text-center">
        <h1 className=" text-5xl md:text-6xl font-bold font-catamaran">Project</h1>
        <p className="mt-5 text-lg md:text-2xl font-light">Work i has done</p>
        <div className="grid grid-cols-9 w-full mt-14 gap-y-10 md:gap-20">
          <div className="col-span-9 md:col-span-3 flex px-4 pt-4 text-left
          flex-col border-2 border-black ">
            <h2>Judul</h2>
            <p>Deskripsi</p>

            {/* nanti ganti image disini */}
            <div className="w-full h-56 bg-gray-300 block mt-7">
              
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Home;
