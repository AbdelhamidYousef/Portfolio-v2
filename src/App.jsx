import { useState, useRef, useEffect } from "react";
import profilePic from "./assets/images/profile.webp";
import Html from "./svgs/Html";
import Css from "./svgs/Css";
import Javascript from "./svgs/Javascript";
import React from "./svgs/React";
import Tailwind from "./svgs/Tailwind";
import Sass from "./svgs/Sass";
import Git from "./svgs/Git";
import Github from "./svgs/Github";
import Vite from "./svgs/Vite";
import Eslint from "./svgs/Eslint";

const sidebarLinks = ["about", "skills", "projects", "contact"];
const technologies = [
  <Html />,
  <Css />,
  <Javascript />,
  <React />,
  <Tailwind />,
  <Sass />,
  <Git />,
  <Github />,
  <Vite />,
  <Eslint />,
];

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const sectionRefs = useRef([]);

  useEffect(() => {
    // Callback
    const intersectionHandler = ([entry]) => {
      if (entry.isIntersecting) setActiveSection(entry.target.id);
    };

    // Observer
    const observer = new IntersectionObserver(intersectionHandler, {});
    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    // Clean up
    return observer.disconnect();
  }, [sectionRefs]);

  // Handler Functions
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex">
      {/* Sidebar Toggle Button */}
      <div className="lg:hidden fixed left-5 top-5 w-12 h-12 rounded-full bg-black/30 z-10 grid place-content-center  focus-within:border-2 focus-within:border-black/60">
        <button
          className="w-5 h-5 flex items-center focus:outline-none"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="#f6f6f6"
            className={`${isSidebarOpen ? "hidden" : "block"}`}
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            fill="#f6f6f6"
            className={`${isSidebarOpen ? "block" : "hidden"}`}
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <header
        className={`${
          isSidebarOpen ? "w-72" : "w-0"
        } fixed left-0 top-0 lg:w-72 h-screen bg-primary grid place-content-center text-center overflow-hidden transition-all duration-1000`}
      >
        <a
          onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
          className="cursor-pointer"
        >
          <img
            src={profilePic}
            alt="Profile Picture"
            title="Profile Picture"
            className="w-40 h-40 rounded-full border-6 border-white/60 shadow mb-8"
          />
        </a>

        <nav>
          <ul>
            {sidebarLinks.map((link, i) => (
              <li
                key={i}
                className={`${
                  activeSection === link ? "text-white" : "text-white/50"
                } hover:text-white mb-4 text-lg font-semibold uppercase`}
              >
                <a
                  href={`#${link}`}
                  onClick={(e) => scrollToSection(e, link)}
                  className="focus:outline-none focus:border-b-2 focus:border-current focus:border-spacing-2"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Main Content  */}
      <main
        className={`${
          isSidebarOpen ? "ml-72" : "ml-0"
        } lg:ml-72 w-full h-screen bg-gray-100/80 px-5 lg:px-10 transition-all duration-1000`}
      >
        {/* About Section */}
        <section
          ref={(el) => sectionRefs.current.push(el)}
          id="about"
          className="min-h-[40rem] h-screen grid content-center"
        >
          <h1 className="font-hero font-bold text-8xl text-slate-700 uppercase">
            Abdulhamid <span className="text-primary">Yousef</span>
          </h1>

          <p className="ml-1 mb-10 font-hero font-medium text-2xl text-slate-500 uppercase tracking-widest">
            Frontend Engineer |{" "}
            <span className="text-primary">React Developer</span>
          </p>

          <p className="max-w-7xl ml-1 mb-10 text-lg text-slate-500/80">
            I specialize in building interactive web applications using React
            and Tailwind / Sass, leveraging their powerful ecosystems to create
            immersive user experiences.
          </p>

          <ul className="ml-1 flex flex-wrap gap-x-2 gap-y-3 lg:gap-x-3">
            {technologies.map((tech, i) => (
              <li key={i} className="w-7 h-7">
                {tech}
              </li>
            ))}
          </ul>
        </section>

        <section
          id="skills"
          ref={(el) => sectionRefs.current.push(el)}
        ></section>

        <section
          id="projects"
          ref={(el) => sectionRefs.current.push(el)}
        ></section>

        <section
          id="contact"
          ref={(el) => sectionRefs.current.push(el)}
        ></section>
      </main>
    </div>
  );
};

export default App;
