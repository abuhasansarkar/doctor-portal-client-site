import React, { useState } from "react";
import AppointmentBanner from "./Section/AppointmentBanner/AppointmentBanner";
import AvailableAppoinments from "./Section/AvailableAppoinment/AvailableAppoinments";

const Appointment = () => {
     const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <>
      <AppointmentBanner
      selectedDate={selectedDate} setSelectedDate={setSelectedDate}
      ></AppointmentBanner>
      <AvailableAppoinments
      selectedDate={selectedDate}
      ></AvailableAppoinments>
    </>
  );
};

export default Appointment;
