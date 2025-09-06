import React from "react";
import { Link } from "@inertiajs/react";

import adoption from "../images/adoption.png";
import shelter from "../images/animal-shelter.png";

const Welcome = () => {
  return (
    <div className="wrapper leading-[1.2]">
      <div className="group-title">
        <h1 className="title">
          Welcome to PetCare
          {""} <i className="fa-solid fa-paw"></i>
        </h1>
        <p className="subtitle">
          Connect loving pets with caring families. Whether you're a shelter
          looking to find homes for animals or someone ready to adopt, you're in
          the right place.
        </p>
      </div>

      <div className="selection">
        <Link prefetch href={route('login')} className="box">
          <img className="img" src={shelter} alt="" />
          <h1 className="title-selection">Shelter</h1>
          <p className="subtitle-selection">
            Animal shelters and rescue organizations. Create an account to post
            pets looking for homes.
          </p>
        </Link>
        <Link prefetch href={route('about')} className="box">
          <img className="img" src={adoption} alt="" />
          <h1 className="title-selection">Adopter</h1>
          <p className="subtitle-selection">
            Looking for a new companion? Browse available pets from local
            shelters. No account needed!
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
