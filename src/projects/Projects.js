import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectThree } from "../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="HERE ARE SOME OF MY CRAFT WORK" des="My Projects" />
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-14"> */}
      <div className="flex md:flex-row lgl:flex-row w-full sml:flex-col gap-10">
        <ProjectsCard
          title="ChatHub App"
          des="ChatHub is a dynamic and user-friendly chatting application that connects people through various groups. 
          With ChatHub, users can join diverse conversation rooms or create their own groups to interact with others who share similar interests, 
          passions, or objectives."
          src={projectThree}
          github_link={"https://github.com/vassa33/ChatHub"}
        />
      </div>
    </section>
  );
};

export default Projects;
