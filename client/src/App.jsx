import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  // const isRegisterroute = location.pathname === "/register";

  return (
    <>
      <Header />
      <main className="min-h-[78vh] ">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
