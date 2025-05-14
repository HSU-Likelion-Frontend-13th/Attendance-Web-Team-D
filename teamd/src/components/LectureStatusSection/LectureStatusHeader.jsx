import React from "react";

const LectureStatusHeader = () => (
  <div style={styles.container}>
    <div style={styles.text}>현재 ・ 다음강의</div>
  </div>
);

const styles = {
  container: {
    backgroundColor: "#014099",
    border: "1px solid #004098",
    borderRadius: "100px",
    width: "17.94rem",
    height: "3.81rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "1.5rem",
  },
  text: {
    fontFamily: "Pretendard",
    color: "#FFFFFF",
    fontSize: "1.875rem",
    fontWeight: "500",
  },
};

export default LectureStatusHeader;
