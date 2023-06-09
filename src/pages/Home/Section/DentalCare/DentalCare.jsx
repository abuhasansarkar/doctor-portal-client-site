import React from "react";
import dentalImg from "../../../../assets/images/treatment.png"
import Button from "../../../../components/Button/Button";

const DentalCare = () => {
  return (
    <div className="pb-24">
      <div className="hero-content flex-col gap-10 lg:flex-row">
        <img
          src={dentalImg}
          className="max-w-lg rounded-lg shadow-2xl" alt="img"
        />
        <div className="ml-14">
          <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
          <p className="py-6">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
          </p>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
