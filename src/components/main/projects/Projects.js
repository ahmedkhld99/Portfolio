import MagicUsage from "./magicBento/MagicUsage";
import "./Projects.css";

export default function Projects() {
  return (
    <>
      <div className="projects-parent" id="projects">
        <h1>
          My <span>Projects</span>
        </h1>
        <MagicUsage />
      </div>
    </>
  );
}
