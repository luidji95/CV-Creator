import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [personInfo, setPersonInfo] = useState({
    firstname: "",
    lastname: "",
    title: "",
    photo: "",
    adress: "",
    phonenumber: "",
    email: "",
    description: "",
  });

  const handleInfo = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    const { name, value } = e.target;

    // setPersonInfo((prev) => {
    //   return { ...prev, firstname: e };
    // });
  };

  return (
    <div>
      <h3>Personal information</h3>
      <input
        type="text"
        name="firstname"
        placeholder="First Name"
        className="personal-info-input"
        value={personInfo.firstname}
        onChange={(e) => handleInfo(e)}
      ></input>
      <input
        type="text"
        placeholder="Last Name"
        className="personal-info-input"
        onChange={(e) => setPersonInfo(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Title"
        className="personal-info-input"
        onChange={(e) => setPersonInfo(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Photo"
        className="personal-info-input"
        onChange={(e) => setPersonInfo(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Adress"
        className="personal-info-input"
        onChange={(e) => setPersonInfo(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Phone number"
        className="personal-info-input"
        onChange={(e) => setPersonInfo(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="E-mail"
        className="personal-info-input"
        onChange={(e) => setPersonInfo(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Description"
        className="personal-info-input"
        onChange={(e) => setPersonInfo(e.target.value)}
      ></input>
      <button className="preview">Preview</button>
    </div>
  );
}

export default App;
