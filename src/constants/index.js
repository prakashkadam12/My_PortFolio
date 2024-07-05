import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  python,
  django,
  mysql,
  figma,
  shopify,
  tcs,
  intelligence,
  sun,
  payment,
  intelligence2,
  rental
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "MERN Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "django",
    icon: django,
  },
  {
    name: "mysql",
    icon: mysql,
  },
];

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company_name: "Vi Tech Harbor Private Limited",
    icon: tcs,
    iconBg: "#383E56",
    date: "Nov 2023 – Jan 2024",
    points: [
      "Developed and maintained MERN applications utilizing React, Node.js, MongoDB, and Visual Studio.",
      "Collaborated with the development team to design and implement new app features, enhancing the overall user experience.",
      "Conducted code reviews and performed debugging to identify and fix issues.",
      "Demonstrated the ability to learn new technologies and programming concepts quickly, which led to taking on additional responsibilities.",
    ],
},
  {
    title: "Web Developer Intern",
    company_name: "INFOTRIXS",
    icon: sun,
    iconBg: "#000000",
    date: "Jul 2023 – Aug 2023",
    points: [
      "Collaborated with design team to incorporate intuitive features, improving user satisfaction.",
      "Utilized React.js to optimize frontend interfaces for seamless navigation and engagement.",
      "Participated in code reviews and provided constructive feedback to other developers.",
      "Ensured cross-device compatibility through implementation of responsive design principles.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "PHN Technology Pvt Ltd",
    icon: intelligence,
    iconBg: "#E6DEDD",
    date: "Apr 2023 – Jun 2023",
    points: [
      "Collaborated with a team to create and maintain web applications, gaining hands-on experience in HTML5, CSS3, and JavaScript.",
      "Assisted in designing and developing user interfaces with React.JS, creating interactive and responsive web experiences.",
      "Contributed to web application development and maintenance, improving performance through active participation in codebase enhancements and troubleshooting.",
      "Gained exposure to frameworks like Bootstrap by helping create visually appealing and user-friendly web interfaces.",
    ],
  },
];

const projects = [
  {
    name: "StudyNotion App",
    description:
      "Developed 'StudyNotion,' an e-learning platform for course browsing and purchase, leveraging MongoDB for efficient data management. Designed and implemented frontend and backend using Node.js and Nodemailer, integrating payment gateway APIs for secure transactions. Implemented intuitive course recommendation system based on user preferences, enhancing user engagement.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: payment,
    source_code_link: "https://github.com/prakashkadam12/Study-Notion",
  },
  {
    name: "Shopify App",
    description:
      "Conceptualized and developed a feature-rich Shopify-inspired platform using Django framework and MySQL database, enabling seamless browsing, purchasing, and cart management for users. Led the end-to-end implementation, including user authentication, product catalog management, and cart functionality, ensuring a smooth and intuitive shopping experience.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "bootsrap5",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: intelligence2,
    source_code_link: "https://github.com/prakashkadam12/Shopify-App",
  },
  {
    name: "Weather App",
    description:
    "Crafted a dynamic Weather App using JavaScript, HTML, and CSS for real-time forecasts. Integrated a trusted weather data API, ensuring precise and up-to-date information globally. Implemented geolocation for personalized weather updates, optimizing performance for swift access. Enhanced user experience with intuitive UI design and responsive layout. Added functionality display weekly forecasts.",
    tags: [
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "Tailwind css",
        color: "blue-text-gradient",
      },
    ],
    image: rental,
    source_code_link: "https://github.com/prakashkadam12/WEATHERAPP-PROJECT",
  },
];

export { services, technologies, experiences,projects };
