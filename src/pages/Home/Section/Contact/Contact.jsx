import React from "react";

const Contact = () => {
  return (
    <div className="w-2/4 mx-auto py-24">
      <div className="text-center">
        <h2 className="text-xl font-bold text-primary">Contact Us</h2>
        <h3 className="text-5xl text-white mb-5">Stay connected with us</h3>
      </div>
      <form>
        <input
          type="email"
          placeholder="Email Address"
          className="input input-bordered w-full mb-5"
        />
        <input
          type="text"
          placeholder="Subject"
          className="input input-bordered w-full mb-5"
        />
        <textarea className="textarea textarea-bordered w-full mb-5" placeholder="Your Message Here"></textarea>
        <button className="w-full btn text-white bg-gradient-to-r from-primary to-secondary">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
