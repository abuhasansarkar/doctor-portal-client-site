import React from "react";
import Banner from "./Section/Banner/Banner";

import bgChair from "../../assets/images/bg.png";
import bgAppointment from "../../assets/images/appointment.png"
import InfoCard from "./Section/InfoCard/InfoCard";
import Services from "./Section/Services/Services";
import DentalCare from "./Section/DentalCare/DentalCare";
import MakeAppointment from "./Section/MakeAppointment/MakeAppointment";
import Testimonials from "./Section/Testimonial/Testimonials";
import Contact from "./Section/Contact/Contact";

const Home = () => {
  return (
    <>
      <section
        className="lg:w-[1400px] mx-auto"
        style={{
          background: `url(${bgChair})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Banner></Banner>
      </section>
      <section className="lg:w-[1400px] mx-auto">
        <InfoCard></InfoCard>
      </section>
      <section className="lg:w-[1400px] mx-auto">
        <Services></Services>
      </section>
      <section className="lg:w-[1400px] mx-auto">
        <DentalCare></DentalCare>
      </section>
      <section style={{
          background: `url(${bgAppointment})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}>
        <div className="lg:w-[1400px] mx-auto">
          <MakeAppointment></MakeAppointment>
        </div>
      </section>
      <section className="lg:w-[1400px] mx-auto">
        <Testimonials></Testimonials>
      </section>
      <section style={{
          background: `url(${bgAppointment})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}>
        <div className="lg:w-[1400px] mx-auto">
          <Contact></Contact>
        </div>
      </section>
    </>
  );
};

export default Home;
