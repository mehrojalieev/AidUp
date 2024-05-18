import { useState } from 'react';
import ApiInstance from '../../../api';


const EmailValidate = () => {
  const  [validationEmail, setValidationEmail] = useState('')
  const [openModal, setOpenModal] = useState(false)

  
  const handleValidateEmail = async (e: Event) => {
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
      <form onSubmit={handleValidateEmail as any} className='auth-form'>
        <input value={validationEmail} onChange={(e) => setValidationEmail(e.target.value)} className='register-input validation__email-input' type="email" placeholder='Email' />
        <div className="field btn">
          <div className="btn-layer"></div>
          <input type="submit" value="NEXT" />
        </div>
      </form>
    </div>
    </>
  )

}

export default EmailValidate