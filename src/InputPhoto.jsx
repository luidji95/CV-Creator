import React from "react";

const InputPhoto = ({ name, value, onChange }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange(name, reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="input-photo">
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
