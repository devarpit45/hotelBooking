import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import ImageSlider from "./components/slider";
import BookingForm from "./components/BookingForm";

function App() {
  const [data, setData] = useState([]);
  const [flights, setFlights] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isBookingComplete, setIsBookingComplete] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8001/api/gethotel")
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData.data || []);
      })
      .catch((err) => console.error("Error fetching hotels:", err));

    fetch("http://localhost:8001/api/getflight")
      .then((response) => response.json())
      .then((responseData) => {
        setFlights(responseData.data || []);
      })
      .catch((err) => console.error("Error fetching flights:", err));
  }, []);

  const handleBookNow = (item) => {
    setSelectedBooking(item);
    setIsBookingComplete(false);
  };

  const handleBookingSubmit = () => {
    setSelectedBooking(null);
    setIsBookingComplete(true);
  };

  return (
    <div className="container">
      <Navbar />
      <ImageSlider />

      {data.map((item) => (
        <div key={item._id} className="box">
          <img
            src={`http://localhost:8001${item.image}`}
            alt={item.name}
            style={{ width: "200px", height: "150px", borderRadius: "10px" }}
          />
          <p>{item.name}</p>
          <p>{"₹" + item.pricePerNight}</p>
          <p>
            <i className="bi bi-geo-alt-fill"></i>
            {item.location}
          </p>
          <button className="btn btn-primary" onClick={() => handleBookNow(item)}>
            Book Now
          </button>
        </div>
      ))}

      <div className="container2">
      <h4 align='center'>Flights</h4>
        {flights.map((item) => (
          <div key={item._id} className="flightbox">
            <p>{item.airline}</p>
            <p>{"₹" + item.price}</p>
            <p>{item.flightNumber}</p>
            <p>
              <i className="bi bi-geo-alt-fill"></i>
              {item.departureAirport} ➝ {item.arrivalAirport}
              <i className="bi bi-geo-alt-fill"></i>
            </p>
            <p>
              <i className="bi bi-clock-fill"></i> {item.departureTime} ➝ {item.arrivalTime}
              <i className="bi bi-clock-fill"></i>
            </p>
            <button className="btn btn-primary" onClick={() => handleBookNow(item)}>
              Book Now
            </button>
          </div>
        ))}
      </div>

      {selectedBooking && <BookingForm item={selectedBooking} onSubmit={handleBookingSubmit} />}
      {isBookingComplete && <p className="success-message">🎉 Booking Done!</p>}
    </div>
  );
}

export default App;
