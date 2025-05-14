import LectureStatusHeader from "./LectureStatusSection/LectureStatusHeader";
import LectureInfoCard from "./LectureStatusSection/LectureInfoCard";
import AttendanceButtonCard from "./LectureStatusSection/AttendanceButtonCard";
import { useState, useEffect } from "react";

const LectureStatus = () => {
  const [isActive, setIsActive] = useState(false);
  const lectureTime = "11:30:00";

  useEffect(() => {
    if (!lectureTime) return;

    const now = new Date();
    const [hour, minute, second] = lectureTime.split(":").map(Number);

    const startTime = new Date();
    startTime.setHours(hour, minute, second || 0, 0);

    const startWindow = new Date(startTime.getTime() - 5 * 60000);
    const endWindow = new Date(startTime.getTime() + 30 * 60000);

    setIsActive(now >= startWindow && now <= endWindow);
  }, [lectureTime]);

  return (
    <section style={styles.section}>
      <div style={styles.headerRow}>
        <LectureStatusHeader />
        <span
          style={{
            ...styles.statusText,
            color: isActive ? "#000000" : "#EB3223",
          }}
        >
          {isActive
            ? "출석체크가 시작되었습니다."
            : "현재는 출석체크 시간이 아닙니다!!"}
        </span>
      </div>

      <div style={styles.cardRow}>
        <LectureInfoCard />
        <AttendanceButtonCard />
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: "#D9D9D9",
    borderRadius: "1.875rem",
    width: "71rem",
    height: "20rem",
    padding: "2rem",
    opacity: 1,
  },
  headerRow: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    marginBottom: "1.5rem",
  },
  statusText: {
    fontFamily: "Pretendard",
    fontSize: "2.188rem",
    fontWeight: 600, 
    marginTop: "-1.0rem",
  },
  cardRow: {
    display: "flex",
    gap: "2rem",
    marginTop: "1.5rem",
  },
};

export default LectureStatus;
