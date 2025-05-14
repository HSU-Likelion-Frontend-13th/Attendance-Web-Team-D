import React from "react";

const ProfileBadgeWrapper = ({ children }) => (
  <div
    style={{
      backgroundColor: "#014099",
      border: "1px solid #004098",
      borderRadius: "100px",
      width: "14.5rem",
      height: "3.813rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "1.625rem",
    }}
  >
    {children}
  </div>
);

const ProfileBadgeText = () => (
  <span
    style={{
      fontFamily: "Pretendard",
      color: "#FFFFFF",
      fontSize: "1.875rem",
      fontWeight: "500",
    }}
  >
    나의 프로필
  </span>
);

const ProfileBadge = () => (
  <ProfileBadgeWrapper>
    <ProfileBadgeText />
  </ProfileBadgeWrapper>
);

export default ProfileBadge;
