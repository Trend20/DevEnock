import ConstraintedBox from "../core/ConstraintedBox";
import ResponsiveBox from "../core/ResponsiveBox";
import SectionTitle from "../common/SectionTitle";
import ExperienceItem from "./ui/ExperienceItem";
import experiences from "../../data/experiences";
import ExperienceSlider from "@/components/common/ExperienceSlider";

const HomeSection3 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="bg-[var(--dialogColor)] min-h-[calc(100vh-5rem)] items-center justify-center"
      id={id}
    >
      <ConstraintedBox classNames="p-4 py-16">
        <SectionTitle>Experience</SectionTitle>
        <div className="mt-8 w-full">
          <ExperienceSlider>
            {experiences.map((experience, index) => {
              return (
                <ExperienceItem key={`experience-${index}`} data={experience} />
              );
            })}
          </ExperienceSlider>
        </div>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default HomeSection3;
