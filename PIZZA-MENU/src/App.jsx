import Header from "./components/header";
import Menu from "./components/menu";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="bg-gray-100 text-gray-800 w-full h-screen flex flex-col items-center">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
}

export default App;
