import React, { useState } from "react";

function BookingForm({ item, onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking confirmed for:", item.name);
    onSubmit();
  };

  return (
    <div className="booking-form">
      <h2>Book {item.name}</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <button type="submit" className="btn btn-success">Confirm Booking</button>
      </form>
    </div>
  );
}

export default BookingForm;
