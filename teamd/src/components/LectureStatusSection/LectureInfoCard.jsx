const LectureInfoCard = () => {
  const lecture = {
    id: 1,
    nameOfLecture: "ios프로그래밍",
    time: "14:00:00",
    room: "탐구관401",
    division: "A반",
    professor: "이재문",
  };
  //   const lecture = null;

  return (
    <div
      style={
        lecture
          ? styles.container
          : {
              ...styles.container,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }
      }
    >
      {lecture ? (
        <div style={styles.columns}>
          <div style={styles.column}>
            <span style={styles.title}>{lecture.nameOfLecture}</span>
            <span style={styles.sub}>{lecture.room}</span>
          </div>
          <div style={styles.column}>
            <span style={styles.title}>{lecture.time}</span>
            <div style={styles.subGroup}>
              <span style={styles.sub}>{lecture.division}</span>
              <span style={styles.sub}>{lecture.professor}</span>
            </div>
          </div>
        </div>
      ) : (
        <span style={styles.emptyText}>강의 정보가 없습니다</span>
      )}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#f1f1f1",
    borderRadius: "2rem",
    padding: "2rem",
    width: "40.8rem",
  },
  columns: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontFamily: "Pretendard",
    fontSize: "2.5rem",
    fontWeight: "700",
  },
  sub: {
    fontFamily: "Pretendard",
    color: "#8A8A8A",
    fontSize: "1.875rem",
    marginTop: "2.7rem",
  },
  subGroup: {
    display: "flex",
    gap: "5rem",
  },
  emptyText: {
    fontSize: "1.8rem",
    fontFamily: "Pretendard",
    color: "#444",
  },
};

export default LectureInfoCard;
