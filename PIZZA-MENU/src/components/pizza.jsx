function Pizza({ pizzaObject }) {
  return (
    <div
      className={`flex gap-3 w-full ${
        pizzaObject.soldOut ? "text-gray-300 blur-xs" : null
      }`}
    >
      <img
        className="w-20 h-20 rounded inline "
        src={pizzaObject.photoName}
        alt={pizzaObject.name}
      />
      <div>
        <h2 className="font-medium text-xl">{pizzaObject.name}</h2>
        <p className="w-full mt-2">{pizzaObject.ingredients}</p>
        <p>{pizzaObject.soldOut ? "Sold Out" : pizzaObject.price}</p>
      </div>
    </div>
  );
}

export default Pizza;
