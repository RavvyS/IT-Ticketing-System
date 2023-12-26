import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/dashboard/Home";
import TicketManagementHome from "./pages/dashboard/ticketManagement/TicketManagementHome";
import Dash from "./pages/customer/Dash";
import DetailedView from "./pages/dashboard/ticketManagement/DetailedView";

import { Toaster, toast } from "sonner";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster richColors />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/customer/" element={<Dash />} />
          <Route path="/dashboard/home" element={<Home />} />
          <Route
            path="/dashboard/ticketManagement"
            element={<TicketManagementHome />}
          />
          <Route
            path="/dashboard/ticketManagement/detailedView/:id"
            element={<DetailedView/>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
