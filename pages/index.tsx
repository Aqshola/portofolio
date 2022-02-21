import type { NextPage } from "next";
import Nav from "../components/Nav/Nav";


import Opening from "../components/Section/Opening";
import Project from "../components/Section/Project";
import Skills from "../components/Section/Skills";

const Home: NextPage = () => {
  return (
    <>
      <Nav />
      <Opening/>
      <Skills/>
      <Project/>
      
    </>
  );
};

export default Home;
