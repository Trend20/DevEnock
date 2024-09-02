import { IExperienceItem } from "../types";

const experiences: IExperienceItem[] = [
  {
    designation: "Senior Frontend Engineer",
    company: "Riverbank Solutions Limited",
    startDate: "April 2023",
    endDate: "July 2024",
    isCurrentJob: false,
    location: "Kilimani, Nairobi, Kenya",
    achievements: [
      {
        id: 1,
        desc: "Spearheaded the development of Zed Payments portal.",
      },
      {
        id: 2,
        desc: "Executed comprehensive end-to-end testing.",
      },
      {
        id: 3,
        desc: "Contributed to the improvement of development processes.",
      },
    ],
  },
  {
    designation: "FullStack Developer",
    company: "Whrrl Tech",
    startDate: "June 2022",
    endDate: "May 2023",
    isCurrentJob: false,
    location: "Remote",
    achievements: [
      {
        id: 1,
        desc: "Engineered and tested RESTful APIs.",
      },
      {
        id: 2,
        desc: "Designed an appealing front end for the Bru Finance app.",
      },
      {
        id: 3,
        desc: "Elevated code quality and developer contribution by 70%.",
      },
    ],
  },
  {
    designation: "Frontend Engineer",
    company: "Mortgage Ezy",
    startDate: "June 2021",
    endDate: "May 2022",
    isCurrentJob: false,
    location: "Remote",
    achievements: [
      {
        id: 1,
        desc: "Implemented a robust testing strategy by writing unit tests.",
      },
      {
        id: 2,
        desc: "Collaborated on the Deb project.",
      },
      {
        id: 3,
        desc: "Re-architected a multi-page dashboard.",
      },
    ],
  },
  {
    designation: "Frontend React Developer",
    company: "Jag Technology LLC",
    startDate: "October 2020",
    endDate: "April 2021",
    isCurrentJob: false,
    location: "Remote",
    achievements: [
      {
        id: 1,
        desc: "Developed and implemented highly responsive UI.",
      },
      {
        id: 2,
        desc: "Monitored and optimized front-end performance.",
      },
      {
        id: 3,
        desc: "Identified and resolved 30+ bugs from existing websites.",
      },
    ],
  },
];

export default experiences;
