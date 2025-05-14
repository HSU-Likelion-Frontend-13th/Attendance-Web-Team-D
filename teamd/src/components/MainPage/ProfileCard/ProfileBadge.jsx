import React from "react";
import "./css/ProfileBadge.css";

const ProfileBadgeWrapper = ({ children }) => (
  <div className="profile-badge-wrapper">
    {children}
  </div>
);

const ProfileBadgeText = () => (
  <span className="profile-badge-text">
    나의 프로필
  </span>
);

const ProfileBadge = () => (
  <ProfileBadgeWrapper>
    <ProfileBadgeText />
  </ProfileBadgeWrapper>
);

export default ProfileBadge;