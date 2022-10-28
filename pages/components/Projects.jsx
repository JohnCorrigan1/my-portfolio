import Project from "./Project";

const Projects = () => {
  return (
    <div className="flex gap-24">
      <div>
        <Project title="Fake Store" image="/project1.png" />
      </div>
      <div>
        <Project title="Fake Store" image="/project1.png" />
      </div>
    </div>
  );
};

export default Projects;
