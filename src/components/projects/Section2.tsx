"use client";

import { useSearchParams } from "next/navigation";
import ResponsiveBox from "../core/ResponsiveBox";
import ConstraintedBox from "../core/ConstraintedBox";
import { getProjectDetails } from "../../data/projects";

const ProjectsSection2 = ({ id }: Readonly<{ id?: string }>) => {
  const searchParams = useSearchParams();
  const description = getProjectDetails(searchParams.get("id")!)?.description;

  return (
    <ResponsiveBox id={id}>
      <ConstraintedBox classNames="p-4">
        <p>{description}</p>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default ProjectsSection2;
