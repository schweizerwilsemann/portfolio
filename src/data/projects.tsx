import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "#1a1a1a",
    fg: "#FFFFFF",
    icon: <RiNextjsFill className="text-white w-full h-full" />,
  },
  chakra: {
    title: "Chakra UI", 
    bg: "#1a1a1a",
    fg: "#FFFFFF",
    icon: <SiChakraui className="text-white w-full h-full" />,
  },
  node: {
    title: "Node.js",
    bg: "#1a1a1a", 
    fg: "#FFFFFF",
    icon: <RiNodejsFill className="text-white w-full h-full" />,
  },
  python: {
    title: "Python",
    bg: "#1a1a1a",
    fg: "#FFFFFF", 
    icon: <SiPython className="text-white w-full h-full" />,
  },
  prisma: {
    title: "Prisma",
    bg: "#1a1a1a",
    fg: "#FFFFFF",
    icon: <SiPrisma className="text-white w-full h-full" />,
  },
  postgres: {
    title: "PostgreSQL", 
    bg: "#1a1a1a",
    fg: "#FFFFFF",
    icon: <SiPostgresql className="text-white w-full h-full" />,
  },
  mongo: {
    title: "MongoDB",
    bg: "#1a1a1a",
    fg: "#FFFFFF",
    icon: <SiMongodb className="text-white w-full h-full" />,
  },
  express: {
    title: "Express",
    bg: "#1a1a1a",
    fg: "#FFFFFF",
    icon: <SiExpress className="text-white w-full h-full" />,
  },
  reactQuery: {
    title: "React Query",
    bg: "#1a1a1a",
    fg: "#FFFFFF",
    icon: <SiReactquery className="text-white w-full h-full" />,
  },
  shadcn: {
    title: "ShadCN UI",
    bg: "#1a1a1a",
    fg: "#FFFFFF",
    icon: <SiShadcnui className="text-white w-full h-full" />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "#1a1a1a",
    fg: "#FFFFFF",
    icon: <AceTernityLogo className="w-full h-full" />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "#1a1a1a",
    fg: "#FFFFFF",
    icon: <SiTailwindcss className="text-white w-full h-full" />,
  },
  docker: {
    title: "Docker",
    bg: "#1a1a1a",
    fg: "#FFFFFF",
    icon: <SiDocker className="text-white w-full h-full" />,
  },
  dotnet: {
    title: ".NET",
    bg: "#1a1a1a",
    fg: "#FFFFFF",
    icon: <img src="/assets/icons/dotnet-svgrepo-com.svg" alt=".NET" className="w-full h-full invert" />,
  },
  dart: {
    title: "Dart",
    bg: "#1a1a1a",
    fg: "#FFFFFF",
    icon: <img src="/assets/icons/dart-svgrepo-com.svg" alt="Dart" className="w-full h-full invert" />,
  },
  yjs: {
    title: "Y.js",
    bg: "#1a1a1a",
    fg: "#FFFFFF",
    icon: (
      <span className="text-white w-full h-full flex items-center justify-center">
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "#1a1a1a",
    fg: "#FFFFFF",
    icon: <SiFirebase className="text-white w-full h-full" />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "#1a1a1a",
    fg: "#FFFFFF",
    icon: <SiSocketdotio className="text-white w-full h-full" />,
  },
  js: {
    title: "JavaScript",
    bg: "#1a1a1a",
    fg: "#FFFFFF",
    icon: <SiJavascript className="text-white w-full h-full" />,
  },
  ts: {
    title: "TypeScript",
    bg: "#1a1a1a",
    fg: "#FFFFFF",
    icon: <SiTypescript className="text-white w-full h-full" />,
  },
  vue: {
    title: "Vue.js",
    bg: "#1a1a1a",
    fg: "#FFFFFF",
    icon: <SiVuedotjs className="text-white w-full h-full" />,
  },
  react: {
    title: "React.js",
    bg: "#1a1a1a",
    fg: "#FFFFFF",
    icon: <RiReactjsFill className="text-white w-full h-full" />,
  },
  sanity: {
    title: "Sanity",
    bg: "#1a1a1a",
    fg: "#FFFFFF",
    icon: <SiSanity className="text-white w-full h-full" />,
  },
  spline: {
    title: "Spline",
    bg: "#1a1a1a",
    fg: "#FFFFFF",
    icon: <SiThreedotjs className="text-white w-full h-full" />,
  },
  gsap: {
    title: "GSAP",
    bg: "#1a1a1a",
    fg: "#FFFFFF",
    icon: <span className="text-white font-bold w-full h-full flex items-center justify-center">GSAP</span>,
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "#1a1a1a",
    fg: "#FFFFFF",
    icon: <TbBrandFramerMotion className="text-white w-full h-full" />,
  },
  supabase: {
    title: "Supabase",
    bg: "#1a1a1a",
    fg: "#FFFFFF",
    icon: <SiSupabase className="text-white w-full h-full" />,
  },
  vite: {
    title: "Vite",
    bg: "#1a1a1a",
    fg: "#FFFFFF",
    icon: <SiVite className="text-white w-full h-full" />,
  },
  openai: {
    title: "OpenAI",
    bg: "#1a1a1a",
    fg: "#FFFFFF",
    icon: <img src="/assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI" className="w-full h-full" />,
  },
  netlify: {
    title: "Netlify",
    bg: "#1a1a1a",
    fg: "#FFFFFF",
    icon: <SiNetlify className="text-white w-full h-full" />,
  },
  html: {
    title: "HTML5",
    bg: "#1a1a1a",
    fg: "#FFFFFF",
    icon: <SiHtml5 className="text-white w-full h-full" />,
  },
  css: {
    title: "CSS3",
    bg: "#1a1a1a",
    fg: "#FFFFFF",
    icon: <SiCss3 className="text-white w-full h-full" />,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "#1a1a1a",
    fg: "#FFFFFF",
    icon: <SiBootstrap className="text-white w-full h-full" />,
  },
  maven: {
    title: "Maven",
    bg: "#1a1a1a",
    fg: "#FFFFFF",
    icon: <SiApachemaven className="text-white w-full h-full" />,
  },
  java: {
    title: "Java",
    bg: "#1a1a1a",
    fg: "#FFFFFF",
    icon: <img src="/assets/icons/icons8-java.svg" alt="Java" className="w-full h-full invert" />,
  },
  cplusplus: {
    title: "C++",
    bg: "#1a1a1a",
    fg: "#FFFFFF",
    icon: <SiCplusplus className="text-white w-full h-full" />,
  },
  arduino: {
    title: "Arduino",
    bg: "#1a1a1a",
    fg: "#FFFFFF",
    icon: <SiArduino className="text-white w-full h-full" />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "media-depart",
    category: "Web Development",
    title: "Media Depart",
    src: "/assets/project-svgs/media-depart.svg",
    screenshots: ["media-depart.svg"],
    skills: {
      frontend: [PROJECT_SKILLS.ts, PROJECT_SKILLS.react],
      backend: [],
    },
    live: "https://github.com/schweizerwilsemann/media-depart",
    github: "https://github.com/schweizerwilsemann/media-depart",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A TypeScript project for media content management and distribution. This application provides a modern interface for organizing and sharing media assets.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `/assets/project-svgs/media-depart.svg`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "reading-book-application",
    category: "Web Development",
    title: "Reading Book Application",
    src: "/assets/project-svgs/reading-book.svg",
    screenshots: ["reading-book.svg"],
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.dotnet, PROJECT_SKILLS.docker],
    },
    live: "https://github.com/schweizerwilsemann/reading-book-application",
    github: "https://github.com/schweizerwilsemann/reading-book-application",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A .NET Core API web application for book enthusiasts. This project provides a platform for tracking reading progress, discovering new books, and sharing reviews.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `/assets/project-svgs/reading-book.svg`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "qq-music",
    category: "Mobile App",
    title: "QQ Music",
    src: "/assets/project-svgs/qq-music.svg",
    screenshots: ["qq-music.svg"],
    skills: {
      frontend: [PROJECT_SKILLS.dart],
      backend: [],
    },
    live: "https://github.com/schweizerwilsemann/qq-music",
    github: "https://github.com/schweizerwilsemann/qq-music",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A mobile music application built with Dart. This project provides a clean and intuitive interface for music streaming and playback functionality.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `/assets/project-svgs/qq-music.svg`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "rn-shopeefood-clone",
    category: "Mobile App",
    title: "React Native Shopeefood Clone",
    src: "/assets/project-svgs/image1.png",
    screenshots: ["rn-shopeefood-clone.svg"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.ts],
      backend: [],
    },
    live: "https://github.com/schweizerwilsemann/RN-shopeefood-clone",
    github: "https://github.com/schweizerwilsemann/RN-shopeefood-clone",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A React Native implementation of the Shopeefood interface. This project focuses on creating a seamless mobile interface that interacts with an existing backend, demonstrating advanced React Native skills and UI/UX design principles.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `/assets/project-svgs/rn-shopeefood-clone.svg`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "personal-blog",
    category: "Web Development",
    title: "Personal Blog",
    src: "/assets/project-svgs/personal-blog.svg",
    screenshots: ["personal-blog.svg"],
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.mongo, PROJECT_SKILLS.express],
    },
    live: "https://github.com/schweizerwilsemann/Personal-Blog",
    github: "https://github.com/schweizerwilsemann/Personal-Blog",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A full-stack MERN (MongoDB, Express, React, Node.js) blog application. This project features user authentication, content management, and responsive design for an optimal reading experience across devices.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `/assets/project-svgs/personal-blog.svg`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "network-intrusion-detection-system",
    category: "Desktop Application",
    title: "Network Intrusion Detection System",
    src: "/assets/project-svgs/network-intrusion-detection-system.svg",
    screenshots: ["network-intrusion-detection-system.svg"],
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.python],
    },
    live: "https://github.com/schweizerwilsemann/NETWORK-INTRUSION-DETECTION-SYSTEM-DESKTOP-APPLICATION",
    github: "https://github.com/schweizerwilsemann/NETWORK-INTRUSION-DETECTION-SYSTEM-DESKTOP-APPLICATION",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A Python-based desktop application for network intrusion detection. This system monitors network traffic, identifies potential security threats, and provides alerts for suspicious activities.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `/assets/project-svgs/network-intrusion-detection-system.svg`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "3d-portfolio",
    category: "Web Development",
    title: "3D Portfolio",
    src: "/assets/project-svgs/image.png",
    screenshots: ["3d-portfolio.svg"],
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.react],
      backend: [],
    },
    live: "https://github.com/schweizerwilsemann/3D-portfolio",
    github: "https://github.com/schweizerwilsemann/3D-portfolio",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where creativity meets code in the
            dopest way possible.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Beautiful 3D Objects{" "}
          </TypographyH3>
          <p className="font-mono mb-2">
            Did you see that 3D keyboard modal? Yeah! I made that. That
            interactive keyboard is being rendered in 3D on a webpage 🤯, and
            pressing each keycap reveals a skill in a goofy way. It&apos;s like
            typing, but make it art.
          </p>
          <SlideShow
            images={[
              `/assets/icons/nextjs-svgrepo-com.svg`,
            ]}
          />
          <TypographyH3 className="my-4 ">Space Theme</TypographyH3>
          <p className="font-mono mb-2">
            Dark background + floating particles = out-of-this-world cool.
          </p>
          <SlideShow images={[
              `/assets/icons/nextjs-svgrepo-com.svg`,
            ]} />
          <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>

          <p className="font-mono mb-2">
            My top personal and freelance projects — no filler, all killer.
          </p>
          <SlideShow
            images={[
              `/assets/icons/nextjs-svgrepo-com.svg`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            This site&apos;s not just a portfolio — it&apos;s a whole vibe.
          </p>
        </div>
      );
    },
  },
  { // 04. Smart parking assitant
    id: "smartparkingassitant",
    category: "IoT",
    title: "Smart Parking Assistant",
    src: "/assets/icons/arduino-svgrepo-com.svg",
    screenshots: ["arduino.svg"],
    live: "https://github.com/Abhiz2411/smart-parking-assistant",
    github:"https://github.com/Abhiz2411/smart-parking-assistant",
    skills: {
      frontend: [PROJECT_SKILLS.python],
      backend: [PROJECT_SKILLS.cplusplus, PROJECT_SKILLS.arduino],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Transform parking with the Smart Parking Assistant, an IoT marvel powered by Arduino 
            and IR sensors to detect and recommend the best spots in real-time. Enjoy a sleek GUI 
            that visualizes availability and an intelligent system for quick, optimal decisions. 
            Built to adapt with customizable hardware and Python-powered software for seamless 
            integration. Say goodbye to parking woes and hello to smarter space utilization!
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `/assets/icons/arduino-svgrepo-com.svg`,
            ]}
          />
        </div>
      );
    },
  },
  { // 05. Smart Job Tracker project
    id: "smartjobtracker",
    category: "Full stack",
    title: "Smart Job Tracker",
    src: "/assets/icons/firebase-svgrepo-com.svg",
    screenshots: ["firebase.svg"],
    live: "https://job-tracker-application-eight.vercel.app/",
    github:"https://github.com/Abhiz2411/Job-tracker-application",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.vite],
      backend: [PROJECT_SKILLS.firebase],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Track your job applications effortlessly with a sleek, dark-themed app that lets you 
            manage, filter, and visualize your job search. Organize your applications with a 
            Kanban board, monitor progress through status updates, and store everything securely. 
            Enjoy seamless access across devices with a responsive design and email reminders for 
            interviews. A smarter, more intuitive way to stay on top of your job hunt!
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `/assets/icons/firebase-svgrepo-com.svg`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "systemmonitor",
    category: "System Utilities",
    title: "System Performance Monitor",
    src: "/assets/icons/nodejs-svgrepo-com.svg",
    screenshots: ["nodejs.svg"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.cplusplus, PROJECT_SKILLS.node],
    },
    live: "https://github.com/schweizerwilsemann/system-monitor",
    github: "https://github.com/schweizerwilsemann/system-monitor",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            An advanced system monitoring tool that provides real-time insights into CPU usage, memory allocation, disk I/O, and network performance. Built with a responsive interface for desktop and mobile viewing, this application helps system administrators identify bottlenecks and optimize performance.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `/assets/icons/nodejs-svgrepo-com.svg`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "networkanalyzer",
    category: "Networking",
    title: "Network Traffic Analyzer",
    src: "/assets/icons/python-svgrepo-com.svg",
    screenshots: ["python.svg"],
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.node],
    },
    live: "https://github.com/schweizerwilsemann/network-analyzer",
    github: "https://github.com/schweizerwilsemann/network-analyzer",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A sophisticated network traffic analysis tool that captures, filters, and visualizes packet data in real-time. This application provides detailed insights into network protocols, traffic patterns, and potential security threats, making it an essential tool for network administrators and security professionals.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `/assets/icons/python-svgrepo-com.svg`,
            ]}
          />
        </div>
      );
    },
  },
  { // 06. schweizerwilsemann portfolio project
    id: "schweizerwilsemannportfolio",
    category: "Web Development",
    title: "Schweizer Wilsemann Portfolio",
    src: "/assets/icons/react-svgrepo-com.svg",
    screenshots: ["react.svg"],
    live: "https://github.com/schweizerwilsemann",
    github:"https://github.com/schweizerwilsemann",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.vite],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.cplusplus, PROJECT_SKILLS.python],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital workshop where code meets creativity. As a passionate developer with expertise in web technologies and system architecture, I focus on building robust, efficient solutions that solve real-world problems. My projects range from web applications to system utilities, all crafted with attention to detail and performance. I enjoy exploring new technologies and contributing to open-source projects that make a difference.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `/assets/icons/react-svgrepo-com.svg`,
            ]}
          />
        </div>
      );
    },
  },
];
export default projects;
