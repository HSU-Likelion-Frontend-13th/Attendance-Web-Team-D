import LectureStatusHeader from "./LectureStatusSection/LectureStatusHeader";
import LectureInfoCard from "./LectureStatusSection/LectureInfoCard";
import AttendanceButtonCard from "./LectureStatusSection/AttendanceButtonCard";

const LectureStatus = () => {
  return (
    <section
      style={{
        backgroundColor: "#D9D9D9",
        borderRadius: "1.875rem",
        width: "71rem",
        height: "22.125rem",
        padding: "2rem",
        opacity: 1,
      }}
    >
      <LectureStatusHeader />
      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        <LectureInfoCard />
        <AttendanceButtonCard />
      </div>
    </section>
  );
};

export default LectureStatus;
