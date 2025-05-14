import React from "react";
import ProfileBadge from "./ProfileCard/ProfileBadge";
import ProfileImage from "./ProfileCard/ProfileImage";
import ProfileInfoCard from "./ProfileCard/ProfileInfoCard";

const ProfileCard = () => {
  return (
    <div style={styles.card}>
      <ProfileBadge />
      <div style={styles.content}>
        <ProfileImage />
        <ProfileInfoCard />
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#d9d9d9",
    padding: "2rem",
    borderRadius: "1.875rem",
    width: "41.5625rem",
    height: "20rem",
    marginRight: "2.938rem",
  },
  content: {
    display: "flex",
    gap: "1.563rem",
    alignItems: "center",
  },
};

export default ProfileCard;
