import React from "react";
import fluoride from "../../../../assets/images/fluoride.png";
import cavity from "../../../../assets/images/cavity.png";
import whitening from "../../../../assets/images/whitening.png";
import ServiceItem from "./ServiceItem";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      img: fluoride,
      title: "Fluoride Treatment",
      disc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 2,
      img: cavity,
      title: "Cavity Filling",
      disc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 3,
      img: whitening,
      title: "Teeth Whitening",
      disc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];
  return (
    <div className="pb-24">
      <div className="text-center">
        <h3 className="text-primary text-xl font-bold">Our Services</h3>
        <h2 className="text-3xl font-semiboldbold">Sevices We Provide</h2>
      </div>
      <div className="flex lg:flex gap-5 justify-between">
        {servicesData.map((service) => (
          <ServiceItem service={service} key={service.id}></ServiceItem>
        ))}
      </div>
    </div>
  );
};

export default Services;
