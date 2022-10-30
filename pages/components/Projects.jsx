import Project from "./Project";

const Projects = () => {
  return (
    <>
      <style jsx>{`.grid-container{
      grid-template-columns: repeat(auto-fit, minmax(350px, 600px));`}</style>
      <div className="grid-container grid justify-center mt-24 gap-10">
        <div>
          <Project title="Fake Store" image="/project1.png" />
        </div>
        <div>
          <Project title="Fake Store" image="/project1.png" />
        </div>
      </div>
    </>
  );
};

export default Projects;
