import React from "react";
import "./css/ProfileImage.css";

const ProfileImage = () => {
  return (
    <div className="profile-image-wrapper">
      <img
        src="/images/profile.png"
        alt="프로필 이미지"
        className="profile-image"
      />
    </div>
  );
};

export default ProfileImage;
