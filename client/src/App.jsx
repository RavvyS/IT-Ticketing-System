import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/dashboard/Home";
import Sidebar from "./components/common/Sidebar";
import Navbar from "./components/common/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* {window.location.pathname !== "/" && <Navbar />} */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
