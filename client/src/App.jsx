import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/dashboard/Home";
import Sidebar from "./components/common/Sidebar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <div className="flex">
        {window.location.pathname !== "/" && <Sidebar />}
      </div>
    </>
  );
}

export default App;
