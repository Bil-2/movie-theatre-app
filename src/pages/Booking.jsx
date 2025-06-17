import React, { useState } from "react";
import { useParams } from "react-router-dom";
import QRCode from "qrcode.react";
import SeatSelector from "../components/SeatSelector";

function Booking() {
  const { id } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [confirmed, setConfirmed] = useState(false);

  const handleBook = () => {
    if (selectedSeats.length > 0) {
      setConfirmed(true);
    } else {
      alert("Please select at least one seat.");
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Book Seats</h1>
      <SeatSelector selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />
      <button
        onClick={handleBook}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Confirm Booking
      </button>

      {confirmed && (
        <div className="mt-6 p-4 bg-green-700 rounded text-white">
          <h2 className="text-xl font-bold">Booking Confirmed!</h2>
          <p>Movie ID: {id}</p>
          <p>Seats: {selectedSeats.join(", ")}</p>
          <div className="mt-4">
            <QRCode value={`Movie-${id}-Seats-${selectedSeats.join("-")}`} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Booking;
