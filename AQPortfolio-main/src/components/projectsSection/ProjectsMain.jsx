import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Smart-AI-Cal",
    // year: "Mar2022",
    align: "right",
    image: "../../public/images/image1.png",
    link: "https://smart-calc-u.netlify.app/",
  },
  {
    name: "vidsnap ",
    // year: "Sept2022",
    align: "left",
    image: "https://res.cloudinary.com/dnk1sml4q/image/upload/v1739441236/q1l9lcqpxibrtmuhcnbu.png",
    link: "https://vidsnap-com-utkarsh.netlify.app/",
  },
  {
    name: "Gym-HellFi",
    // year: "Jan2023",
    align: "right",
    image: "https://res.cloudinary.com/dnk1sml4q/image/upload/v1739441233/kc9hcjncmghs5kxq7xbx.png",
    link: "#",
  },
 
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
