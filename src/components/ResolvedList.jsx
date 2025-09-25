import React from "react";

const ResolvedList = ({ resolved }) => (
  <div className="bg-white rounded-xl shadow p-4">
    <div className="font-semibold text-lg mb-4">Resolved Task</div>
    {resolved.length === 0 ? (
      <div className="text-gray-400 text-sm">No resolved tasks yet.</div>
    ) : (
      resolved.map((task) => (
        <div key={task.id} className="flex justify-between items-center mb-3">
          <span className="text-gray-800 font-medium">{task.title}</span>
          <span className="badge badge-info">Resolved</span>
        </div>
      ))
    )}
  </div>
);

export default ResolvedList;
