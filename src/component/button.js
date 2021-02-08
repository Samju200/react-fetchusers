import React from 'react'
import { FaFemale, FaMale, FaUsers} from 'react-icons/fa';
import './button.css';
const Button = ({fitterButton, genders}) => {
    return (
      <div className='users-button'>
       
          {genders.map((gender, index)=>{
            // const{all, male, female}= gender
            let buttonStyle = "users-btn";
            if(index === 2){
              buttonStyle='user-btn-male'
            }else if(index===1){
              buttonStyle= 'user-btn-female'
            }
            return (
              <div className='btn-container' key={index}>
                <button
                  type="button"
                  className={buttonStyle}
                  onClick={() => fitterButton(gender)}
                >
                  {gender === 'all' && <FaUsers className="icon" />}
                  {gender === 'male' && <FaMale className="icon" />}
                  {gender === 'female' && <FaFemale className="icon" />}
                </button>
                <p>{gender} user</p>
              </div>
            );
          })}
       
      </div>
    );
}

export default Button
