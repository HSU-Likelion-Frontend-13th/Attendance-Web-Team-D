import React from "react";

const AttendanceInfo = () => {
  return (
    <div
      style={{
        backgroundColor: "#d9d9d9",
        padding: "2rem",
        borderRadius: "1.9rem",
        margin: "2rem auto",
        maxWidth: "71rem",
        minHeight: "22rem",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          backgroundColor: "#014099",
          border: "1px solid #004098",
          borderRadius: "6.25rem",
          padding: "0.6rem 1.5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "17.9375rem",
          height: "3.8125rem",
          boxSizing: "border-box",
          marginBottom: "1.8125rem",
        }}
      >
        <span
          style={{
            fontSize: "1.875rem",
            fontWeight: "Medium",
            color: "white",
            fontFamily: "Pretendard",
          }}
        >
          출석 시간 안내
        </span>
      </div>
      <div
        style={{
          backgroundColor: "#f1f1f1",
          borderRadius: "2.5rem",
          padding: "2rem",
          width: "66rem",
          height: "12.375rem",
          boxSizing: "border-box",
        }}
      >
        <p
          style={{
            fontSize: "1.875rem",
            fontWeight: "400",
            fontFamily: "Pretendard",
            color: "#000000",
            lineHeight: "1.8",
            margin: 0,
          }}
        >
          <strong>출석 인정 시간</strong>: 수업 시작 5분 전 ~ 수업시간 5분 후
        </p>
        <p
          style={{
            fontSize: "1.875rem",
            fontWeight: "400",
            fontFamily: "Pretendard",
            color: "#000000",
            lineHeight: "1.4",
            margin: 0,
          }}
        >
          <strong>지각 시간</strong>: 수업 시작 5분 후 ~15분까지
        </p>
        <p
          style={{
            fontSize: "1.5625rem",
            color: "#000000",
            fontWeight: "200",
            marginTop: "1rem",
            fontFamily: "Pretendard",
          }}
        >
          *이후에는 결석으로 처리됩니다
        </p>
      </div>
    </div>
  );
};

export default AttendanceInfo;
