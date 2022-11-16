import type { NextPage } from "next";
import Layout from "components/Layout/Layout";
import Opening from "components/SectionV2/Opening/Index";
import About from "components/SectionV2/About/Index";
import Skills from "components/SectionV2/Skill/Index";
import Project from "components/SectionV2/Project/Index";
import { request } from "lib/datocms";
import {DisplayProject} from "types/types"

type Props={
  data:DisplayProject[]
}

const Home: NextPage<Props> = ({data}) => {
  return (
    <Layout>
      {/* OPENING */}
      <Opening />

      {/* ABOUT */}
      <About />

      {/* SKILLS */}
      <Skills />

      {/* PROJECT */}
      <Project listProject={data}/>
    </Layout>
  );
};

export async function getStaticProps() {
  const PROJECT_QUERY = `query Project($limit: IntType){
    allProjects(first:$limit) {
      id
      title
      exercpt
      link
      stack
      slug
      image {
        blurUpThumb
        url
        alt
      }
      
    }
  }`;

  try {
    const data = await request({
      query: PROJECT_QUERY,
      variable: {
        limit: 10,
      },
    });

    return {
      props: {
        data: data.allProjects,
      },
      revalidate:60
    };
  } catch (error) {
    return {
      props: {
        data: [],
      },
    };
  }
}
export default Home;
