import ConstraintedBox from "../core/ConstraintedBox";
import ResponsiveBox from "../core/ResponsiveBox";
import SectionTitle from "../common/SectionTitle";
import { HoverLayoutGrid } from "../common/HoverLayoutGrid";
import services from "../../data/services";

const HomeSection2 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--dialogColor)] bg-[var(--dialogColor)] min-h-screen items-center justify-center dark:bg-dot-white/[0.2] bg-dot-white/[0.2] rounded-md"
      id={id}
    >
      <ConstraintedBox classNames="p-4 py-16 z-20">
        <SectionTitle>Services</SectionTitle>
        <HoverLayoutGrid cards={services} />
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default HomeSection2;
