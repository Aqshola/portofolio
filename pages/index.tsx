import type { NextPage } from "next";
import Nav from "../components/Nav/Nav";
import { request } from "../lib/datocms";

import Opening from "../components/Section/Opening";
import Project from "../components/Section/Project";
import Skills from "../components/Section/Skills";

import { Project as ProjectType } from "../types/types";
import Head from "next/head";

type Props = {
  data: ProjectType[];
};

const Home: NextPage<Props> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Aqshol Afid</title>
        <meta name="description" content="Aqshola Portofolio" />
        <meta name="title" content="Aqshol Afid" />
        <meta
          name="description"
          content="Aqshola Portofolio"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta
          property="og:title"
          content="Aqshol Afid"
        />
        <meta
          property="og:description"
          content="Aqshola Portofolio"
        />
        {/* <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta
          property="twitter:title"
          content="Meta Tags — Preview, Edit and Generate"
        />
        <meta
          property="twitter:description"
          content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        ></meta> */}
      </Head>
      <Nav />
      <Opening />
      <Skills />
      <Project listProject={data} />
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

    return {
      props: {
        data: data.allProjects,
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
