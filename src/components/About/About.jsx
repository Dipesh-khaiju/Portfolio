import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-full  bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-canter w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-base sm:text-xl mt-20">
          I'm Dipesh Khaiju, a 20-year-old student passionate about coding and
          technology. Currently pursuing my education, I'm on a mission to
          become a professional developer and make a meaningful impact in the
          tech industry.
        </p>
        <br />
        <p className="sm:text-xl  hidden sm:block ">
          Ever since I wrote my first line of code, I've been captivated by the
          endless possibilities of software development. From building simple
          projects to exploring complex algorithms, coding has become more than
          just a hobby—it's my driving force. I thrive on challenges and am
          constantly seeking opportunities to expand my skills and knowledge.
        </p>
        <br />
        <p className="sm:text-xl text-base">
          As I continue on my journey, my goal is not only to become a
          proficient developer but also to contribute to projects that make a
          positive difference in people's lives. I envision a future where
          technology empowers individuals and communities, and I'm excited to be
          a part of that transformation.
        </p>
        <br />
        <p className=" text-base sm:text-xl">
          I'm always eager to collaborate with like-minded individuals and
          organizations. Whether you're looking for a passionate coder to join
          your team or simply want to discuss the latest tech trends, feel free
          to reach out—I'd love to connect!
        </p>

        <br />
      </div>
    </div>
  );
};

export default About;
