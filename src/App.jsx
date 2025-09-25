import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TicketList from "./components/TicketList";
import TaskStatus from "./components/TaskStatus";
import ResolvedList from "./components/ResolvedList";
import Footer from "./components/Footer";
import ticketsData from "./data/tickets";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [tickets, setTickets] = useState(ticketsData);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  // Add to Task Status (In Progress)
  const handleSelectTicket = (ticket) => {
    if (
      inProgress.find((t) => t.id === ticket.id) ||
      resolved.find((t) => t.id === ticket.id)
    ) {
      toast.info("Ticket already in progress or resolved.");
      return;
    }
    setInProgress([...inProgress, { ...ticket, status: "In-Progress" }]);
    setTickets(
      tickets.map((t) =>
        t.id === ticket.id ? { ...t, status: "In-Progress" } : t
      )
    );
    toast.success("Ticket added to Task Status!");
  };

  // Complete Task
  const handleComplete = (ticket) => {
    setInProgress(inProgress.filter((t) => t.id !== ticket.id));
    setResolved([...resolved, { ...ticket, status: "Resolved" }]);
    setTickets(
      tickets.map((t) =>
        t.id === ticket.id ? { ...t, status: "Resolved" } : t
      )
    );
    toast.success("Ticket marked as Resolved!");
  };

  // Filter tickets for left column (not resolved)
  const customerTickets = tickets.filter((t) => t.status !== "Resolved");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="w-full max-w-screen-2xl mx-auto flex-1 px-5 md:px-20">
        <Banner
          inProgressCount={inProgress.length}
          resolvedCount={resolved.length}
        />
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          {/* Left: Tickets */}
          <div className="flex-1 md:w-2/3">
            <TicketList
              tickets={customerTickets}
              onSelect={handleSelectTicket}
            />
          </div>
          {/* Right: Task Status & Resolved */}
          <div className="md:w-1/3 flex flex-col gap-6">
            <TaskStatus tasks={inProgress} onComplete={handleComplete} />
            <ResolvedList resolved={resolved} />
          </div>
        </div>
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;
