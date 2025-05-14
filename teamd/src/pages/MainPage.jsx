import React from "react";
import CurrentTime from "../components/CurrentTime";
import LectureStatus from "../components/LectureStatus";
import ProfileCard from "../components/ProfileCard";
import AttendanceInfo from "../components/AttendanceInfo";

const MainPage = () => {
  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <div style={styles.logoGroup}>
          <img
            src="/images/Isolation_Mode.png"
            alt="HSU Logo"
            style={styles.logo1}
          />
          <img src="/images/lion.png" alt="Lion Logo" style={styles.logo2} />
        </div>
        <CurrentTime />
      </div>

      <div style={styles.mainSection}>
        <div>
          <LectureStatus />
        </div>
        <div>
          <ProfileCard />
        </div>
      </div>

      <div>
        <AttendanceInfo />
      </div>
    </div>
  );
};

const styles = {
  page: {
    fontFamily: "sans-serif",
    padding: "2rem",
    backgroundColor: "#fff",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  logoGroup: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  logo1: {
    height: "3.5rem",
    objectFit: "contain",
  },
  logo2: {
    height: "2.5rem",
    objectFit: "contain",
  },
  mainSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: "2rem",
    gap: "2rem",
  },
};

export default MainPage;
