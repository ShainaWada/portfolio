import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { IoLogoReact, IoLogoFigma } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { DiPhotoshop, DiIllustrator } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { IconType } from "react-icons";

export type SkillType = {
  name: string;
  icon: IconType;
  progress: number;
};

export const Skills: SkillType[] = [
  {
    name: "HTML",
    icon: FaHtml5,
    progress: 70,
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
    progress: 70,
  },
  {
    name: "Tailwind CSS",
    icon: RiTailwindCssFill,
    progress: 50,
  },
  {
    name: "React",
    icon: IoLogoReact,
    progress: 75,
  },
  {
    name: "Next.js",
    icon: RiNextjsFill,
    progress: 70,
  },
  {
    name: "TypeScript",
    icon: BiLogoTypescript,
    progress: 50,
  },
  {
    name: "Adobe Photoshop",
    icon: DiPhotoshop,
    progress: 35,
  },
  {
    name: "Adobe Illustrator",
    icon: DiIllustrator,
    progress: 35,
  },
  {
    name: "Figma",
    icon: IoLogoFigma,
    progress: 60,
  },
  {
    name: "Git",
    icon: FaGitAlt,
    progress: 60,
  },
];
