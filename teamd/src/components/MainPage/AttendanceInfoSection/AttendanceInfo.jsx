import React from "react";
import "./css/AttendanceInfo.css";

const AttendanceInfoHeader = () => (
  <div className="attendance-header-wrapper">
    <span className="attendance-header-text">출석 시간 안내</span>
  </div>
);

const AttendanceInfoDetails = () => (
  <div className="attendance-detail-box">
    <p className="attendance-text-main">
      <strong>출석 인정 시간</strong>: 수업 시작 5분 전 ~ 수업시간 5분 후
    </p>
    <p className="attendance-text-main">
      <strong>지각 시간</strong>: 수업 시작 5분 후 ~30분까지
    </p>
    <p className="attendance-text-sub">*이후에는 결석으로 처리됩니다</p>
  </div>
);

const AttendanceInfo = () => {
  return (
    <div className="attendance-wrapper">
      <AttendanceInfoHeader />
      <AttendanceInfoDetails />
    </div>
  );
};

export default AttendanceInfo;
