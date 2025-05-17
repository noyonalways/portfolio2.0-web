export interface AboutType {
  name: string;
  designation: string;
  image: {
    url: string;
    alt: string;
  };
  description: {
    para1: string;
    para2: string;
  };
  resume: {
    view: string;
    download: string;
  };
}

export const about: AboutType = {
  name: "Noyon Rahman",
  designation: "Software Engineer",
  image: {
    url: "https://i.ibb.co/whqsJfYs/noyon-rahman-2025-profile-compressed.png",
    alt: "Noyon Rahman Profile Image",
  },
  description: {
    para1:
      "I'm Noyon Rahman, specializing in building responsive and dynamic web applications with expertise in React.js, TypeScript, Redux-Toolkit, Next.js, Mongoose, Express.js, Tailwind CSS, and Docker. Passionate about delivering high-performance solutions, I am always eager to learn and explore new tools and languages to stay at the forefront of modern web development.",
    para2:
      "When I'm not coding, you can usually find me reading, hiking, or enjoying a good cup of coffee. I'm also a big fan of traveling and exploring new places whenever I get the chance.",
  },
  resume: {
    view: "https://drive.google.com/file/d/1Rnxv1I4cyd8prLjPCuVQeD5cO_D4CyC1/view",
    download:
      "https://drive.usercontent.google.com/uc?id=1Rnxv1I4cyd8prLjPCuVQeD5cO_D4CyC1&export=download",
  },
};
