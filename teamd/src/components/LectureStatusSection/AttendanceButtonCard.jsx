import React, { useState, useEffect } from "react";
import AttendanceModal from "./AttendanceModal";

const AttendanceButtonCard = () => {
  const [status, setStatus] = useState("none");
  const [showModal, setShowModal] = useState(false);
  const [hasAttended, setHasAttended] = useState(false);
  const [isLateMarked, setIsLateMarked] = useState(false);
  const [isAbsentMarked, setIsAbsentMarked] = useState(false);

  const lectureTime = "11:00:00";

  useEffect(() => {
    const now = new Date();
    const [hour, minute, second] = lectureTime.split(":").map(Number);
    const start = new Date(now);
    start.setHours(hour, minute, second || 0, 0);

    const startWindow = new Date(start.getTime() - 5 * 60000);
    const endWindow = new Date(start.getTime() + 5 * 60000);
    const extendedWindow = new Date(start.getTime() + 30 * 60000);
    const lastWindow = new Date(start.getTime() + 40 * 60000);

    if (now >= startWindow && now <= endWindow) {
      setStatus("normal");
    } else if (now > endWindow && now <= extendedWindow) {
      setStatus("late");
    } else if (now > extendedWindow && now <= lastWindow) {
      setStatus("absent");
    } else {
      setStatus("none");
    }
  }, [lectureTime]);

  const handleClick = () => {
    if (status === "normal" || status === "late") {
      setHasAttended(true);
      if (status === "late") setIsLateMarked(true);
    } else if (status === "absent") {
      setHasAttended(true);
      setIsAbsentMarked(true);
    } else {
      setShowModal(true);
    }
  };

  const getButtonText = () => {
    if (hasAttended) {
      if (isAbsentMarked) return "결   석";
      if (isLateMarked) return "지   각";
      return "출석완료";
    }
    return "출석하기";
  };

  const getButtonColor = () => {
    if (hasAttended) {
      if (isAbsentMarked) return "#D94A3F";
      if (isLateMarked) return "#F08B53";
      return "#014099";
    }
    if (status === "normal" || status === "late") return "#2C7CE4";
    return "#F1F1F1";
  };

  const getTextColor = () => {
    return hasAttended || status === "normal" || status === "late"
      ? "#ffffff"
      : "#080808";
  };

  return (
    <>
      <button
        onClick={handleClick}
        disabled={hasAttended}
        style={{
          borderRadius: "2rem",
          padding: "2rem",
          width: "21.8rem",
          height: "13rem",
          fontSize: "2.5rem",
          fontWeight: 600,
          fontFamily: "Pretendard",
          border: "none",
          backgroundColor: getButtonColor(),
          color: getTextColor(),
          cursor: hasAttended ? "default" : "pointer",
        }}
      >
        {getButtonText()}
      </button>

      {showModal && <AttendanceModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default AttendanceButtonCard;
