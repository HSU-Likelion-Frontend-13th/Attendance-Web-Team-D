import React from "react";
import ProfileBadge from "./ProfileBadge";
import ProfileImage from "./ProfileImage";
import ProfileSection from "./ProfileSection";
import "./css/ProfileCard.css";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <ProfileBadge />
      <div className="profile-card-content">
        <ProfileImage />
        <ProfileSection />
      </div>
    </div>
  );
};

export default ProfileCard;
