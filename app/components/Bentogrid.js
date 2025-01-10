/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useTrail, animated, easings } from "@react-spring/web";

import Work from "./Work";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";
import Something from "./Something";
import { GRIDS } from "../constants";

export default function BentoGrid({ setCurrentGrid }) {
  const [nameIdx, setNameIdx] = useState(0);
  const name = "Aditi".split("");

  const [subheadingIdx, setSubheadingIdx] = useState(0);
  const subheading = "Full-Stack Developer".split("");

  const trails = useTrail(7, {
    from: { scale: 0 },
    to: { scale: 1 },
    leave: { scale: 1 },
    config: {
      easing: easings.easeInBack,
      delay: 300,
    },
  });

  useEffect(() => {
    const id = setInterval(() => {
      if (nameIdx < name.length) {
        setNameIdx(nameIdx + 1);
      }
      if (subheadingIdx < subheading.length) {
        setSubheadingIdx(subheadingIdx + 1);
      }
    }, 100);

    return () => {
      clearInterval(id);
    };
  }, [nameIdx, subheadingIdx]);

  return (
    <animated.div className="grid grid-cols-1 md:grid-cols-9 md:grid-rows-9 w-screen md:h-screen p-5 gap-5 bg-stone-200">
      {/* Work Experience */}
      <animated.div
        style={trails[1]}
        className="row-start-5 md:row-span-6 md:col-span-3"
      >
        <div
          className="relative bg-yellow-200 border border-black h-full w-full"
          onClick={() => setCurrentGrid(GRIDS[2])}
        >
          <Work />
        </div>
      </animated.div>

      {/* Projects */}
      <animated.div
        style={trails[2]}
        className="md:row-span-3 md:col-span-3"
      >
        <div
          onClick={() => setCurrentGrid(GRIDS[1])}
          className="relative h-full w-full bg-green-400 border border-black"
        >
          <Projects />
        </div>
      </animated.div>

      <animated.div
        style={trails[3]}
        className="md:col-span-3 md:row-span-3"
      >
        <div className="relative h-full w-full border border-neutral-900 bg-red-500">
          <Something />
        </div>
      </animated.div>

      {/* Main Header */}
      <animated.div
        style={trails[0]}
        className="row-start-1 md:col-span-4 md:row-span-3"
      >
        <div className="h-full w-full p-10 bg-blue-300 border border-black flex flex-col items-center justify-center gap-3">
          <div className="border bg-blue-950 w-fit px-5 py-3">
            <span className="text-5xl font-bold text-mintGreen" id="home">
              {name.slice(0, nameIdx).join("")}
              <span className="inline-block mx-2 w-6 h-1 bg-green-300 animate-pulse"></span>
            </span>
          </div>
          <div className="border text-center border-neutral-900 bg-blue-950 w-fit px-5 py-2">
            <span className="md:text-md text-purple-200">
              {subheading.slice(0, subheadingIdx).join("")}
              <span className="inline-block w-3 h-0.5 mx-1 bg-green-300 animate-pulse"></span>
            </span>
          </div>
        </div>
      </animated.div>

      {/* Blog */}
      <animated.div
        style={trails[4]}
        className="md:row-span-4 md:col-span-2"
      >
        <div className="h-full w-full relative border border-neutral-900 bg-pink-300">
          <Something />
        </div>
      </animated.div>

      {/* Resume */}
      <animated.div
        style={trails[5]}
        className="md:row-span-3 md:col-span-2"
      >
        <div className="h-full w-full relative border border-neutral-900 bg-purple-300">
        <a
            href="/resume.pdf" // Path to your PDF file
            target="_blank" // Opens the file in a new tab
            rel="noopener noreferrer" // For security reasons
          >
              <Resume />
          </a>
        </div>
      </animated.div>

      {/* Contact */}
      <animated.div
        style={trails[6]}
        className="md:row-span-3 md:col-span-5"
      >
        <div className="h-full w-full md:flex justify-between items-center p-10 gap-5 bg-indigo-500 border border-black">
          <Contact />
        </div>
      </animated.div>

      {/* Something */}
      <animated.div
        style={trails[6]}
        className="md:row-span-2 md:col-span-2"
      >
        <div className="h-full w-full relative border border-neutral-900 bg-orange-400">
          <Something />
        </div>
      </animated.div>
    </animated.div>
  );
}
