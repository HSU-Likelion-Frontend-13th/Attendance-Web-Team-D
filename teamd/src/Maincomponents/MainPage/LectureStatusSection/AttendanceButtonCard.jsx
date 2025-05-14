import React, { useState, useEffect } from "react";
import AttendanceModal from "./AttendanceModal";
import "./css/AttendanceButtonCard.css";

const AttendanceButtonCard = ({ lectureTime }) => {
  const [status, setStatus] = useState("none");
  const [showModal, setShowModal] = useState(false);
  const [hasAttended, setHasAttended] = useState(false);
  const [isLateMarked, setIsLateMarked] = useState(false);
  const [isAbsentMarked, setIsAbsentMarked] = useState(false);

  useEffect(() => {
    if (!lectureTime) return;

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
      if (isLateMarked) return "지\u00A0\u00A0\u00A0\u00A0\u00A0각";
      if (isLateMarked) return "지\u00A0\u00A0\u00A0\u00A0\u00A0각";
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
        className="attendance-button"
        style={{
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
