import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full lgl:w-1/2 md:w-1/2 flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-5"></div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc(Hons) - Software Engineering"
            subTitle="The African Leadership University (ALU)"
            result="4.3/5"
            des="The ALU Software Engineering is a three-year undergraduate degree that blend the technical education with leadership developement."
          />

          <ResumeCard
            title="Bootcamp - Junior Software Development Program"
            subTitle="BAG"
            result="Graduated"
            des="Gained hands-on experience on Full Stack Development. Built a todo list app."
          />
          <ResumeCard
            title="Software Engineering"
            subTitle="ALX"
            result="In Progess"
            des="ALX Programme is a one year hands-on experience in software engineering. Got to learn C, Javascript, Python etc."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
