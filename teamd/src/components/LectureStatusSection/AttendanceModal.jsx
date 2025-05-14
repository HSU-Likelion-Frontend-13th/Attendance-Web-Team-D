import React from "react";

const AttendanceModal = ({ onClose }) => {
  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContainer}>
        <div style={styles.modalContentWrapper}>
          <div style={styles.modalContent}>
            <div style={styles.icon}>⚠️</div>
            <p style={styles.message}>
              현재는 출석 체크 시간이 아닙니다.
              <br />
              시간을 확인하시고 다시 출석해주세요.
            </p>
          </div>
        </div>
        <div style={styles.buttonWrapper}>
          <button onClick={onClose} style={styles.confirmButton}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  modalOverlay: {
    position: "fixed",
    inset: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(4px)",
    WebkitBackdropFilter: "blur(4px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalContainer: {
    width: "68vw",
    height: "47vh",
    backgroundColor: "#fff",
    borderRadius: "2.5rem",
    padding: "3vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    fontFamily: "Pretendard",
    boxShadow: "0 0.4rem 2rem rgba(0,0,0,0.2)",
    position: "relative",
  },
  modalContentWrapper: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "2vw",
  },
  icon: {
    fontSize: "8vw",
    color: "#F2C94C",
  },
  message: {
    fontSize: "3vw",
    color: "#979797",
    fontWeight: 400,
    lineHeight: 1.6,
    margin: 0,
  },
  buttonWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "2.5vw",
  },
  confirmButton: {
    padding: "1rem 3rem",
    backgroundColor: "#014099",
    color: "#ffffff",
    fontWeight: 600,
    fontSize: "1.5rem",
    border: "none",
    borderRadius: "0.8rem",
    cursor: "pointer",
  },
};

export default AttendanceModal;
