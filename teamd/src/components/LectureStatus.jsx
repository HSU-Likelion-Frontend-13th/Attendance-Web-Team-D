

import React from "react";

const LectureStatus = () => {
  return (
    <div
      style={{
        backgroundColor: "#d9d9d9",
        padding: "2rem",
        borderRadius: "1.875rem",
        margin: "2rem 5vw",
        width: "71rem",
        height: "22.125rem",
        boxSizing: "border-box"
      }}
    >
      <div
        style={{
          backgroundColor: "#1746a2",
          color: "white",
          display: "inline-block",
          padding: "0.6rem 1.5rem",
          borderRadius: "2rem",
          fontWeight: "bold",
          fontSize: "1.1rem",
          marginBottom: "1.5rem",
        }}
      >
        현재 ・ 다음강의
      </div>

      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        <div
          style={{
            backgroundColor: "#f1f1f1",
            borderRadius: "2rem",
            padding: "2rem",
            flex: 2,
            minWidth: "250px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-around", fontSize: "1.4rem", fontWeight: "bold" }}>
            <span>강의명</span>
            <span>강의시간</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around", marginTop: "1rem", color: "#888" }}>
            <span>강의실</span>
            <span>분반</span>
            <span>교수님</span>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#f1f1f1",
            borderRadius: "2rem",
            padding: "2rem",
            flex: 1,
            minWidth: "180px",
            fontSize: "1.5rem",
            fontWeight: "bold",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          출석하기
        </div>
      </div>
    </div>
  );
};

export default LectureStatus;