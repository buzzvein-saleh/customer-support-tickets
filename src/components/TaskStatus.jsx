import React from "react";

const TaskStatus = ({ tasks, onComplete }) => (
  <div className="bg-white rounded-xl shadow p-4 mb-6">
    <div className="font-semibold text-lg mb-4">Task Status</div>
    {tasks.length === 0 ? (
      <div className="text-gray-400 text-sm">No tasks in progress.</div>
    ) : (
      tasks.map((task) => (
        <div key={task.id} className="flex justify-between items-center mb-3">
          <span className="text-gray-800 font-medium">{task.title}</span>
          <button
            className="btn btn-success btn-sm"
            onClick={() => onComplete(task)}
          >
            Complete
          </button>
        </div>
      ))
    )}
  </div>
);

export default TaskStatus;
