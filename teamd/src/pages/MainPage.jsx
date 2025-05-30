import React from "react";
import CurrentTime from "../Maincomponents/MainPage/CurrentTimeSection/CurrentTime";
import LectureSection from "../Maincomponents/MainPage/LectureStatusSection/LectureSection";
import ProfileCard from "../Maincomponents/MainPage/ProfileCard/ProfileCard";
import AttendanceInfo from "../Maincomponents/MainPage/AttendanceInfoSection/AttendanceInfo";
import "./css/MainPage.css";

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="main-header">
        <div className="main-logo-group">
          <img
            src="/images/Isolation_Mode.png"
            alt="HSU Logo"
            className="main-logo-hsu"
          />
          <img
            src="/images/lion.png"
            alt="Lion Logo"
            className="main-logo-lion"
          />
        </div>
        <CurrentTime />
      </div>

      <div className="main-section">
        <div>
          <LectureSection />
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

export default MainPage;
