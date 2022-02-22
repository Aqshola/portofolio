import type { NextPage } from "next";
import Nav from "../components/Nav/Nav";
import { request } from "../lib/datocms";

import Opening from "../components/Section/Opening";
import Project from "../components/Section/Project";
import Skills from "../components/Section/Skills";

import {Project as ProjectType} from "../types/types";





type Props={
  data:ProjectType[]
}
const Home: NextPage<Props> = ({data}) => {
  return (
    <>
      <Nav />
      <Opening />
      <Skills />
      <Project listProject={data}/>
    </>
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

    console.log(data);
    return {
      props: {
        data:data.allProjects,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        data: [],
      },
    };
  }
}

export default Home;
