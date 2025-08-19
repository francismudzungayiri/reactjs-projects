import pizzaData from "../data";
import Pizza from "./pizza";

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="w-2/3 grid grid-cols-2 gap-5">
      {numPizzas > 0 ? (
        pizzaData.map((pizza) => {
          return <Pizza key={pizza.name} pizzaObject={pizza} />;
        })
      ) : (
        <p>We are currently working on our new menu.</p>
      )}
    </main>
  );
}

export default Menu;
