import type { NextPage } from "next";
import Layout from "components/Layout/Layout";
import Opening from "components/SectionV2/Opening/Index";
import About from "components/SectionV2/About/Index"
import Skills from "components/SectionV2/Skill/Index"
import Project from "components/SectionV2/Project/Index"

const Home: NextPage = () => {
  return (
    <Layout>
      {/* OPENING */}
      <Opening/>
      

      {/* ABOUT */}
      <About/>

      {/* SKILLS */}
      <Skills/>

      {/* PROJECT */}
      <Project/>
    </Layout>
  );
};

export default Home;
