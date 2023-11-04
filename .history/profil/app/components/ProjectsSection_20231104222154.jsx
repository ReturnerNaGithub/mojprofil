"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Creating Robots and Drones in Miners Nation",
    description: "Land will have 5 Levels. In 2. Level comes robots in use.",
    image: "/images/projects/robotdron.gif",
    tag: ["All", "In development..."],
    gitUrl: "https://www.youtube.com/watch?v=oZ8I6Dv8f1k",
    previewUrl: "https://www.youtube.com/watch?v=oZ8I6Dv8f1k",
  },
  {
    id: 2,
    title: "Miners Nation",
    description: "Creating the bast Web3 Game in Unreal Engine",
    image: "/images/projects/Mine.gif",
    tag: ["All", "Games"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Quality Winner Competition",
    description: "We create an project in 45 days and we have a lot of fun",
    image: "/images/projects/rig.gif",
    tag: ["All", "Web"],
    gitUrl:
      "https://opensea.io/collection/untitled-collection-17014328?search[sortAscending]=true&search[sortBy]=PRICE",
    previewUrl: "https://devpost.com/software/buidl-a-rig",
  },
  {
    id: 4,
    title: "Chicken Hunt 3D",
    description: "Blockchain game for hunting chickens and earn Rewards",
    image: "/images/projects/chic.gif",
    tag: ["All", "Games"],
    gitUrl: "https://github.com/ReturnerNaGithub/ChainlinkHackathon",
    previewUrl: "https://www.youtube.com/watch?v=pKmQ1NNXQPs",
  },
  {
    id: 5,
    title: "Crypto Pimp",
    description: "Funny crypto game with NFTs",
    image: "/images/projects/pimp.png",
    tag: ["All", "Games"],
    gitUrl: "/",
    previewUrl: "https://www.youtube.com/watch?v=XmNJ4xtCK94",
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
  {
    id: 7,
    title: "Miners Nation App",
    description: "Creating Dapp for shareholders for NFT-GSD, using Alchemy",
    image: "/images/projects/mineapp.gif",
    tag: ["All", "In development..."],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Emergence for Miners Nation",
    description: "Using Emergency plugin for games on Blockchain",
    image: "/images/projects/emergence.png",
    tag: ["All", ""],
    gitUrl: "https://www.emergence.site/",
    previewUrl: "https://www.youtube.com/watch?v=LsW7aEE0bm8",
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
