import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PersonalInformation from "./PersonalInforamtion";
import Education from "./Education";

function App() {
  return (
    <div>
      <PersonalInformation />
      <Education></Education>
    </div>
  );
}

export default App;
