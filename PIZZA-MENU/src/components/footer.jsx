const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="mt-10">
      {isOpen ? (
        <div className="flex flex-col justify-center items-center">
          <p>
            We are open until {closeHour}00hrs. Come visit us or Order online.
          </p>
          <button className="px-8 py-4 bg-amber-300 rounded mt-4">
            Order now
          </button>
        </div>
      ) : (
        <p className="text-red-400">
          We're currently closed we open at {openHour}00hrs.
        </p>
      )}
    </footer>
  );
};

export default Footer;
