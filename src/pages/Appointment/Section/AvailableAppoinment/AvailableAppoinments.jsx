import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AvailableServices from "./AvailableServices";

const AvailableAppoinments = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);

  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  }, []);
  return (
    <section className="text-center lg:w-[1400px] mx-auto">
      <div className="py-16">
        <h1 className=" text-center text-3xl text-primary mb-5">
          Available Services on <strong>{format(selectedDate, "PP")}</strong>
        </h1>
        <div className="grid grid-cols-3 gap-5">
          {appointmentOptions.map((appointmentOption) => (
            <AvailableServices
              appointmentOption={appointmentOption}
              key={appointmentOption._id}
            ></AvailableServices>
          ))}
        </div>

        {/* The button to open modal */}
        <label htmlFor="popupAppointment" className="btn">
          open modal
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="popupAppointment" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="popupAppointment"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold">
              Congratulations random Internet user!
            </h3>
            <p className="py-4">
              You've been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvailableAppoinments;
