import { Record, StructuredText } from "datocms-structured-text-utils";


export type DisplayProject = {
  id: string;
  title: string;
  image: {
    url: string;
    alt: string;
    blurUpThumb: string;
  };
  slug: string;
  exercpt: string;
  link: string;
  stack: {
    stack: string[];
  };
};

export interface DetailProject {
  data: Data;
}

export interface Data {
  project: Project;
}

export interface Project {
  id: string;
  _seoMetaTags: any;
  content: Content;
  link: string;
  slug: string;
  repo:string;
  stack: Stack;
  title: string;
  image: Image;
}

export interface SEOMetaTag {
  tag: string;
  content: null | string;
  attributes: Attributes | null;
}

export interface Attributes {
  property?: string;
  content: string;
  name?: string;
}

export interface Image {
  url: string;
  blurUpThumb: string;
  alt: null;
}

export interface Stack {
  stack: string[];
}

export interface Content {
  value: any
}
