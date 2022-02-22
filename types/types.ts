export type Project = {
  id: string;
  title: string;
  image: {
    url: string;
    alt: string;
    blurUpThumb: string;
  };
  exercpt: string;
  link: string;
  stack: {
    stack: string[];
  };
};


