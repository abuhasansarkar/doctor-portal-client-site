import React from 'react';

import clock from "../../../../assets/icons/clock.svg";
import marker from "../../../../assets/icons/marker.svg";
import phone from "../../../../assets/icons/phone.svg";
import SingleCard from './SingleCard';

const InfoCard = () => {

     const infoCardData = [
          {
               id: 1,
               icon: clock,
               title: "Opening Hours",
               disc: "lorem ipsum simpley dummi data",
               bgColor: "bg-gradient-to-r from-primary to-secondary"
          },
          {
               id: 2,
               icon: marker,
               title: "Visit Our Location",
               disc: "Panchagarh, Dhaka, Bnagladesh",
               bgColor: "bg-accent"
          },
          {
               id: 3,
               icon: phone,
               title: "Contact Us Now",
               disc: "+88006 565652 652",
               bgColor: "bg-gradient-to-r from-primary to-secondary"
          },
        
     ]


     return (
          <div className='lg:flex justify-between gap-5 py-24 text-white'>
               {
                    infoCardData.map(card => <SingleCard card={card} key={card.id}></SingleCard>)
               }
          </div>
     );
};

export default InfoCard;