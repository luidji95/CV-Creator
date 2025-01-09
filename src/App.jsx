import { useState } from "react";
import Input from "./Input";
import Modal from "./Modal";
import "./App.css";

function App() {
  const [cv, setCv] = useState({
    personalInfo: {
      firstname: { value: "", placeholder: "First Name" },
      lastname: { value: "", placeholder: "Last Name" },
      title: { value: "", placeholder: "Title" },
      photo: { value: "", placeholder: "Photo URL" },
      adress: { value: "", placeholder: "Address" },
      phonenumber: { value: "", placeholder: "Phone Number" },
      email: { value: "", placeholder: "E-mail" },
      description: { value: "", placeholder: "Description" },
    },
    education: [
      {
        universityName: { value: "", placeholder: "University Name" },
        city: { value: "", placeholder: "City" },
        degree: { value: "", placeholder: "Degree" },
        subject: { value: "", placeholder: "Subject" },
        from: { value: "", placeholder: "From" },
        to: { value: "", placeholder: "To" },
      },
    ],
    workExperience: [
      {
        companyName: { value: "", placeholder: "Company Name" },
        position: { value: "", placeholder: "Position" },
        city: { value: "", placeholder: "City" },
        from: { value: "", placeholder: "From" },
        to: { value: "", placeholder: "To" },
      },
    ],
    skills: [],
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFieldChange = (section, index, field, value) => {
    setCv((prevCv) => {
      const updatedSection = [...prevCv[section]];
      updatedSection[index] = {
        ...updatedSection[index],
        [field]: { ...updatedSection[index][field], value },
      };
      return { ...prevCv, [section]: updatedSection };
    });
  };

  const handlePersonalInfoChange = (field, value) => {
    setCv((prevCv) => ({
      ...prevCv,
      personalInfo: {
        ...prevCv.personalInfo,
        [field]: { ...prevCv.personalInfo[field], value },
      },
    }));
  };

  const addEducation = () => {
    setCv((prevCv) => ({
      ...prevCv,
      education: [
        ...prevCv.education,
        {
          universityName: { value: "", placeholder: "University Name" },
          city: { value: "", placeholder: "City" },
          degree: { value: "", placeholder: "Degree" },
          subject: { value: "", placeholder: "Subject" },
          from: { value: "", placeholder: "From" },
          to: { value: "", placeholder: "To" },
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

  const addWorkExperience = () => {
    setCv((prevCv) => ({
      ...prevCv,
      workExperience: [
        ...prevCv.workExperience,
        {
          companyName: { value: "", placeholder: "Company Name" },
          position: { value: "", placeholder: "Position" },
          city: { value: "", placeholder: "City" },
          from: { value: "", placeholder: "From" },
          to: { value: "", placeholder: "To" },
        },
      ],
    }));
  };

  const deleteWorkExperience = () => {
    setCv((prevCv) => ({
      ...prevCv,
      workExperience: prevCv.workExperience.slice(0, -1),
    }));
  };

  return (
    <div className="div-main">
      <h3>Personal Information</h3>
      {Object.entries(cv.personalInfo).map(([key, { value, placeholder }]) => (
        <Input
          key={key}
          name={key}
          placeholder={placeholder}
          value={value}
          onChange={(field, newValue) =>
            handlePersonalInfoChange(field, newValue)
          }
        />
      ))}

      <h3>Education</h3>
      {cv.education.map((edu, index) => (
        <div key={index}>
          {Object.entries(edu).map(([key, { value, placeholder }]) => (
            <Input
              key={key}
              name={key}
              placeholder={placeholder}
              value={value}
              onChange={(field, newValue) =>
                handleFieldChange("education", index, field, newValue)
              }
            />
          ))}
        </div>
      ))}
      <button onClick={addEducation}>Add Education</button>
      <button onClick={deleteEducation}>Delete Education</button>

      <h3>Work Experience</h3>
      {cv.workExperience.map((work, index) => (
        <div key={index}>
          {Object.entries(work).map(([key, { value, placeholder }]) => (
            <Input
              key={key}
              name={key}
              placeholder={placeholder}
              value={value}
              onChange={(field, newValue) =>
                handleFieldChange("workExperience", index, field, newValue)
              }
            />
          ))}
        </div>
      ))}
      <button onClick={addWorkExperience}>Add Work Experience</button>
      <button onClick={deleteWorkExperience}>Delete Work Experience</button>

      <button onClick={() => setIsModalOpen(true)}>Preview</button>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <h3>Preview</h3>
          <div>
            <h4>Personal Information</h4>
            {Object.entries(cv.personalInfo).map(([key, { value }]) => (
              <p key={key}>
                {key}: {value}
              </p>
            ))}
          </div>
          <div>
            <h4>Education</h4>
            {cv.education.map((edu, index) => (
              <div key={index}>
                {Object.entries(edu).map(([key, { value }]) => (
                  <p key={key}>
                    {key}: {value}
                  </p>
                ))}
              </div>
            ))}
          </div>
          <div>
            <h4>Work Experience</h4>
            {cv.workExperience.map((work, index) => (
              <div key={index}>
                {Object.entries(work).map(([key, { value }]) => (
                  <p key={key}>
                    {key}: {value}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </Modal>
      )}
    </div>
  );
}

export default App;
