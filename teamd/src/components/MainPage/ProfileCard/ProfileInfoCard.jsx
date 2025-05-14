import React from "react";
import "./css/ProfileInfoCard.css";

const ProfileInfoCard = ({ user }) => {
    if (!user) return null; // 로딩 중 또는 데이터 없음 처리

  return (
    <div className="profile-info-card">
      <div className="profile-info-text">
        <p className="profile-info-name">{user.name}</p>
        <p className="profile-info-major">{user.department}</p>
      </div>
      <div className="profile-info-buttons">
        <button
          type="button"
          aria-label="마이페이지"
          className="profile-button profile-button-left"
        >
          <img
            src="/images/mypage.png"
            alt="마이페이지 아이콘"
            className="profile-button-icon"
          />
          마이페이지
        </button>
        <button
          type="button"
          aria-label="로그아웃"
          className="profile-button profile-button-right"
        >
          <img
            src="/images/logout.png"
            alt="로그아웃 아이콘"
            className="profile-button-icon"
          />
          로그아웃
        </button>
      </div>
    </div>
  );
};

export default ProfileInfoCard;
