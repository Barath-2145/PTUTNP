import React, { useState } from 'react';
import axios from 'axios';
import CMShead from './CMShead/CMShead';
import "./Login.css";
import { Navigate, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [otp, setOTP] = useState('');
  const [disableButton, setDisableButton] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);
  const [sentOTP, setSentOTP] = useState('');
  const [validOTP, setValidOTP] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleOTPChange = (event) => {
    setOTP(event.target.value);
  };

  const handleSendOTP = () => {
    setDisableButton(true);

    axios
      .post('http://localhost:81/TNP/sent_otp.php', { email })
      .then((response) => {
        console.log(response.data);
        startTimer();
        setSentOTP(response.data);
        setShowSuccessModal(true); // Show success modal after OTP is sent
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleLogin = () => {
    const credentials = {
      email: email,
      otp: otp,
    }
    axios
      .post('http://localhost:81/TNP/login.php', JSON.stringify(credentials))
      .then((response) => {
        console.log(response.data);
        setValidOTP(response.data);
        if (response.data !== 'Authentication successful') {
          setShowModal(true);
        } else {
          navigate('/adminhome');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const startTimer = () => {
    setRemainingTime(15);
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
      setDisableButton(false);
      setRemainingTime(0);
    }, 15000);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <>
      {/* <CMShead/> */}
      <div className="login-container">
        <div className="login-form">
          <h1>Login here...</h1>
          <label style={{ fontSize: "20px" }}>Email:</label>
          <input
            type="email"
            className="input-field"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
          />

          <button className="send-otp-button" onClick={handleSendOTP} disabled={disableButton}>
            Send OTP
          </button>

          <input
            type="text"
            className="input-field"
            value={otp}
            style={{ margin: "10px -2px" }}
            onChange={handleOTPChange}
            placeholder="OTP"
          />
          <br />

          <button className='send-otp-button' onClick={handleLogin}>Login</button>
        </div>

        {validOTP === 'Authentication successful' ?
          navigate('/adminhome') : (
            ''
          )}

       
        {/* {sentOTP === 'OTP sent successfully.' ? (
          <p>OTP sent successfully!</p>
        ) : (
          <p>{sentOTP}</p>
        )} */}
      </div>
      {remainingTime > 0 && (

        <div align="center"><h4>Please wait {remainingTime} seconds before making another OTP request.</h4></div>
      )}

      {showModal && (
        <div className="modal_login">
          <div className="modal-content_login">
            <p>Login failed. Please try again.</p>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </div>
      )}

      {showSuccessModal && (
        <div className="modal_otp">
          <div className="modal-content_otp">
            <p>OTP sent successfully!</p>
            <button onClick={closeSuccessModal}>OK</button>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPage;
