import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import { LoginSocialFacebook } from 'reactjs-social-login'
import { createButton } from 'react-social-login-buttons'
import { BsFacebook } from 'react-icons/bs'
import { useLogin } from '../../../service/mutation/useLogin'
import { useForm } from 'react-hook-form'
import { jwtDecode } from "jwt-decode";
import Cookies from 'js-cookie';

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
const Login = () => {
    const { mutate } = useLogin()
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()


    const handleLogin = (values) => {
        mutate(values, {
            onSuccess: (res) => {
                localStorage.setItem('token', res?.data)
                console.log(res);
                
                const user = jwtDecode(res?.data)
                console.log(jwtDecode(res?.data));
                localStorage.setItem('user', JSON.stringify(user))
                Cookies.set('user-token', res?.data, { expires: 7 })
                navigate('/')
            },
            onError: (error) => console.log(error)
        })
    }
    return (
        <div>
            <div className="auth-wrapper">
                <h2>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)} className='auth-form'>
                    <input {...register('email', { required: true })} className='register-input' type="email" placeholder='Email' />
                    <input {...register('password', { required: true })} className='register-input' type="password" placeholder='Password' />
                    <Link className='forgot__password-text'>Forgot password?</Link>
                    <div className="field btn">
                        <div className="btn-layer"></div>
                        <input type="submit" value="Login" />
                    </div>
                    <p className='exist__account-text'>
                        
                        If you don't have an account?
                        <Link to={'/auth/register'} className='check-link'>Register</Link>
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
        </div>
    )
}

export default Login