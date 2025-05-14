import React from "react";
import ProfileBadge from "./ProfileBadge";
import ProfileImage from "./ProfileImage";
import ProfileSection from "./ProfileSection"; // ✅ 사용자 정보를 불러오는 컴포넌트
import "./css/ProfileCard.css";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <ProfileBadge />
      <div className="profile-card-content">
        <ProfileImage />
        <ProfileSection /> {/* ✅ 여기에 user fetch + ProfileInfoCard 포함 */}
      </div>
    </div>
  );
};

export default ProfileCard;
