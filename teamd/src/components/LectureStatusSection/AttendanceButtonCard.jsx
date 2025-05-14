import React from "react";

const AttendanceButtonWrapper = ({ children }) => (
  <div
    style={{
      backgroundColor: "#f1f1f1",
      borderRadius: "2rem",
      padding: "5rem",
      minWidth: "180px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "2.5rem",
    }}
  >
    {children}
  </div>
);

const AttendanceButtonText = () => (
  <span
    style={{
      fontSize: "2.5rem",
      fontWeight: 600,
      textAlign: "center",
      fontFamily: "Pretendard",
      color: "#080808",
    }}
  >
    출석하기
  </span>
);

const AttendanceButtonCard = () => (
  <AttendanceButtonWrapper>
    <AttendanceButtonText />
  </AttendanceButtonWrapper>
);

export default AttendanceButtonCard;
