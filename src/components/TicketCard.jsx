import React from "react";

const TicketCard = ({ ticket, onSelect }) => {
  const priorityColor = {
    "HIGH PRIORITY": "badge-error",
    "MEDIUM PRIORITY": "badge-warning",
    "LOW PRIORITY": "badge-success",
  };
  const statusColor = {
    Open: "badge-success",
    "In-Progress": "badge-warning",
    Resolved: "badge-info",
  };
  return (
    <div
      className="bg-white rounded-xl shadow p-4 mb-4 border hover:shadow-lg transition cursor-pointer"
      onClick={() => onSelect(ticket)}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-gray-800">{ticket.title}</span>
        <span className={`badge ${statusColor[ticket.status]}`}>
          {ticket.status}
        </span>
      </div>
      <div className="text-gray-600 text-sm mb-2">{ticket.description}</div>
      <div className="flex justify-between items-center text-xs">
        <span className="text-gray-500">{ticket.id}</span>
        <span className={`badge ${priorityColor[ticket.priority]}`}>
          {ticket.priority}
        </span>
        <span className="text-gray-500">{ticket.customer}</span>
        <span className="text-gray-400">{ticket.createdAt}</span>
      </div>
    </div>
  );
};

export default TicketCard;
