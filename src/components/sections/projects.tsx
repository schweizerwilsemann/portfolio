"use client";
import Image from "next/image";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { FloatingDock } from "../ui/floating-dock";
import Link from "next/link";
import SmoothScroll from "../smooth-scroll";
import projects, { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const ProjectsSection = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto md:h-[130vh]">
      <Link href="#projects">
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 mb-32"
          )}
        >
          Projects
        </h2>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.slice(0, 6).map((project) => (
          <ProjectModal key={project.src} project={project} />
        ))}
      </div>
    </section>
  );
};

const ProjectModal = ({ project }: { project: Project }) => {
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-transparent flex justify-center group/modal-btn">
          <div className="relative w-[400px] h-[300px] rounded-lg overflow-hidden bg-gray-900">
            <Image
              className="w-full h-full object-cover hover:scale-[1.05] transition-all duration-300"
              src={project.src}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
            />
            {/* Enhanced gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 pointer-events-none">
              <div className="flex flex-col h-full items-start justify-end p-6">
                <div className="text-lg text-white font-semibold text-left mb-2 drop-shadow-lg">
                  {project.title}
                </div>
                <div className="text-xs bg-white/90 text-black rounded-lg w-fit px-3 py-1 font-medium shadow-lg">
                  {project.category}
                </div>
              </div>
            </div>
          </div>
        </ModalTrigger>
        
        <ModalBody className="md:max-w-4xl md:max-h-[80%] overflow-auto">
          <SmoothScroll isInsideModal={true}>
            <ModalContent>
              <ProjectContents project={project} />
            </ModalContent>
          </SmoothScroll>
          <ModalFooter className="gap-4">
            <button 
              className="px-4 py-2 bg-gray-200 text-black dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded-md text-sm w-28 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              type="button"
            >
              Cancel
            </button>
            <Link href={project.live} target="_blank" rel="noopener noreferrer">
              <button 
                className="bg-black text-white dark:bg-white dark:text-black text-sm px-4 py-2 rounded-md border border-black dark:border-white w-28 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                type="button"
              >
                Visit
              </button>
            </Link>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
};

const ProjectContents = ({ project }: { project: Project }) => {
  return (
    <>
      <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
        {project.title}
      </h4>
      
      <div className="flex flex-col md:flex-row md:justify-evenly max-w-screen overflow-hidden md:overflow-visible">
        {/* Frontend Skills */}
        <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 text-3xl mb-8">
          <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">
            Frontend
          </p>
          {project.skills.frontend?.length > 0 && (
            <FloatingDock items={project.skills.frontend} />
          )}
        </div>
        
        {/* Backend Skills */}
        {project.skills.backend?.length > 0 && (
          <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 text-3xl mb-8">
            <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">
              Backend
            </p>
            <FloatingDock items={project.skills.backend} />
          </div>
        )}
      </div>
      
      {/* Project Content */}
      <div className="prose dark:prose-invert max-w-none">
        {project.content}
      </div>
    </>
  );
};

export default ProjectsSection;
