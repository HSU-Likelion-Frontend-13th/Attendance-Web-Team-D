import React, { useEffect, useState } from "react";
import LectureStatus from "./LectureStatus";

const LectureSection = () => {
  const [lecture, setLecture] = useState(null);

  useEffect(() => {
    const fetchedLecture = {
      id: 1,
      nameOfLecture: "ios프로그래밍",
      time: "18:00:00",
      room: "공학관301",
      division: "A반",
      professor: "이재문",
    };
    setLecture(fetchedLecture);
  }, []);

  return lecture ? <LectureStatus lecture={lecture} /> : null;
};

export default LectureSection;
