import React from "react";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <div className="app-root">
      <h1 className="vibrant-text" style={{fontSize: '2.25rem'}}>
        Reusable Component Demo
      </h1>

      <div className="card">
        <div className="grid-2">
          <div>
            <HomePage />
          </div>
          <div>
            <ProfilePage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
