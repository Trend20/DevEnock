"use client";

import { createRef } from "react";
import { IProjectItem } from "../../../types";
import Row from "../../core/Row";
import ProjectItem from "./ProjectItem";
import Column from "../../core/Column";
import ProjectSlider from "@/components/common/ProjectsSlider";

const ProjectList = ({ projects }: Readonly<{ projects: IProjectItem[] }>) => {
  const carouselRef = createRef<HTMLDivElement>();

  const _handleOnClickPrev = () => {
    if (!carouselRef || carouselRef.current === null) return;

    let offset = 400;
    if (window.innerWidth < 480) offset = 280;

    carouselRef.current.scrollLeft -= offset;
  };

  const _handleOnClickNext = () => {
    if (!carouselRef || carouselRef.current === null) return;

    let offset = 400;
    if (window.innerWidth < 480) offset = 280;

    carouselRef.current.scrollLeft += offset;
  };

  return (
    <Column classNames="w-full mt-16">
      <Row
        classNames="w-full gap-4 overflow-x-auto no-scrollbar"
        elementRef={carouselRef}
      >
        <ProjectSlider>
          {projects.map((item, index) => {
            return <ProjectItem key={`project-item-${index}`} project={item} />;
          })}
        </ProjectSlider>
      </Row>
    </Column>
  );
};

export default ProjectList;
