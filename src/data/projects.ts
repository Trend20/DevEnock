import { IProjectItem, ProjectType, RepoType } from "../types";

const projects: IProjectItem[] = [
  {
    id: "more",
    title: "More Classifieds",
    description:
      "More Classifieds Agency is a leading digital marketing agency specializing in classified ads and business listing.",
    icon: "/images/more.png",
    githubUrl: "",
    url: "https://www.more.co.ke/",
    tags: ["NextJS", "NodeJS", "MySQL", "Zustand", "AWS", "Typescript"],
    sceenshots: ["/screenshots/rippl.png"],
  },
  {
    id: "lcluster",
    title: "LCluster",
    description:
      "Gain access to unlimited libraries and resources to help you ship your products faster.",
    icon: "/images/crony.png",
    githubUrl: "https://github.com/Trend20/Lcluster",
    url: "https://code-crony.vercel.app/",
    tags: [
      "NextJS",
      "Redux Toolkit",
      "PrismaORM",
      "MongoDB",
      "TailwindCSS",
      "Typescript",
      "NextAuth",
    ],
  },
  {
    id: "brufinance",
    title: "BruFinance",
    description: "On-chain Protocol for Asset Tokenisation & Finance.",
    icon: "/images/bru.png",
    githubUrl: "",
    url: "https://bru.finance/",
    tags: ["NextJS", "Typescript", "NodeJS", "AWS", "Ethereum"],
  },
];

export default projects;

export function getProjectName(id: string) {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item.title;
}

export function getProjectDetails(id: string): IProjectItem | null {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item;
}
