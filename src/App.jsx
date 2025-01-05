import { useState } from "react";
import Input from "./Input";
import Modal from "./Modal";
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

  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleWorkChange = (index, field, value) => {
    setCv((prevCv) => {
      const updatedWork = [...prevCv.workExperience];
      updatedWork[index] = {
        ...updatedWork[index],
        [field]: value,
      };
      return { ...prevCv, workExperience: updatedWork };
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

  const addWorkExperience = () => {
    setCv((prevCv) => ({
      ...prevCv,
      workExperience: [
        ...prevCv.workExperience,
        {
          companyName: "",
          position: "",
          city: "",
          from: "",
          to: "",
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

  const workExperienceFields = [
    { name: "companyName", placeholder: "Company Name" },
    { name: "position", placeholder: "Position" },
    { name: "city", placeholder: "City" },
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

      <h3>Work Experience</h3>
      {cv.workExperience.map((work, index) => (
        <div key={index}>
          {workExperienceFields.map((field) => (
            <Input
              key={field.name}
              name={field.name}
              placeholder={field.placeholder}
              value={work[field.name]}
              onChange={(name, value) => handleWorkChange(index, name, value)}
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
            {Object.entries(cv.personalInfo).map(([key, value]) => (
              <p key={key}>
                {key}: {value}
              </p>
            ))}
          </div>
          <div>
            <h4>Education</h4>
            {cv.education.map((edu, index) => (
              <div key={index}>
                {Object.entries(edu).map(([key, value]) => (
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
                {Object.entries(work).map(([key, value]) => (
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
