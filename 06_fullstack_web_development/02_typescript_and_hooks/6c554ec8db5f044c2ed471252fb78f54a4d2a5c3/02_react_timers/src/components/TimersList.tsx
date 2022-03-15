import React, { useState } from "react";
import { Timer } from "./Timer";
import { v4 as uuidv4 } from "uuid";

type Timer = {
  id: string;
};

const TimersList: React.FC = () => {
  const [timer, setTimer] = useState<string[]>([]);

  function addTime() {
    const idTimer = uuidv4();
    setTimer([...timer, idTimer]);
  }
  return (
    <ul id="listTimer" className="list-group timers-list">
      <li className="list-group-item text-center">
        <button id="Add a timer" className="btn btn-primary" onClick={addTime}>
          Add a timer
        </button>
      </li>
      {timer.map((timerList) => {
        return <Timer key={timerList} timerId={timerList} removeTimer={"coucou"} />;
      })}
    </ul>
  );
};

export default TimersList;
