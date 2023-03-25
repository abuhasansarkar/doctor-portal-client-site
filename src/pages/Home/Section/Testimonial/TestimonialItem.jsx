import React from 'react';

const TestimonialItem = ({testimonial}) => {
     return (
          <div className='card shadow-xl p-5'>
               <p>{testimonial.disc}</p>
               <div className="flex gap-5 items-center">
                    <img className='border-4 mt-5 border-primary rounded-full' src={testimonial.img} alt="" />
                    <div className="user-info">
                         <h4>{testimonial.name}</h4>
                         <span>{testimonial.city}</span>
                    </div>
               </div>
          </div>
     );
};

export default TestimonialItem;