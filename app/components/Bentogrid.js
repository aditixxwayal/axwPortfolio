import Work from "./Work";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";
import Something from "./Something";
import { GRIDS } from "../constants";

export default function Bentogrid({ setCurrentGrid }) {
  const name = "Aditi";
  const subheading = "Software Developer";

  return (
    <div className="grid grid-cols-1 md:grid-cols-9 md:grid-rows-9 w-screen md:h-screen p-5 gap-5 bg-stone-200">
      {/* Work Experience */}
      <div className="row-start-5 md:row-span-6 md:col-span-3">
        <div
          className="relative bg-yellow-200 border border-black h-full w-full"
          onClick={() => setCurrentGrid(GRIDS[2])}
        >
          <Work />
        </div>
      </div>

      {/* Projects */}
      <div className="md:row-span-3 md:col-span-3">
        <div
          onClick={() => setCurrentGrid(GRIDS[1])}
          className="relative h-full w-full bg-green-400 border border-black"
        >
          <Projects />
        </div>
      </div>

      {/* Main Header */}
      <div className="md:col-span-4 md:row-span-3">
        <div className="h-full w-full p-10 bg-blue-300 border border-black flex flex-col items-center justify-center gap-3">
          <div className="border bg-blue-950 w-fit px-5 py-3">
            <span className="text-5xl font-bold text-mintGreen" id="home">
              {name}
              <span className="inline-block mx-2 w-6 h-1 bg-green-300"></span>
            </span>
          </div>
          <div className="border text-center border-neutral-900 bg-blue-950 w-fit px-5 py-2">
            <span className="md:text-md text-purple-200">
              {subheading}
              <span className="inline-block w-3 h-0.5 mx-1 bg-green-300"></span>
            </span>
          </div>
        </div>
      </div>

      {/* Misc */}
      <div className="md:row-span-2 md:col-span-2">
        <div className="h-full w-full relative border border-neutral-900 bg-teal-200 text-blue-500">
          <Something />
        </div>
      </div>

      {/* Resume */}
      <div className="md:row-span-3 md:col-span-2">
        <div className="h-full w-full relative border border-neutral-900 bg-purple-300">
          <Resume />
        </div>
      </div>

      {/* Contact */}
      <div className="md:row-span-3 md:col-span-5">
        <div className="h-full w-full md:flex justify-between items-center p-10 gap-5 bg-pink-300 border border-black">
          <Contact />
        </div>
      </div>

      {/* Misc */}
      <div className="md:row-span-2 md:col-span-2">
        <div className="h-full w-full relative border border-neutral-900 bg-orange-400">
          <Something />
        </div>
      </div>
    </div>
  );
}
