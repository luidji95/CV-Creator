import React, { useState } from "react";

const Education = () => {
  const [education, setEducation] = useState([
    {
      universityName: "",
      city: "",
      degree: "",
      subject: "",
      from: "",
      to: "",
    },
  ]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newEducation = [...education];
    newEducation[index][name] = value;
    setEducation(newEducation);
  };

  const addEducation = () => {
    setEducation([
      ...education,
      {
        universityName: "",
        city: "",
        degree: "",
        subject: "",
        from: "",
        to: "",
      },
    ]);
    console.log(education);
  };

  const deleteEducation = (index) => {
    const newEducation = education.filter((_, i) => i !== index);
    setEducation(newEducation);
  };

  return (
    <div className="div-main">
      <h3>Education</h3>
      {education.map((edu, index) => (
        <div key={index} className="education-section">
          <input
            type="text"
            name="universityName"
            placeholder="University Name"
            className="personal-info-input"
            value={edu.universityName}
            onChange={(e) => handleChange(index, e)}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            className="personal-info-input"
            value={edu.city}
            onChange={(e) => handleChange(index, e)}
          />
          <input
            type="text"
            name="degree"
            placeholder="Degree"
            className="personal-info-input"
            value={edu.degree}
            onChange={(e) => handleChange(index, e)}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="personal-info-input"
            value={edu.subject}
            onChange={(e) => handleChange(index, e)}
          />
          <input
            type="date"
            name="from"
            className="personal-info-input"
            value={edu.from}
            onChange={(e) => handleChange(index, e)}
          />
          <input
            type="date"
            name="to"
            className="personal-info-input"
            value={edu.to}
            onChange={(e) => handleChange(index, e)}
          />
          <button className="delete-btn" onClick={() => deleteEducation(index)}>
            Delete
          </button>
        </div>
      ))}
      <button className="add-btn" onClick={addEducation}>
        Add Education
      </button>
    </div>
  );
};

export default Education;

// ne 3 usestate nego jedan cv, setCv = usestate(initialState)
