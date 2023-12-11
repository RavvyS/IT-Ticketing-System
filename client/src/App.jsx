import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/dashboard/Home";
import TicketManagement from "./pages/dashboard/TicketManagement";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard/home" element={<Home/>} />
          <Route path="/dashboard/ticketManagement" element={<TicketManagement/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
