import React from 'react';
import Project1 from '../assets/img/project-1.jpg';
import Project2 from '../assets/img/project-2.jpg';
import { TbArrowNarrowRight } from 'react-icons/tb';

const Project = () => {
  return (
    <section className="section bg-[#333333]">
      <div className="container mx-auto" data-aos="zoom-in">
        <div className="mb-12">
          <div className="my-2">
            <h1 className="text-3xl font-bold text-underline">Projects</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* item 1 */}
          <div className="flex flex-col items-center border max-w-[500px] mx-auto">
            <div className="relative overflow-hidden group">
              <div className="invisible group-hover:visible flex flex-col justify-center items-center gap-4 z-10 transition-all ease-in-out absolute top-0 left-0 w-full h-full bg-black/50">
                <a href="https://tmovies-app.netlify.app/" target="_blank" className="btn">
                  Live Demo
                </a>
                <a
                  href="https://github.com/Yuiichann/movie-react-app"
                  target="_blank"
                  className="btn"
                >
                  Source
                </a>
              </div>
              <img
                src={Project1}
                alt=""
                className="scale-100 group-hover:scale-105 transition-all ease-in-out"
              />
            </div>
            {/* Title */}
            <div className="w-full min-h-[200px]">
              <h1 className="p-2 text-center text-xl lg:text-2xl font-bold hover:text-red-400 transition-all">
                Tmovies - Website Movies
              </h1>
              <h3 className="ml-2 my-2 textl-xl font-normal">Technology:</h3>
              <ul className="ml-6 mb-4 italic">
                <li className="tech-item">
                  <TbArrowNarrowRight /> ReactJS
                </li>
                <li className="tech-item">
                  <TbArrowNarrowRight /> SCSS
                </li>
                <li className="tech-item">
                  <TbArrowNarrowRight /> AXIOS
                </li>
              </ul>
            </div>
          </div>

          {/* item 2 */}
          <div className="flex flex-col items-center border max-w-[500px] mx-auto">
            <div className="relative overflow-hidden group">
              <div className="invisible group-hover:visible flex flex-col justify-center items-center gap-4 z-10 transition-all ease-in-out absolute top-0 left-0 w-full h-full bg-black/50">
                <a href="https://ycmovies.vercel.app/" target="_blank" className="btn">
                  Live Demo
                </a>
                <a href="https://github.com/Yuiichann/yc-movies" target="_blank" className="btn">
                  Source
                </a>
              </div>
              <img
                src={Project2}
                alt="project 2"
                className="scale-100 group-hover:scale-105 transition-all ease-in-out"
              />
            </div>
            {/* Title */}
            <div className="w-full min-h-[200px]">
              <h1 className="p-2 text-center text-xl lg:text-2xl font-bold hover:text-red-400 transition-all">
                YCMovies - Website Movies
              </h1>
              <h3 className="ml-2 my-2 textl-xl font-normal">Technology:</h3>
              <ul className="ml-6 mb-4 italic">
                <li className="tech-item">
                  <TbArrowNarrowRight /> ReactJS
                </li>
                <li className="tech-item">
                  <TbArrowNarrowRight /> TypeScript
                </li>
                <li className="tech-item">
                  <TbArrowNarrowRight /> SCSS
                </li>
                <li className="tech-item">
                  <TbArrowNarrowRight /> Axios
                </li>
                <li className="tech-item">
                  <TbArrowNarrowRight /> Firebase Authentication, Firestore
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
