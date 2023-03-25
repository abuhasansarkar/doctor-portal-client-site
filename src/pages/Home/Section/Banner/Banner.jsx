import React from "react";
import Button from "../../../../components/Button/Button";
import chair from "../../../../assets/images/chair.png";

const Banner = () => {
  return (
     <div className="py-24">
        <div className="lg:flex justify-between gap-10 items-center flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="lg:max-w-2xl max-w-xs rounded-lg shadow-2xl" alt="banner"
          />
          <div className="w-full">
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Button>GET STARTED</Button>
          </div>
        </div>
      </div>
  );
};

export default Banner;
