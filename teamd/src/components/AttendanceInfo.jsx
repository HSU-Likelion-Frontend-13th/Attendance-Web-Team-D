import React from "react";

const AttendanceInfoHeader = () => (
  <div style={styles.headerWrapper}>
    <span style={styles.headerText}>출석 시간 안내</span>
  </div>
);

const AttendanceInfoDetails = () => (
  <div style={styles.detailBox}>
    <p style={styles.textMain}>
      <strong>출석 인정 시간</strong>: 수업 시작 5분 전 ~ 수업시간 5분 후
    </p>
    <p style={styles.textMain}>
      <strong>지각 시간</strong>: 수업 시작 5분 후 ~15분까지
    </p>
    <p style={styles.textSub}>*이후에는 결석으로 처리됩니다</p>
  </div>
);

const AttendanceInfo = () => {
  return (
    <div style={styles.wrapper}>
      <AttendanceInfoHeader />
      <AttendanceInfoDetails />
    </div>
  );
};

const styles = {
  wrapper: {
    backgroundColor: "#D9D9D9",
    borderRadius: "1.875rem",
    width: "71rem",
    height: "20rem",
    padding: "2rem",
    opacity: 1,
    marginTop: "2.75rem",
  },
  headerWrapper: {
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
  },
  headerText: {
    fontSize: "1.875rem",
    fontWeight: "500",
    color: "white",
    fontFamily: "Pretendard",
  },
  detailBox: {
    backgroundColor: "#f1f1f1",
    borderRadius: "2.5rem",
    padding: "2rem",
    width: "66rem",
    height: "12rem",
    boxSizing: "border-box",
  },
  textMain: {
    fontSize: "1.875rem",
    fontWeight: "400",
    fontFamily: "Pretendard",
    color: "#000000",
    lineHeight: "1.6",
    margin: 0,
  },
  textSub: {
    fontSize: "1.5625rem",
    color: "#000000",
    fontWeight: "200",
    marginTop: "1rem",
    fontFamily: "Pretendard",
  },
};

export default AttendanceInfo;
