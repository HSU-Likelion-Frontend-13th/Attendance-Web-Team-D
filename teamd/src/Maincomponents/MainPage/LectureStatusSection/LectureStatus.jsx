import React, { useState, useEffect } from "react";
import LectureStatusHeader from "./LectureStatusHeader";
import LectureInfoCard from "./LectureInfoCard";
import AttendanceButtonCard from "./AttendanceButtonCard";
import "./css/LectureStatus.css";

const LectureStatus = ({ lecture }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!lecture?.time) return;

    const now = new Date();
    const [hour, minute, second] = lecture.time.split(":").map(Number);

    const startTime = new Date();
    startTime.setHours(hour, minute, second || 0, 0);

    const startWindow = new Date(startTime.getTime() - 5 * 60000);
    const endWindow = new Date(startTime.getTime() + 30 * 60000);

    setIsActive(now >= startWindow && now <= endWindow);
  }, [lecture]);

  if (!lecture) return null; 

  return (
    <section className="lecture-status-section">
      <div className="lecture-status-header-row">
        <LectureStatusHeader />
        <span
          className="lecture-status-text"
          style={{ color: isActive ? "#000000" : "#EB3223" }}
        >
          {isActive
            ? "출석체크가 시작되었습니다."
            : "현재는 출석체크 시간이 아닙니다!!"}
        </span>
      </div>

      <div className="lecture-status-card-row">
        <LectureInfoCard lecture={lecture} />
        <AttendanceButtonCard lectureTime={lecture.time} />
      </div>
    </section>
  );
};

export default LectureStatus;
