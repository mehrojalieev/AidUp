import React, { useState, useRef } from "react";
import './ValidationModal.scss'
import ApiInstance from "../../api";

const ValidationModal = ({ openModal }) => {

  const validateEmail = localStorage.getItem("validate-email")
  // ------ HOOKS ------------
  const [code, setCode] = useState('');

  const inputRefs = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];
  function handleInput(e, index) {
    const input = e.target;
    const previousInput = inputRefs[index - 1];
    const nextInput = inputRefs[index + 1];

    // Update code state with single digit
    const newCode = [...code];
    // Convert lowercase letters to uppercase
    if (/^[a-z]+$/.test(input.value)) {
      const uc = input.value.toUpperCase();
      newCode[index] = uc;
      inputRefs[index].current.value = uc;
    } else {
      newCode[index] = input.value;
    }
    setCode(newCode.join(''));

    input.select();

    if (input.value === '') {
      // If the value is deleted, select previous input, if exists
      if (previousInput) {
        previousInput.current.focus();
      }
    } else if (nextInput) {
      // Select next input on entry, if exists
      nextInput.current.select();
    }
  }
  function handleFocus(e) {
    e.target.select();
  }
  function handleKeyDown(e, index) {
    const input = e.target;
    const previousInput = inputRefs[index - 1];
    const nextInput = inputRefs[index + 1];

    if ((e.keyCode === 8 || e.keyCode === 46) && input.value === '') {
      e.preventDefault();
      setCode((prevCode) => prevCode.slice(0, index) + prevCode.slice(index + 1));
      if (previousInput) {
        previousInput.current.focus();
      }
    }
  }
  const handlePaste = (e) => {
    const pastedCode = e.clipboardData.getData('number');
    if (pastedCode.length === 6) {
      setCode(pastedCode);
      inputRefs.forEach((inputRef, index) => {
        inputRef.current.value = pastedCode.charAt(index);
      });
    }
  };




  // -------------- VALIDATION FUNCTION ----------------

  const handleValidationCode = async (e) => {
    e.preventDefault()
    const validateData = {
      email: String(validateEmail),
      code: String(code)
    }
    try {
      const response = await ApiInstance.post('auth/register/verify', validateData)
    } 
    catch (error) {
      console.log(error);  
    }
  }
  return (
    <div style={openModal ? { transform: 'scaleY(1)', transition: "0.3s" } : { transform: 'scale(0)' }} className="modal-overlay">
      <div className="validation-modal">  
        <h2>Email verification</h2>
        <p>An email with a verification code was just sent to you email address</p>
        <form onSubmit={handleValidationCode} className="validation-form">
          <div className="input__validation-wrapper">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <input
                className="text-2xl bg-gray-800 w-10 flex p-2 text-center"
                key={index}
                type="number"
                maxLength={1}
                onChange={(e) => handleInput(e, index)}
                ref={inputRefs[index]}
                autoFocus={index === 0}
                onFocus={handleFocus}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onPaste={handlePaste}
              />
            ))}
          </div>
          <button type='button' className='resend-again'>Resend again</button>
          <button type='submit' className='next-btn'>NEXT</button>
        </form>
      </div>

    </div>
  )
}


export default ValidationModal