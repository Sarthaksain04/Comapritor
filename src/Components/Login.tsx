import React from 'react';
import styled from 'styled-components';
import { ShootingStars } from './Shooting-stars'; // adjust the path if necessary

const Form = () => {
  return (
    <StyledWrapper>
      <ShootingStars className="shooting-stars" />
      <div className="card">
        <div className="card2">
          <form className="form">
            <p id="heading">Login</p>
            <div className="field">
              <svg viewBox="0 0 16 16" fill="currentColor" height={16} width={16} xmlns="http://www.w3.org/2000/svg" className="input-icon">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z" />
              </svg>
              <input type="text" className="input-field" placeholder="Username" autoComplete="off" aria-label="Username" />
            </div>
            <div className="field">
              <svg viewBox="0 0 16 16" fill="currentColor" height={16} width={16} xmlns="http://www.w3.org/2000/svg" className="input-icon">
                <path d="M8 1a4 4 0 00-4 4v1H3.5A1.5 1.5 0 002 7.5v5A1.5 1.5 0 003.5 14h9a1.5 1.5 0 001.5-1.5v-5A1.5 1.5 0 0012.5 6H12V5a4 4 0 00-4-4zm-2 5V5a2 2 0 114 0v1H6z" />
              </svg>
              <input type="password" className="input-field" placeholder="Password" aria-label="Password" />
            </div>
            <div className="btn">
              <button type="submit" className="button1">Login</button>
              <button type="button" className="button2">Sign Up</button>
            </div>
            <button type="button" className="button3">Forgot Password</button>
          </form>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgb(0, 0, 0);

  .shooting-stars {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;
  }

  .card {
    background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
    border-radius: 22px;
    transition: all 0.3s;
    width: 354px;
    position: relative;
    z-index: 1;
  }

  .card2 {
    border-radius: 0;
    transition: all 0.2s;
  }

  .card2:hover {
    transform: scale(0.98);
    border-radius: 20px;
  }

  .card:hover {
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 2em;
    background-color: #171717;
    border-radius: 25px;
    width: 290px;
  }

  #heading {
    text-align: center;
    margin: 2em 0;
    color: #fff;
    font-size: 1.2em;
  }

  .field {
    display: flex;
    align-items: center;
    gap: 0.5em;
    padding: 0.6em;
    border-radius: 25px;
    background-color: #171717;
    box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
  }

  .input-icon {
    height: 1.3em;
    width: 1.3em;
    fill: white;
  }

  .input-field {
    background: none;
    border: none;
    outline: none;
    width: 100%;
    color: #d3d3d3;
  }

  .btn {
    display: flex;
    justify-content: center;
    gap: 0.5em;
    margin-top: 2.5em;
  }

  .button1,
  .button2,
  .button3 {
    padding: 0.5em 1.2em;
    border-radius: 5px;
    border: none;
    outline: none;
    transition: 0.4s ease-in-out;
    background-color: #252525;
    color: white;
  }

  .button1:hover,
  .button2:hover {
    background-color: black;
  }

  .button3 {
    display: block;
    margin: 1em auto 3em;
  }

  .button3:hover {
    background-color: red;
  }
`;

export default Form;
