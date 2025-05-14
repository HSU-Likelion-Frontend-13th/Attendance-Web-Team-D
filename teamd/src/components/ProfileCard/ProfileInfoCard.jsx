

import React from "react";

const ProfileInfoCard = () => {
  return (
    <div
      style={{
        backgroundColor: "#f1f1f1",
        borderRadius: "1.875rem",
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "22.375rem",
        height: "12.375rem",
        border: "1px solid #BABABA",
        boxSizing: "border-box",
      }}
    >
      <div style={{ flex: 1, marginBottom: "1rem" }}>
        <p
          style={{
            fontSize: "1.688rem",
            fontWeight: 700,
            marginBottom: "0.25rem",
          }}
        >
          이지민
        </p>
        <p
          style={{
            fontSize: "1.125rem",
            lineHeight: "1.5",
            color: "#333",
            fontWeight: "400",
          }}
        >
          동양학과 / 미디어 디자인 트랙
        </p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          borderTop: "1px solid #ccc",
          marginTop: "auto",
          height: "3.25rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRight: "1px solid #000000",
            fontSize: "0.938rem",
            fontWeight: 300,
            gap: "0.5rem",
          }}
        >
          <img
            src="/images/mypage.png"
            alt="마이페이지 아이콘"
            style={{ width: "2.143rem", height: "2.143rem" }}
          />{" "}
          마이페이지
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.938rem",
            fontWeight: 300,
            gap: "0.5rem",
          }}
        >
          <img
            src="/images/logout.png"
            alt="로그아웃 아이콘"
            style={{ width: "2.143rem", height: "2.143rem" }}
          />{" "}
          로그아웃
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoCard;