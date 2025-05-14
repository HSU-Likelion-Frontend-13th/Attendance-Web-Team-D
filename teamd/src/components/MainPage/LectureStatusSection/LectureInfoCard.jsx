import React from "react";
import "./css/LectureInfoCard.css";

const LectureInfoCard = () => {
  const lecture = {
    id: 1,
    nameOfLecture: "ios프로그래밍",
    time: "14:00:00",
    room: "탐구관401",
    division: "A반",
    professor: "이재문",
  };
  // const lecture = null;

  return (
    <div
      className={
        lecture ? "lecture-card-container" : "lecture-card-container empty"
      }
    >
      {lecture ? (
        <div className="lecture-columns">
          <div className="lecture-column">
            <span className="lecture-title">{lecture.nameOfLecture}</span>
            <span className="lecture-sub">{lecture.room}</span>
          </div>
          <div className="lecture-column">
            <span className="lecture-title">{lecture.time}</span>
            <div className="lecture-sub-group">
              <span className="lecture-sub">{lecture.division}</span>
              <span className="lecture-sub">{lecture.professor}</span>
            </div>
          </div>
        </div>
      ) : (
        <span className="lecture-empty-text">강의 정보가 없습니다</span>
      )}
    </div>
  );
};

export default LectureInfoCard;
