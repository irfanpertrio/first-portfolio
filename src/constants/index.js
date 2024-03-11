import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  tesla,
  canva,
  net,
  gik,
  gdi,
  vuejs,
  tujuhsembilan,
  powerapps,
  shopify,
  carrent,
  projectbackground,
  jobit,
  tripguide,
  threejs,
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
    title: ".Net Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Canva Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: ".Net",
    icon: net,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Power Apps",
    icon: powerapps,
  },
  {
    name: "Vue JS",
    icon: vuejs,
  }
];

const experiences = [
  {
    title: "Tester",
    company_name: "PT Padepokan Tujuh Sembilan",
    icon: tujuhsembilan,
    iconBg: "#383E56",
    date: "January 2021 - February 2022",
    points: [
      "Conducted testing on applications being developed by the company's programming team before delivering to clients.",
      "Assisted in developing features for client-owned applications using Microsoft PowerApps.",
    ],
  },
  {
    title: "Canva Layout Designer",
    company_name: "Canva",
    icon: canva,
    iconBg: "#383E56",
    date: "June 2022 - August 2022",
    points: [
      "Create customizable design templates for canva users to use.",
      "Translate the brief given, then make it into a template according to the theme and requirements that have been determined.",
      "Create a template design based on the principles of design theory.",
    ],
  },
  {
    title: ".Net Developer",
    company_name: "CV Garuda Infinity Kreasindo",
    icon: gik,
    iconBg: "#383E56",
    date: "July 2022 - September 2022",
    points: [
      "Contributed to the development of the company's internal application from analysis to implementation stages.",
      "Conducted database design analysis using PostgreSQL.",
      "Created CRUD functions and APIs (using Swagger documentation) using the .Net framework.",
      "Integrated data from APIs using the Vue.js framework.",
    ],
  },
  {
    title: "Junior IT Consultant",
    company_name: "PT Global Dinamika Informatika",
    icon: gdi,
    iconBg: "#383E56",
    date: "November 2023 - Present",
    points: [
      "Developed a web-based information system application with ASP .Net and Vue.js framework.",
      "Perform maintenance/support of applications that have been used by users and run on servers.",
      "Integrate and test code in terms of performance and feature functionality.",
      "Create an application set-up using the Clean Architecture design for increasing flexibility, maintainability, and a neater application structure for the needs of the latest projects in the company.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Employee Recommendation",
    description:
      "Developed a website-based application using the Simple Additive Weighting (SAW) algorithm to provide employee recommendation data based on the match between employee skills and project requirements submitted by client companies.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Vue.js",
        color: "pink-text-gradient",
      },
      {
        name: "Simple Additive Weighting Algorithm",
        color: "yellow-text-gradient",
      },
    ],
    image: projectbackground,
    source_code_link: "https://github.com/irfanpertrio",
  },
  {
    name: "Trash Clean",
    description:"Developed a web-based application aimed at managing waste collection activities in a village. The website was designed to provide two different usage schemes. The first scheme caters to users who do not require login, the second scheme caters to authenticated users, including residents, admins, and super admins.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      // {
      //   name: "scss",
      //   color: "pink-text-gradient",
      // },
    ],
    image: projectbackground,
    source_code_link: "https://github.com/irfanpertrio",
  },
  {
    name: "PLN Successor",
    description:"Developed a web-based application to support the administration of human resources at PT PLN, including processes such as promotion, attendance, employee information management, and authentication.",
    tags: [
      {
        name: "Strapi",
        color: "blue-text-gradient",
      },
      {
        name: "Go",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: projectbackground,
    source_code_link: "https://github.com/irfanpertrio",

  },
];

export { services, technologies, experiences, testimonials, projects };