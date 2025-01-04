import { useState } from "react";
import Input from "./Input";
import "./App.css";

function App() {
  const [cv, setCv] = useState({
    personalInfo: {
      firstname: "",
      lastname: "",
      title: "",
      photo: "",
      adress: "",
      phonenumber: "",
      email: "",
      description: "",
    },
    education: [
      {
        universityName: "",
        city: "",
        degree: "",
        subject: "",
        from: "",
        to: "",
      },
    ],
    workExperience: [
      {
        companyName: "",
        position: "",
        city: "",
        from: "",
        to: "",
      },
    ],
    skills: [],
  });

  const handlePersonalInfoChange = (field, value) => {
    setCv((prevCv) => ({
      ...prevCv,
      personalInfo: {
        ...prevCv.personalInfo,
        [field]: value,
      },
    }));
  };

  const handleEducationChange = (index, field, value) => {
    setCv((prevCv) => {
      const updatedEducation = [...prevCv.education];
      updatedEducation[index] = {
        ...updatedEducation[index],
        [field]: value,
      };
      return { ...prevCv, education: updatedEducation };
    });
  };

  const addEducation = () => {
    setCv((prevCv) => ({
      ...prevCv,
      education: [
        ...prevCv.education,
        {
          universityName: "",
          city: "",
          degree: "",
          subject: "",
          from: "",
          to: "",
        },
      ],
    }));
  };

  const deleteEducation = () => {
    setCv((prevCv) => ({
      ...prevCv,
      education: prevCv.education.slice(0, -1),
    }));
  };

  const personalInfoFields = [
    { name: "firstname", placeholder: "First Name" },
    { name: "lastname", placeholder: "Last Name" },
    { name: "title", placeholder: "Title" },
    { name: "photo", placeholder: "Photo URL" },
    { name: "adress", placeholder: "Address" },
    { name: "phonenumber", placeholder: "Phone Number" },
    { name: "email", placeholder: "E-mail" },
    { name: "description", placeholder: "Description" },
  ];

  const educationFields = [
    { name: "universityName", placeholder: "University Name" },
    { name: "city", placeholder: "City" },
    { name: "degree", placeholder: "Degree" },
    { name: "subject", placeholder: "Subject" },
    { name: "from", placeholder: "From" },
    { name: "to", placeholder: "To" },
  ];

  return (
    <div className="div-main">
      <h3>Personal Information</h3>
      {personalInfoFields.map((field) => (
        <Input
          key={field.name}
          name={field.name}
          placeholder={field.placeholder}
          value={cv.personalInfo[field.name]}
          onChange={handlePersonalInfoChange}
        />
      ))}

      <h3>Education</h3>
      {cv.education.map((edu, index) => (
        <div key={index}>
          {educationFields.map((field) => (
            <Input
              key={field.name}
              name={field.name}
              placeholder={field.placeholder}
              value={edu[field.name]}
              onChange={(name, value) =>
                handleEducationChange(index, name, value)
              }
            />
          ))}
        </div>
      ))}
      <button onClick={addEducation}>Add Education</button>
      <button onClick={deleteEducation}>Delete Education</button>
    </div>
  );
}

export default App;
