import React from 'react'
import { Button } from '@material-ui/core'
import './login.css'
import { auth, provider } from '../../firebase'


function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => console.log(result))
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <div className="login__container">
                <div className="login__text">
                    <h1>Sign in to Chat-app</h1>
                </div>
                <Button onClick={signIn}>
                    Sign in with google
                </Button>
            </div>
        </div>
    )
}

export default Login
