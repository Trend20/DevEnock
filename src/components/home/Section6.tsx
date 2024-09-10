import ResponsiveBox from "../core/ResponsiveBox";
import ConstraintedBox from "../core/ConstraintedBox";
import Column from "../core/Column";
import SectionTitle from "../common/SectionTitle";
import socialLinks from "../../data/socialLinks";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Row from "@/components/core/Row";

const HomeSection6 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="bg-[var(--bgColor)] min-h-[calc(100vh-5rem)] items-center justify-center"
      id={id}
    >
      <ConstraintedBox classNames="p-4 py-16">
        <SectionTitle>Get in Touch</SectionTitle>

        <Column classNames="mt-8 w-full flex justify-center items-center">
          <Row classNames="gap-2 w-full mx-auto justify-center items-center">
            {socialLinks.map((link, index) => {
              return (
                <Link
                  key={`social-link-${index}`}
                  href={link.url}
                  target="_blank"
                  className="app__outlined_btn !rounded-full !p-2 lg:!p-3 !aspect-square !border-[var(--textColor)]"
                  aria-label={`${link.name}`}
                >
                  <span className="text-base/6 text-[var(--whiteColor)]">
                    <FontAwesomeIcon icon={link.icon} />
                  </span>
                </Link>
              );
            })}
          </Row>
          <p className="text-center mx-auto mt-16 text-2xl/6 font-semibold">
            I&apos;m{" "}
            <span className="text-[var(--primaryColor)] mr-3">exploring</span>
            new opportunities.
          </p>
        </Column>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default HomeSection6;
