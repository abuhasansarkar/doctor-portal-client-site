import React from 'react';

const Button = ({children}) => {
     return (
      <button className="btn border-0 text-white bg-gradient-to-r from-primary to-secondary">{children}</button> 
     );
};

export default Button;