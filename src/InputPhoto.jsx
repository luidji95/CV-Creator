import React, { useState } from "react";

const InputPhoto = ({ name, value, onChange }) => {
  const [fileName, setFileName] = useState(""); // Za prikaz imena fajla

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const photoURL = URL.createObjectURL(file);
      setFileName(file.name); // Čuvanje imena fajla
      onChange(name, photoURL); // Prosleđivanje URL-a roditeljskoj komponenti
    }
  };

  return (
    <div className="input-photo">
      {/* Prilagođeno dugme */}
      <label
        htmlFor={name}
        className={`custom-file-label ${fileName ? "filled" : ""}`}
      >
        {fileName || "Upload Photo"} {/* Prikazuje ime fajla ili placeholder */}
      </label>
      <input
        id={name}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
      {/* Prikaz slike ako postoji */}
      {value && (
        <img
          src={value}
          alt="Uploaded preview"
          style={{ maxWidth: "100px", marginTop: "10px" }}
        />
      )}
    </div>
  );
};

export default InputPhoto;
