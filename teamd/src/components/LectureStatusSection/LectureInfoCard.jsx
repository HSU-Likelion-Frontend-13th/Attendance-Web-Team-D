const LectureInfoCard = () => (
  <div style={styles.container}>
    <div style={styles.header}>
      <span>강의명</span>
      <span>강의시간</span>
    </div>
    <div style={styles.details}>
      <div style={styles.detailLeft}>
        <div style={styles.detailItem}>강의실</div>
      </div>
      <div style={styles.detailRight}>
        <div style={styles.detailItem}>분반</div>
        <div style={styles.detailItem}>교수님</div>
      </div>
    </div>
  </div>
);

const styles = {
  container: {
    backgroundColor: "#f1f1f1",
    borderRadius: "2rem",
    padding: "2rem",
    flex: 2,
    minWidth: "250px",
  },
  header: {
    fontFamily: "Pretendard",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-end",
    fontSize: "2.5rem",
    fontWeight: "700",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: "1rem",
    width: "100%",
  },
  detailLeft: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  detailRight: {
    display: "flex",
    gap: "2rem",
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  detailItem: {
    color: "#8A8A8A",
    fontSize: "1.6rem",
  },
};

export default LectureInfoCard;
