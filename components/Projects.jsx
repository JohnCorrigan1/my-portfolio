import Project from "./Project";

const Projects = () => {
  return (
    <>
      <style jsx>{`.grid-container{
        grid-template-columns: repeat(auto-fit, minmax(350px, 600px));`}</style>
      <div className=" mb-9 grid-container grid justify-center mt-24 gap-20" id="projects">
      <div>
          <Project
            title="Todo List"
            git="/github.svg"
            image="/todov2.png"
            live="https://todo.johncorrigan.dev/"
            repo="https://github.com/JohnCorrigan1/todo-v2"
            description="A simle todo list web app created with Next.js, Typescript, Firebase, and Tailwind CSS. I built this project to practice using Next.js and Typescript. I also wanted to learn how to use Firebase for authentication and database storage."
          />
        </div>

        <div>
          <Project
            title="Wheres Waldo Game"
            git="/github.svg"
            image="/waldo.png"
            live="https://waldo.johncorrigan.dev/"
            repo="https://github.com/JohnCorrigan1/wheres-waldo/"
            description="A wheres waldo game where players choose one of three levels and have to find three different characters on each level. When a player
            clicks on a character a small modal pops up with the characters name. I built this using Next.js and Tailwind CSS. The images are from the artist Pierre Roussel."
          />
        </div>
        <div>
          <Project
            title="Battleship"
            git="/github.svg"
            image="/battleship.png"
            live="https://johncorrigan1.github.io/battleship/"
            repo="https://github.com/JohnCorrigan1/battleship"
            description="Classic battleship game created using Typescript HTML and CSS. This was the first project I made that 
            involved unit testing using the Javascript testing framework Jest. The goal of this project was to practice test driven  development by writing the tests first and making then writing the code to make the tests pass."
          />
        </div>
        <div>
          <Project
          title="My Components"
          git="/github.svg"
          image="/myComponents.png"
          live="https://components.johncorrigan.dev/"
          repo="https://github.com/JohnCorrigan1/my-notes"
          description="I am slowly creating a library of react components. These are all styled with Tailwind CSS so I can simply copy the code block and drop them into my projects. They are all created by me and a few use Next.js tools but most will work
          out of the box in any React app. As long as Tailwind is installed that is..."
          />
        </div>
        <div>
          <Project
            title="Memory Card Game"
            git="/github.svg"
            image="/memory.png"
            live="https://johncorrigan1.github.io/memory-cards/"
            repo="https://github.com/JohnCorrigan1/memory-cards/"
            description="A memory card where players choose a mode and click on pictures they have not clicked on before. For each mode there is three levels and for each level a player must get 10 unique clicks in a row.
            Each level displays 10 images at a time from a set of 20. After each player click the 10 images are randomly chosen from the set of 20. I built this using React and a the free rick and morty api."
          />
        </div>
        <div>
          <Project
            title="Advanced Database management"
            git="/bitbucket.png"
            image="/3781_erd.png"
            live={null}
            repo="https://bitbucket.org/jcorrigan322/advanced-database-management-lis3781/src/master/"
            description="Bitbucket Repository for my Advanced Database Management course at Florida State Universiry. In this course I learned about different relational databases, non-relational databses, and how to set permissions
            and manage these databases so users can only access and manipulate what they need for their job. These languages include MySql, TSql (MS SQL Server), and MongoDB. The databses were given visual interfaces using MySQL Workbench and MS SQL Server. "
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
