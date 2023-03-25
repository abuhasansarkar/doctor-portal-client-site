import React from "react";

const AvailableServices = ({appointmentOption}) => {
     const {name, slots} = appointmentOption;
  return (
    <div className="card w-96 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl text-primary">{name}!</h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another Day...!"}</p>
        <p>{slots.length} {slots.length <= 1 ? 'Space' : 'Spaces'} Available</p>
        <div className="card-actions justify-end">
          <button htmlFor="popupAppointment" className="btn btn-primary text-white">Booked Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default AvailableServices;
