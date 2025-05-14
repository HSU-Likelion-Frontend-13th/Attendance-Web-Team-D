import React from "react";

const ProfileImage = () => {
  return (
    <div
      style={{
        paddingLeft: "1rem",
        width: "13.125rem",
        height: "13.625rem",
        display: "flex",
        alignItems: "center",
      }}
    >
      <img
        src="/images/profile.png"
        alt="프로필 이미지"
        style={{
          width: "13.125rem",
          height: "13.098rem",
          objectFit: "cover",
          borderRadius: "1.25rem",
          backgroundColor: "#F1F1F1",
        }}
      />
    </div>
  );
};

export default ProfileImage;
