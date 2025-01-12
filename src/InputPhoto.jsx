import React, { useState } from "react";

const InputPhoto = ({ name, value, onChange }) => {
  const [photo, setState] = useState(null);
  const handleFileChange = (e) => {
    const photo = URL.createObjectURL(e.target.files[0]);
  };

  return (
    <div className="input-photo">
      {photo && <img src={photo} />}
      <input type="file" accept="image/*" onChange={handleFileChange} />
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
