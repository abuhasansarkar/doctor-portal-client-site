import React from 'react';
import { Link } from 'react-router-dom';

const SingUp = () => {
     return (
          <div className="lg:w-[1400px] mx-auto py-16">
          <div className="w-1/3 mx-auto border p-10 rounded-lg shadow-2xl">
            <form>
              <h1 className="text-center text-3xl">LogIn Now</h1>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
              </div>
             
              <button className="btn btn-accent w-full text-white mt-2">Sing Up</button>
            </form>
              <h4>You have already Account <span className="text-primary"><Link to='/login'>Login Now</Link></span></h4>
              <div className="divider">OR</div>
    
              <button className="btn btn-outline w-full">Continue with Google</button>
          </div>
        </div>
     );
};

export default SingUp;