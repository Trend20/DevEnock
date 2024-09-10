"use client";

import { type IProjectItem } from "../../../types";
import { Balancer } from "react-wrap-balancer";
import Image from "next/image";
import Link from "next/link";
import Column from "../../core/Column";
import Row from "../../core/Row";
import CardBox from "../../core/CardBox";
import { MdDirections } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const ProjectItem = ({ project }: { project: IProjectItem }) => {
  return (
    <CardBox classNames="aspect-[3/5] max-h-[30rem] items-center justify-between bg-[var(--textColor10)] group slide_in">
      <Column classNames="w-full items-center justify-start">
        <Image
          src={project.icon}
          alt={`project-${project.title}`}
          width={100}
          height={100}
          sizes="100%"
          loading="lazy"
          placeholder="blur"
          blurDataURL={project.icon}
          className="w-full h-60 object-cover aspect-square"
        />
        <p className="text-lg/6 font-semibold mt-4">{project.title}</p>
        <div className="flex w-full items-center justify-center space-x-3 mt-6">
          {project.githubUrl !== "" && (
            <Link
              href={project.githubUrl}
              target="_blank"
              className="rounded-md border w-auto flex text-[var(--textColor50)] justify-center items-center ountline-none p-2"
            >
              <FaGithub size={25} className="mr-3" />
              Source Code
            </Link>
          )}
          {project.url && (
            <Link
              href={project.url}
              target="_blank"
              className="rounded-md border w-1/4 flex text-[var(--textColor50)] justify-center items-center ountline-none p-2"
            >
              <MdDirections className="mr-3" size={25} />
              Live
            </Link>
          )}
        </div>
      </Column>
      <Column classNames="w-full items-center">
        <p className="text-center text-base/6">
          <Balancer>{project.description}</Balancer>
        </p>
        {project.tags && project.tags.length > 0 ? (
          <Row classNames="w-full items-center justify-center flex-wrap mt-4">
            {project.tags.map((tag, i) => {
              return (
                <p
                  key={`tag-${i}`}
                  className="rounded-[var(--borderRadius)] border border-[var(--textColor50)] py-[.125rem] px-2 mr-2 mb-2 text-xs/6 font-normal"
                >
                  {tag}
                </p>
              );
            })}
          </Row>
        ) : null}
      </Column>
    </CardBox>
  );
};

export default ProjectItem;
