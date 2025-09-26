import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TicketList from "./components/TicketList";
import TaskStatus from "./components/TaskStatus";
import ResolvedList from "./components/ResolvedList";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [tickets, setTickets] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);
  const [priorityColor, setPriorityColor] = useState({});
  const [statusColor, setStatusColor] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/tickets.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load tickets.json");
        return res.json();
      })
      .then((data) => {
        setTickets(data.tickets);
        setPriorityColor(data.priorityColor);
        setStatusColor(data.statusColor);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

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

  const customerTickets = tickets.filter((t) => t.status !== "Resolved");

  if (loading) {
    return <div className="text-center py-10">Loading dashboard...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="w-full max-w-screen-2xl mx-auto flex-1 px-5 md:px-20">
        <Banner
          inProgressCount={inProgress.length}
          resolvedCount={resolved.length}
        />
        <h2 className="text-2xl font-semibold text-gray-800 mt-8">
          Customer Tickets
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: Tickets */}
          <div className="flex-1 md:w-2/3">
            <TicketList
              tickets={customerTickets}
              onSelect={handleSelectTicket}
              priorityColor={priorityColor}
              statusColor={statusColor}
            />
          </div>
          {/* Right: Task Status & Resolved */}
          <div className="md:w-1/3 flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Task Status
            </h2>
            <TaskStatus
              tasks={inProgress}
              onComplete={handleComplete}
              statusColor={statusColor}
            />
            <ResolvedList resolved={resolved} statusColor={statusColor} />
          </div>
        </div>
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;
