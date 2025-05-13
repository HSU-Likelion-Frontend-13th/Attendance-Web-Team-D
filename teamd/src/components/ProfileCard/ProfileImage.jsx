import React from "react";

const ProfileImage = () => {
  return (
    <div style={{ paddingLeft: "1rem" }}>
      <img
        src="/images/profile.png"
        alt="프로필 이미지"
        style={{
          width: "12.875rem", // 206px
          height: "13.1rem", // 209.57px
          objectFit: "cover",
          borderRadius: "1.25rem",
          backgroundColor: "#F1F1F1",
        }}
      />
    </div>
  );
};

export default ProfileImage;
