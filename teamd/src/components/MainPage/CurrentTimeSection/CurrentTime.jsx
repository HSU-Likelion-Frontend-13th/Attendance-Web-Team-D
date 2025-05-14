import React, { useEffect, useState } from "react";
import "./css/CurrentTime.css";

const formatTime = (date) => {
  const pad = (n) => n.toString().padStart(2, "0");
  return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
};

const CurrentTime = () => {
  const [time, setTime] = useState(() => formatTime(new Date()));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(formatTime(new Date()));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="current-time-wrapper">
      <span className="current-time-label">현재시각</span>
      <span className="current-time-value">{time}</span>
    </div>
  );
};

export default CurrentTime;
