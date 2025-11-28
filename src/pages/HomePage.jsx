import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Card from "../components/Card";

const HomePage = () => {
  return (
    <div className="p-6 space-y-4">
      <Card title="Welcome Home" bgColor="blue" textColor="white">
        <p>This is the homepage using reusable components.</p>
        <Input placeholder="Search something..." borderColor="blue" />
        <Button text="Search" bgColor="green" />
      </Card>
    </div>
  );
};

export default HomePage;
