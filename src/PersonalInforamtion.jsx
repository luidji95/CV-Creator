import React, { useState } from "react";

const PersonalInformation = () => {
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
    const { name, value } = e.target;
    setPersonInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Person Info:", personInfo);
  };

  return (
    <div className="div-main">
      <h3>Personal Information</h3>
      <input
        type="text"
        name="firstname"
        placeholder="First Name"
        className="personal-info-input"
        value={personInfo.firstname}
        onChange={handleInfo}
      />
      <input
        type="text"
        name="lastname"
        placeholder="Last Name"
        className="personal-info-input"
        value={personInfo.lastname}
        onChange={handleInfo}
      />
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="personal-info-input"
        value={personInfo.title}
        onChange={handleInfo}
      />
      <input
        type="text"
        name="photo"
        placeholder="Photo URL"
        className="personal-info-input"
        value={personInfo.photo}
        onChange={handleInfo}
      />
      <input
        type="text"
        name="adress"
        placeholder="Address"
        className="personal-info-input"
        value={personInfo.adress}
        onChange={handleInfo}
      />
      <input
        type="text"
        name="phonenumber"
        placeholder="Phone number"
        className="personal-info-input"
        value={personInfo.phonenumber}
        onChange={handleInfo}
      />
      <input
        type="text"
        name="email"
        placeholder="E-mail"
        className="personal-info-input"
        value={personInfo.email}
        onChange={handleInfo}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        className="personal-info-input"
        value={personInfo.description}
        onChange={handleInfo}
      />
      <button className="preview" onClick={handleSubmit}>
        Preview
      </button>
    </div>
  );
};

export default PersonalInformation;
