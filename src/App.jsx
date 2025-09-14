import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="sm:relative">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
