import Form from "./components/form";
import Dashboard from "./components/dashboard";

function App() {
  const isLogIn = true;
  const isUserRegistered = false;

  return (
    <>
      <main className="w-full h-screen flex flex-col justify-center items-center">
        {isLogIn ? <Form isUserRegistered={isUserRegistered} /> : <Dashboard />}
      </main>
    </>
  );
}

export default App;
