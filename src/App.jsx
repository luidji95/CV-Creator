import { useState } from "react";
import "./App.css";

function App() {
  const [cv, setCv] = useState({
    personalInfo: {
      firstname: { value: "", placeholder: "" },
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
  const deleteEducation = () => {
    setCv((prevCv) => ({
      ...prevCv,
      education: prevCv.education.slice(0, -1),
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
      <input
        type="text"
        name="firstname"
        placeholder="First Name"
        value={cv.personalInfo.firstname}
        onChange={(e) => handlePersonalInfoChange("firstname", e.target.value)}
      />
      <input
        type="text"
        name="lastname"
        placeholder="Last Name"
        value={cv.personalInfo.lastname}
        onChange={(e) => handlePersonalInfoChange("lastname", e.target.value)}
      />
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={cv.personalInfo.title}
        onChange={(e) => handlePersonalInfoChange("title", e.target.value)}
      />
      <input
        type="text"
        name="photo"
        placeholder="Photo URL"
        value={cv.personalInfo.photo}
        onChange={(e) => handlePersonalInfoChange("photo", e.target.value)}
      />
      <input
        type="text"
        name="adress"
        placeholder="Address"
        value={cv.personalInfo.adress}
        onChange={(e) => handlePersonalInfoChange("adress", e.target.value)}
      />
      <input
        type="text"
        name="phonenumber"
        placeholder="Phone Number"
        value={cv.personalInfo.phonenumber}
        onChange={(e) =>
          handlePersonalInfoChange(e.target.name, e.target.value)
        }
      />
      <input
        type="text"
        name="email"
        placeholder="E-mail"
        value={cv.personalInfo.email}
        onChange={(e) => handlePersonalInfoChange("email", e.target.value)}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={cv.personalInfo.description}
        onChange={(e) =>
          handlePersonalInfoChange("description", e.target.value)
        }
      />

      <h3>Education</h3>
      {cv.education.map((edu, index) => (
        <div key={index}>
          <input
            type="text"
            name="universityName"
            placeholder="University Name"
            value={edu.universityName}
            onChange={(e) =>
              handleEducationChange(index, "universityName", e.target.value)
            }
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={edu.city}
            onChange={(e) =>
              handleEducationChange(index, "city", e.target.value)
            }
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={edu.subject}
            onChange={(e) =>
              handleEducationChange(index, "subject", e.target.value)
            }
          />
          <input
            type="text"
            name="degree"
            placeholder="Degree"
            value={edu.degree}
            onChange={(e) =>
              handleEducationChange(index, "degree", e.target.value)
            }
          />
          <input
            type="text"
            name="from"
            placeholder="From"
            value={edu.from}
            onChange={(e) =>
              handleEducationChange(index, "from", e.target.value)
            }
          />
          <input
            type="text"
            name="to"
            placeholder="To"
            value={edu.to}
            onChange={(e) => handleEducationChange(index, "to", e.target.value)}
          />
        </div>
      ))}
      <button onClick={addEducation}>Add Education</button>
      <button onClick={deleteEducation}>Delete Education</button>

      <h3>Work Experience</h3>
      {cv.workExperience.map((work, index) => (
        <div key={index}>
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={work.companyName}
            onChange={(e) =>
              handleWorkChange(index, "companyName", e.target.value)
            }
          />
          <input
            type="text"
            name="position"
            placeholder="Position"
            value={work.position}
            onChange={(e) =>
              handleWorkChange(index, "position", e.target.value)
            }
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={work.city}
            onChange={(e) => handleWorkChange(index, "city", e.target.value)}
          />
          <input
            type="text"
            name="from"
            placeholder="From"
            value={work.from}
            onChange={(e) => handleWorkChange(index, "from", e.target.value)}
          />
          <input
            type="text"
            name="to"
            placeholder="To"
            value={work.to}
            onChange={(e) => handleWorkChange(index, "to", e.target.value)}
          />
        </div>
      ))}
      <button onClick={addWorkExperience}>Add Work Experience</button>
      <button onClick={deleteWorkExperience}>Delete work experience</button>
    </div>
  );
}

export default App;
// napravit inpute preko petlje
