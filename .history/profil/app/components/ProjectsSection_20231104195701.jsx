"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Creating APP for GS-Damana",
    description: "Using Nextjs with Tailwind",
    image: "/images/projects/damana.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.youtube.com/watch?v=oZ8I6Dv8f1k",
    previewUrl: "https://www.youtube.com/watch?v=oZ8I6Dv8f1k",
  },
  {
    id: 2,
    title: "Miners Nation",
    description: "Creating the bast Web3 Game in Unreal Engine",
    image: "/images/projects/mine1.gif",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Winner Competition",
    description: "Hackathon on Chainlink",
    image: "/images/projects/rig.gif",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Testing Unity",
    description: "Creating space games for costumers",
    image: "/images/projects/discord.gif",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Crypto Pimp",
    description: "Funny crypto game with NFTs",
    image: "/images/projects/pimp.png",
    tag: ["All", "Games"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "NFT-GSD",
    description: "Creating Shareholding NFT token for minting ERC-20 tokens",
    image: "/images/projects/gsd.gif",
    tag: ["All", "In development..."],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="project">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Games"
          isSelected={tag === "Games"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="In development..."
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;