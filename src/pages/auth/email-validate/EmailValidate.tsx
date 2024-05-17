import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ValidationModal from '../../../components/validation-modal/ValidationModal';
import ApiInstance from '../../../api';


const EmailValidate = () => {
  const  [validationEmail, setValidationEmail] = useState('')
  const [openModal, setOpenModal] = useState(false)

  
  const handleValidateEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await ApiInstance.post(`/auth/register/send-code?mail=${validationEmail}`)
      if(response.status === 200){
        setOpenModal(true)
        localStorage.setItem("validate-email",  validationEmail)
      }
    } 
    catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <div style={openModal ? {display: "none"} : {display: 'block'}} className="auth-wrapper">
      <h2>Email Validation</h2>
      <form onSubmit={handleValidateEmail} className='auth-form'>
        <input value={validationEmail} onChange={(e) => setValidationEmail(e.target.value)} className='register-input validation__email-input' type="email" placeholder='Email' />
        <div className="field btn">
          <div class="btn-layer"></div>
          <input type="submit" value="NEXT" />
        </div>
      </form>
    </div>
      <ValidationModal openModal={openModal} setOpenModal={setOpenModal}/>
    </>
  )

}

export default EmailValidate