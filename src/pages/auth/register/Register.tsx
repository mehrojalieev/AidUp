import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import { createButton } from 'react-social-login-buttons'
import { BsFacebook } from 'react-icons/bs'
import { LoginSocialFacebook } from 'reactjs-social-login'
import { useForm } from 'react-hook-form'
import { useRegister } from '../../../service/mutation/useRegister'

const config = {
    icon: BsFacebook,
    style: {
        background: '#3b5999',
        width: '43px',
        height: '40px',
        padding: '9px',
        borderRadius: '50%',
    }
}

const FacebookLoginButtons = createButton(config)
const Register = () => {
    const { mutate } = useRegister()
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const handleRegisterUser = (values) => {
        const formdata = new FormData()
        formdata.append('firstname', values.firstname)
        formdata.append('lastname', values.lastname)
        formdata.append('email', values.email)
        formdata.append('password', values.password)
        formdata.append('dateOfBirth', new Date(values.dateOfBirth).toISOString())
        mutate(formdata, {
            onSuccess: (res) => navigate('/auth/login'),
            onError: (error) => console.log(error)
        })
    }

    return (
        <div className="auth-wrapper">
            <h2><Link className='sign-up__title' to="/">Sign Up</Link></h2>
            <form onSubmit={handleSubmit(handleRegisterUser)} className='auth-form'>
                <div className="fullname-container">
                    <input {...register('firstname', { required: true })} className='register-input' type="text" placeholder='Firstname' />
                    <input {...register('lastname', { required: true })} className='register-input' type="text" placeholder='Lastname' />
                </div>
                <input {...register('dateOfBirth', { required: true })} className='register-input' type="date" placeholder='Date of birth' />
                <input {...register('email', { required: true })} className='register-input' type="email" placeholder='Email' />
                <input {...register('password', { required: true })} className='register-input' type="password" placeholder='Password' />
                <div className="field btn">
                    <div className="btn-layer"></div>
                    <input type="submit" value="Signup" />
                </div>
                <p className='exist__account-text'>
                    Already have an account?
                    <Link to={'/auth/login'} className='check-link'>Login</Link>
                </p>
                <div className="register-socials">
                    <GoogleOAuthProvider clientId='617896106948-fncnrakj6bigf7u0kig605jifcfll205.apps.googleusercontent.com'>
                        <GoogleLogin
                            onSuccess={credentialResponse => {
                                console.log(credentialResponse);
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                            size='large'
                            theme='filled_blue'
                            context='contin_with'
                            locale='english'
                            type='icon'
                            shape='circle'
                            ux_mode='popup'
                            width={480}
                            logo_alignment='left'
                        />
                    </GoogleOAuthProvider>
                    {/* FACEBOOK LOGIN */}
                    <LoginSocialFacebook
                        appId='678828277643445'
                        fields='id'
                        onResolve={(response) => {
                            console.log(response);
                        }}
                        onReject={(error) => {
                            console.log(error);
                        }}
                    >
                        <FacebookLoginButtons
                        />
                    </LoginSocialFacebook>
                </div>
            </form>
        </div>
    )
}

export default Register
