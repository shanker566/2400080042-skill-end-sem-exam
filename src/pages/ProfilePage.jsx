import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Card from "../components/Card";

const ProfilePage = () => {
  return (
    <div className="p-6 space-y-4">
      <Card title="User Profile" bgColor="pink" textColor="black">
        <Input placeholder="Enter your name" borderColor="pink" />
        <Button text="Update Profile" bgColor="purple" rounded="lg" size="lg" />
      </Card>
    </div>
  );
};

export default ProfilePage;
