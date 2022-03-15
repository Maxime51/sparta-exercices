import React, { useEffect, useState } from "react";

type TimerProps = {
  timerId: string;
  removeTimer: string;
};

export const Timer: React.FC<TimerProps> = ({ timerId, removeTimer }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, [count]);

  function deleteTimer(event: any) {
    const parent = document.getElementById("listTimer");
    const idParent = event.target.parentNode;
    parent?.removeChild(idParent);
  }

  return (
    <li key={timerId} id={timerId} className="list-group-item d-flex align-items-center  justify-content-between">
      <p className="text-center">{count} seconds</p>
      <div className="btn btn-danger" onClick={deleteTimer}>
        Delete
      </div>
    </li>
  );
};
