import React from "react";

const SingleCard = ({ card }) => {
  return (
    <div className={`card card-side w-1/3 p-5 m-3 shadow-xl bg-primary ${card.bgColor}`}>
      <figure>
        <img
          src={card.icon}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{card.title}</h2>
        <p>{card.disc}</p>
        
      </div>
    </div>
  );
};

export default SingleCard;
