import Project from "./Project";

const Projects = () => {
  return (
    <>
      <style jsx>{`.grid-container{
      grid-template-columns: repeat(auto-fit, minmax(350px, 600px));`}</style>
      <div className=" mb-9 grid-container grid justify-center mt-24 gap-20">
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
            title="Ecommerce Store"
            git="/github.svg"
            image="/ecommerce.png"
            live="https://fake-shop-kappa.vercel.app/"
            repo="https://github.com/JohnCorrigan1/fake-shop/"
            description="An Ecommerce store with a functioning shopping cart. The cart slides out from any page and shows all items added to cart. Has the ability to change the quantities of individual items and calculates the total cost.
            This app was built with Nextjs the React framework and redux for managing the carts state throughout the app."
          />
        </div>
        <div>
          <Project
            title="Todo List"
            git="/github.svg"
            image="/todo.png"
            live="https://johncorrigan1.github.io/to-do-list/"
            repo="https://github.com/JohnCorrigan1/to-do-list"
            description="A simle todo list web app created with vanilla Typescript. Has the ability to add tasks with a due date. You can organize these tasks inside different projects or simply add them to the list of all todo's.
            The todo's are stored in browser local storage so they persist if you use the same device and browser."
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
        <div>
          <Project
          title="Tic Tac Toe"
          git="/github.svg"
          image="/tic-tac-toe.png"
          live="https://johncorrigan1.github.io/tic-tac-toe/"
          repo="https://github.com/JohnCorrigan1/tic-tac-toe"
          description="Player vs Player Tic Tac Toe web app built with vanilla Javascript, HTML, and CSS. This project's goal was to use Javascript factory functions and have no global variables or functions. Check it out below."
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
