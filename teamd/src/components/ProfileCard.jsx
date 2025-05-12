import React from "react";

const ProfileCard = () => {
  return (
    <div
      style={{
        backgroundColor: "#d9d9d9",
        padding: "1.5rem",
        borderRadius: "1.875rem", // 30px
        margin: "2rem 5vw",
        width: "41.5625rem", // 665px
        height: "22.125rem", // 354px
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          backgroundColor: "#1746a2",
          color: "white",
          display: "inline-block",
          padding: "0.6rem 1.5rem",
          borderRadius: "2rem",
          fontWeight: "bold",
          marginBottom: "1.5rem",
          fontSize: "1.1rem",
        }}
      >
        나의 프로필
      </div>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <img
          src="/images/profile.png"
          alt="프로필 이미지"
          style={{
            width: "12.875rem", // 206px
            height: "13.1rem", // 209.57px
            objectFit: "cover",
            borderRadius: "1.25rem",
            backgroundColor: "#fff",
          }}
        />
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
                // lineHeight: 1.2,
                gap: "0.5rem",
              }}
            >
              <img
                src="/images/mypage.png"
                alt="마이페이지 아이콘"
                style={{ width: "2.143rem", height: "2.143rem" }} // 34.29px
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
                // lineHeight: 1.2,
                gap: "0.5rem",
              }}
            >
              <img
                src="/images/logout.png"
                alt="로그아웃 아이콘"
                style={{ width: "2.143rem", height: "2.143rem" }} // 34.29px
              />{" "}
              로그아웃
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
