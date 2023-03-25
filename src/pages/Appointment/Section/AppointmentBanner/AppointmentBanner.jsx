
import { DayPicker } from "react-day-picker";
import bgChair from "../../../../assets/images/bg.png";
import chair from "../../../../assets/images/chair.png";

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {

    


  return (
    <section
      className="lg:w-[1400px] mx-auto"
      style={{
        background: `url(${bgChair})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="hero py-24">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="max-w-xl ml-10 rounded-lg shadow-2xl"
            alt=""
          />
          <div className="bg-white p-5 shadow-xl">
            <DayPicker
            mode = "single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            ></DayPicker>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default AppointmentBanner;
