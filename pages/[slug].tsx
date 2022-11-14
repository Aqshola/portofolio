import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import { SiGithub, SiGooglechrome } from "react-icons/si";
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

const ProjectDetail: NextPage<DetailProject> = ({ data }) => {
  return (
    <div className="mx-auto grid  min-h-screen max-w-screen-2xl grid-cols-12 px-5">
      <div className="col-span-12 py-5 md:col-start-3 md:col-end-10">
        <Link passHref href={"/"}>
          <span className="hover:bg-yellow-primary rounded py-1 px-1 transition-colors">
            Home
          </span>
        </Link>

        <div className="mt-5">
          <div className="block h-56 w-full rounded-md bg-gray-400 md:h-96"></div>
          <h1 className="mt-5 text-3xl font-semibold">{data.project.title}</h1>
          <div
            className="mt-2 flex gap-2
          "
          >
            {data.project.stack.stack.map((stack: string) => (
              <div className="relative flex h-7 w-7 rounded-full" key={stack}>
                {stack === "reactjs" && <SiReact className="h-full w-full" />}
                {stack === "nextjs" && (
                  <SiNextdotjs className="h-full w-full" />
                )}
                {stack === "tailwind" && (
                  <SiTailwindcss className="h-full w-full" />
                )}
                {stack === "expressjs" && (
                  <SiExpress className="h-full w-full" />
                )}
                {stack === "mongodb" && <SiMongodb className="h-full w-full" />}
                {stack === "materialui" && (
                  <SiMaterialui className="h-full w-full" />
                )}
              </div>
            ))}
          </div>
          <div className="mt-5 flex gap-5">
            <a className="hover:bg-yellow-primary flex  cursor-pointer items-center gap-2 rounded border-2 border-black px-2 py-1 transition-colors">
              <span>
                <SiGithub className="h-6 w-6" />
              </span>
              <span>Repository</span>
            </a>
            <a className="hover:bg-yellow-primary flex  cursor-pointer items-center gap-2 rounded border-2 border-black px-2 py-1 transition-colors">
              <span>
                <SiGooglechrome className="h-6 w-6" />
              </span>
              <span>Live site</span>
            </a>
          </div>
          <p className="mt-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
            dolore at repellat veritatis, eius, nisi vitae autem repellendus
            tempore consectetur sunt impedit esse aliquid quis sit unde
            recusandae adipisci quo porro odit fugiat et deleniti aperiam sed.
            Et, ipsam eligendi pariatur modi blanditiis suscipit quae sit
            provident impedit error culpa, rem odit dolorum. Aliquam nemo
            praesentium est itaque atque tempora dolor culpa, voluptas aliquid.
            Officiis, odio aut necessitatibus quas vero enim optio, ea tenetur
            autem nemo placeat voluptates aperiam numquam ducimus modi. Cum
            natus corporis eius provident dignissimos perferendis itaque magni.
            Mollitia deserunt velit, numquam totam optio, facere nam reiciendis
            adipisci pariatur rem sed autem ratione ullam. Nam consequuntur in
            eaque error commodi consequatur a, aspernatur culpa! Quia architecto
            tenetur veritatis id quibusdam eius voluptate quaerat eos cum quae
            quo voluptatum ullam nisi sapiente tempore perferendis dicta illum
            ab, saepe ex neque soluta rerum assumenda explicabo! Dicta, nobis
            mollitia id libero, explicabo dolorem eum voluptas aliquid autem
            dolorum aspernatur. Nisi nulla aut, earum eum cumque, quo dolor
            ratione officia ipsa tempora illum officiis, perspiciatis
            dignissimos laudantium aliquam corporis ad distinctio ipsam nam
            tenetur sequi voluptatum eos doloribus aperiam? Cupiditate nisi
            labore deleniti aliquid temporibus minus corporis soluta,
            praesentium similique eveniet.
          </p>
        </div>
      </div>
    </div>
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
      description(markdown: true)
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
