import React, { useEffect, useState } from "react";

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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      <span
        style={{
          fontSize: "1.5rem",
          fontFamily: "Pretendard, sans-serif",
          fontWeight: 400,
          letterSpacing: "-0.05rem",
          color: "#000",
          marginBottom: "0.3rem",
        }}
      >
        현재시각
      </span>
      <span
        style={{
          fontFamily: "Pretendard, sans-serif",
          fontWeight: 800,
          fontSize: "4.375rem",
          letterSpacing: "-0.1rem",
          color: "#000",
          minWidth: "18.75rem",
          minHeight: "5.25rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        {time}
      </span>
    </div>
  );
};

export default CurrentTime;
