import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import { SiGithub, SiGo, SiGooglechrome } from "react-icons/si";
import { request } from "lib/datocms";
import { DetailProject } from "types/types";
import {
  SiTailwindcss,
  SiExpress,
  SiReact,
  SiNextdotjs,
  SiMongodb,
  SiMaterialui,
} from "react-icons/si";

import { StructuredText, renderMetaTags } from "react-datocms";
import Image from "next/image";
import Head from "next/head";
import Tooltip from "components/Layout/Tooltip/Tooltip";

const ProjectDetail: NextPage<DetailProject> = ({ data }) => {
  return (
    <>
      <Head>{renderMetaTags([...data.project._seoMetaTags])}</Head>
      <div className="mx-auto grid  min-h-screen max-w-screen-2xl grid-cols-12 px-5 pb-10">
        <div className="col-span-12 py-5 md:col-start-3 md:col-end-10">
          {/* NAV */}
          <Link passHref href={"/"}>
            <span className="hover:bg-yellow-primary rounded py-1 px-1 transition-colors">
              Home
            </span>
          </Link>

          <div className="mt-5">
            {/* IMAGE WEB */}
            <div className="relative aspect-video w-full overflow-hidden rounded-md border-2 border-black shadow-md">
              <Image
                src={data.project.image.url}
                alt={data.project.image.alt || data.project.title}
                blurDataURL={data.project.image.blurUpThumb}
                fill={true}
                className="w-full object-fill"
              />
            </div>
            {/* HEADER */}
            <h1 className="mt-5 text-3xl font-semibold">
              {data.project.title}
            </h1>
            <div className="mt-2 flex gap-2">
              {data.project.stack.stack.map((stack: string) => (
                <div className="relative flex h-7 w-7 rounded-full" key={stack}>
                  {stack === "reactjs" && (
                    <Tooltip tip="React JS">
                      <SiReact className="h-full w-full" />
                    </Tooltip>
                  )}
                  {stack === "nextjs" && (
                    <Tooltip tip="Next JS">
                      <SiNextdotjs className="h-full w-full" />
                    </Tooltip>
                  )}
                  {stack === "tailwind" && (
                    <Tooltip tip="Tailwind">
                      <SiTailwindcss className="h-full w-full" />
                    </Tooltip>
                  )}
                  {stack === "expressjs" && (
                    <Tooltip tip="Express JS">
                      <SiExpress className="h-full w-full" />
                    </Tooltip>
                  )}
                  {stack === "mongodb" && (
                    <Tooltip tip="MongoDB">
                      <SiMongodb className="h-full w-full" />
                    </Tooltip>
                  )}
                  {stack === "materialui" && (
                    <Tooltip tip="Material UI">
                      <SiMaterialui className="h-full w-full" />
                    </Tooltip>
                  )}

                  {stack === "golang" && (
                    <Tooltip tip="Golang">
                      <SiGo className="h-full w-full" />
                    </Tooltip>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-5 flex gap-5">
              {data.project.repo && (
                <a
                  href={data.project.repo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:bg-yellow-primary flex  cursor-pointer items-center gap-2 rounded border-2 border-black px-2 py-1 transition-colors"
                >
                  <span>
                    <SiGithub className="h-6 w-6" />
                  </span>
                  <span>Repository</span>
                </a>
              )}

              {data.project.link && (
                <a
                  href={data.project.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:bg-yellow-primary flex  cursor-pointer items-center gap-2 rounded border-2 border-black px-2 py-1 transition-colors"
                >
                  <span>
                    <SiGooglechrome className="h-6 w-6" />
                  </span>
                  <span>Live site</span>
                </a>
              )}
            </div>

            {/* CONTENT */}
            <div id="content" className="mt-10">
              <StructuredText data={data.project.content.value} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
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

    const paths = data.allProjects.map((el: any) => ({
      params: {
        slug: el.slug,
      },
    }));

    return { paths: paths, fallback: false };
  } catch (error) {
    return { paths: [], fallback: false };
  }
}

export async function getStaticProps({ params, preview = false }: any) {
  const slug = params.slug;

  const PROJECT_QUERY = `query ProjectBySlug($slug: String) {
    project(filter: {slug: {eq: $slug}}) {
      id
      _seoMetaTags(locale: en) {
        tag
        content
        attributes
      }
      content{
        value
      }
      repo
      link
      slug
      stack
      title
      image {
        url
        blurUpThumb
        alt
      }
    }
  }`;

  try {
    const data = await request({
      query: PROJECT_QUERY,
      variables: {
        slug: slug,
      },
      preview,
    });

    return {
      props: {
        data,
      },
      revalidate:60
    };
  } catch (error) {
    return {
      props: {
        data: null,
      },
    };
  }
}

export default ProjectDetail;
