import React from 'react';
import { Avatar } from '@material-ui/core';
import { BsArrowLeftShort } from 'react-icons/bs';
import { BiEnvelope } from 'react-icons/bi';
import { FiPhoneCall } from 'react-icons/fi';
import { BsPhone } from 'react-icons/bs';
// import Konfo from './img/konfo.png';
import './userDetails.css';

const UserDetails = ({
  user: {
    name: { title, first, last },
    location: {
      street: { number, name },
      city,
      state,
    },
    email,
    phone,
    cell,
    dob: { age },
    registered: { date },
    picture: { large },
  },
  handleClick,
}) => (
  <div>
    <button className="results-btn" onClick={handleClick}>
      <BsArrowLeftShort className="back-arrow-icon" /> RESULTS
    </button>
    <div className="more-user-details">
      <Avatar src={large} className="user-image" />
      <div className="other-details">
        <h3 className="user-names">
          {title} {first} {last} <span>{age}</span>{' '}
        </h3>
        <p className="user-address">
          {number} {name}, {city}, {state}{' '}
        </p>
        <p className="user-email">
          {' '}
          <BiEnvelope /> {email}
        </p>
        <p className="user-registered"> JOINED: {date.slice(0, 10)}</p>
        <p className="user-phone">
          {' '}
          <FiPhoneCall /> {phone}
        </p>
        <p className="user-cell">
          {' '}
          <BsPhone /> {cell}
        </p>
      </div>
    </div>
  </div>
);

export default UserDetails;
