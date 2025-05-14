import React from "react";
import ProfileBadge from "./ProfileCard/ProfileBadge";
import ProfileImage from "./ProfileCard/ProfileImage";
import ProfileInfoCard from "./ProfileCard/ProfileInfoCard";

const ProfileCard = () => {
  return (
    <div
      style={{
        backgroundColor: "#d9d9d9",
        padding: "2rem",
        borderRadius: "1.875rem",
        width: "41.5625rem",
        height: "22.125rem",
        marginRight: "2.938rem",
      }}
    >
      <ProfileBadge />
      <div style={{ display: "flex", gap: "1.563rem", alignItems: "center" }}>
        <ProfileImage />
        <ProfileInfoCard />
      </div>
    </div>
  );
};

export default ProfileCard;
