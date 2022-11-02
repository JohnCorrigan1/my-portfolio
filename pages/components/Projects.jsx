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
            image="/todo.png"
            live="https://johncorrigan1.github.io/to-do-list/"
            repo="https://github.com/JohnCorrigan1/to-do-list"
            description="A simle todo list web app created with vanilla Typescript. Has the ability to add tasks with a due date. You can organize these tasks inside different projects or simply add them to the list of all todo's.
            The todo's are stored in browser local storage so they persist if you use the same device and browser."
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
