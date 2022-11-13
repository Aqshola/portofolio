export const svgParentTransition = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: {
      duration: 1,
      type: "spring",
      staggerChildren: 0.2,
    },
  },
};

export const svgPathTransition = {
  hidden: {
    fillOpacity: 0,
  },
  show: {
    fillOpacity: 1,
  },
};

export const containerTransition = {
  hidden: {},
  show: {
    transition: {
      delay: 1,
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

export const childTransition = {
  hidden: {
    translateY: 100,
    opacity: 0,
  },
  show: {
    translateY: 0,
    opacity: 1,
  },
};

export const boxParentTransition = {
  hidden: {},
  show: {
    transition: {
      delay: 0.5,
      duration: 0.7,
      type: "spring",
      staggerChildren: 0.3,
    },
  },
};

export const boxChildTransition = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
  },
};

export const opacityTransition={
  hidden:{
    opacity:0,
  },
  show:{
    opacity:1
  }
}
