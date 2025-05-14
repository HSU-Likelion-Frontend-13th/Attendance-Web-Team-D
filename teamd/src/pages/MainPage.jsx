import React from "react";
import CurrentTime from "../components/CurrentTime";
import LectureStatus from "../components/LectureStatus";
import ProfileCard from "../components/ProfileCard";
import AttendanceInfo from "../components/AttendanceInfo";

const MainPage = () => {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "2rem",
        backgroundColor: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <img
            src="/images/Isolation_Mode.png"
            alt="HSU Logo"
            style={{ height: "3.5rem", objectFit: "contain" }}
          />
          <img
            src="/images/lion.png"
            alt="Lion Logo"
            style={{ height: "2.5rem", objectFit: "contain" }}
          />
        </div>
        <CurrentTime />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginTop: "2rem",
          gap: "2rem",
        }}
      >
        {" "}
        {/* ensures exact 32px spacing */}
        <div>
          <LectureStatus />
        </div>
        <div>
          <ProfileCard />
        </div>
      </div>

      {/* 하단 출석정보 */}
      <div>
        <AttendanceInfo />
      </div>
    </div>
  );
};

export default MainPage;
