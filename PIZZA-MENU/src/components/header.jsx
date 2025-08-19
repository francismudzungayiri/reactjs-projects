function Header() {
  return (
    <header className="m-4 flex flex-col items-center">
      <h1 className="text-yellow-300 text-7xl font-extralight text-center">
        - Fast React Pizza Co -
      </h1>
      <div className="my-4 p-5 border-y-2 border-gray-900 w-fit">
        <p className="text-2xl font-bold">Our Menu</p>
      </div>
      <p className="text-center w-3/5 ">
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
    </header>
  );
}

export default Header;
