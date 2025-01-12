import React, { useState } from "react";

const InputPhoto = ({ name, value, onChange }) => {
  const [photo, setPhoto] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const photoURL = URL.createObjectURL(file); // Kreiramo URL za pregled slike
      setPhoto(photoURL); // Čuvamo URL slike u lokalnom stanju
      onChange(name, file); // Prosleđujemo fajl roditeljskoj komponenti
    }
  };

  return (
    <div className="input-photo">
      {/* Prikaz slike iz lokalnog stanja */}
      {photo && (
        <img
          src={photo}
          alt="Uploaded preview"
          style={{ maxWidth: "100px", marginBottom: "10px" }}
        />
      )}
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {/* Ako postoji vrednost prosleđena iz roditeljske komponente, prikazuje se */}
      {value && !photo && (
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
