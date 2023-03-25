import React from 'react';
import quote from "../../../../assets/icons/quote.svg";
import people1 from "../../../../assets/images/people1.png";
import people2 from "../../../../assets/images/people2.png";
import people3 from "../../../../assets/images/people3.png";
import TestimonialItem from './TestimonialItem';

const Testimonials = () => {

     const testimonialData = [
          {
               id: 1,
               disc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
               img: people1,
               name: "Winson Herry",
               city: 'California'
          },
          {
               id: 2,
               disc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
               img: people2,
               name: "Winson Herry",
               city: 'New York'
          },
          {
               id: 3,
               disc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
               img: people3,
               name: "Winson Herry",
               city: 'Garmany'
          }
     ]


     return (
          <div className='pb-24'>
               <div className="sec-tiltle flex justify-between items-center">
                    <div className="left">
                         <h3 className='text-xl text-primary font-bold'>Tesitomial</h3>
                         <h2 className='text-3xl'>What Our Patients Saya</h2>
                    </div>
                    <div className="right">
                         <img className='max-w-[200px]' src={quote} alt="img" />
                    </div>
               </div>
               <div className='flex justify-between gap-5 mt-6'>
                    {
                       testimonialData.map(testimonial => <TestimonialItem testimonial={testimonial} key={testimonial.id}></TestimonialItem>)  
                    }
               </div>
          </div>
     );
};

export default Testimonials;