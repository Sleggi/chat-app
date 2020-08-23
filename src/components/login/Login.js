import React from 'react'
import { Button } from '@material-ui/core'
import './login.css'


function Login() {

    const signIn = () => {

    }

    return (
        <div className='login'>
            <div className="login__container">
                <div className="login__text">
                    <h1>Sign in to Chat-app</h1>
                </div>
                <Button type='submit' onClick={signIn}>
                    Sign in with google
                </Button>
            </div>
        </div>
    )
}

export default Login
