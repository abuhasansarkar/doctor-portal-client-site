import React from "react";
import doctor from "../../../../assets/images/doctor-small.png";
import Button from "../../../../components/Button/Button";

const MakeAppointment = () => {
  return (
    <div className="text-white my-24">
      <div className="hero-content p-0 flex-col lg:flex-row">
        <img src={doctor} className="max-w-2xl -mt-24" alt="img" />
        <div className="">
          <h1 className="text-3xl text-primary font-bold">Appintment</h1>
          <h1 className="text-5xl font-bold">Make an appointment Tody</h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default MakeAppointment;
