import React from "react";

function SeatSelector({ selectedSeats, setSelectedSeats }) {
  const seats = Array.from({ length: 30 }, (_, i) => i + 1);

  const toggleSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <div className="grid grid-cols-6 gap-2">
      {seats.map((seat) => (
        <button
          key={seat}
          onClick={() => toggleSeat(seat)}
          className={`p-2 rounded ${
            selectedSeats.includes(seat)
              ? "bg-green-500"
              : "bg-gray-600 hover:bg-gray-500"
          } text-white`}
        >
          {seat}
        </button>
      ))}
    </div>
  );
}

export default SeatSelector;
