import React from "react";
import SolvedTicketsCard from "../other/SolvedTicketsCard";
import PendingTicketsCard from "../other/PendingTicketsCard";
import TotalTicketsCard from "../other/TotalTicketsCard";

const TicketCardContainer = () => {
  return (
    <div className="flex m-5 justify-center items-center gap-4">
      <SolvedTicketsCard />
      <PendingTicketsCard />
      <TotalTicketsCard />
    </div>
  );
};

export default TicketCardContainer;
