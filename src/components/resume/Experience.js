import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full lgl:w-1/2 md:w-1/2 flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p> */}
          {/* <h2 className="text-4xl font-bold">Job Experience</h2> */}
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Co-Founder/Chief Financial Officer "
            subTitle="December - (Jan 2023 - present)"
            result="Rwanda"
            des="Spearheaded financial operations, implementing data-driven budgeting processes that reduced costs by 20% and increased profitability by 15% YoY.

            "
          />
          <ResumeCard
            title="Deal Sourcing Intern"
            subTitle="IgniteXL Capital (Setpember 2023 - October 2023)"
            result="Rwanda (Remote)"
            des="Researched and reported eleven start-ups for potential investment opportunities"
          />
          <ResumeCard
            title="Software Engineer"
            subTitle="International Training Institute for Skills Development - (May 2023 - Present)"
            result="Rwanda"
            des="Cuurently manages the website and software architecture of the institute. Created a functional database and email administration to synchronize communication in the company"
          />
        </div>
      </div>

      {/*       
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Experience;
