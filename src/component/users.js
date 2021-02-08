import React, { useState } from 'react';
import './users.css';
import { BiEnvelope } from 'react-icons/bi';
import { FiPhoneCall } from 'react-icons/fi';
import { Avatar } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
const Users = ({
  title,
  firstName,
  lastName,
  streetNum,
  streetName,
  city,
  state,
  email,
  phone,
  image,
  handleClick,
}) => {
  return (
    <div className="user-profile" onClick={handleClick}>
      <div className="user-details">
        <div className="user-pictures">
          <Avatar src={image} className="user-picture" />
        </div>

        <div className="user-info">
          <h4>
            {title} {firstName} {lastName}
          </h4>
          <h5>
            {streetNum} {streetName}, {city}, {state}
          </h5>
          <div className="user-contact">
            <p>
              <BiEnvelope /> {email}
            </p>
            <p>
              <FiPhoneCall /> {phone}
            </p>
            <div className="user-btn">
              <ArrowForwardIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
