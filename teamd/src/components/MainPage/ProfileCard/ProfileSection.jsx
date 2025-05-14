import React, { useEffect, useState } from "react";
import ProfileInfoCard from "./ProfileInfoCard";

const ProfileSection = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchedUser = {
      id: 1,
      name: "원준영",
      department: "모바일소프트웨어/웹공학 트랙",
    };
    setUser(fetchedUser);
  }, []);

  return <ProfileInfoCard user={user} />;
};

export default ProfileSection;
