import React from "react";
import TicketCard from "./TicketCard";

const TicketList = ({ tickets, onSelect, priorityColor, statusColor }) => (
  <div>
    <div className="font-semibold text-lg mb-4">Customer Tickets</div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {tickets.length === 0 ? (
        <div className="text-gray-400 text-sm col-span-2">
          No tickets available.
        </div>
      ) : (
        tickets.map((ticket) => (
          <TicketCard
            key={ticket.id}
            ticket={ticket}
            onSelect={onSelect}
            priorityColor={priorityColor}
            statusColor={statusColor}
          />
        ))
      )}
    </div>
  </div>
);

export default TicketList;
