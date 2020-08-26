import React from 'react'
import { IconButton } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';
import { ReactComponent as Google } from '../../icons/google.svg'
import './login.css'
import { auth, provider, provider2 } from '../../firebase'
import { actionTypes } from '../../reducer'
import { useStateValue } from '../../StateProvider'


function Login() {
    const [{ }, dispatch] = useStateValue()

    const signIn1 = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch(error => alert(error.message))
    }

    const signIn2 = () => {
        auth.signInWithPopup(provider2)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <div className="login__container">
                <div className="login__text">
                    <h1>Войти в Telegram-Killer v0.1</h1>
                </div>
                <div className="login__methods">
                    <IconButton onClick={signIn1}>
                        <Google className='MuiSvgIcon-root' />
                    </IconButton>
                    <IconButton onClick={signIn2}>
                        <GitHubIcon />
                    </IconButton>
                </div>

            </div>
        </div>
    )
}

export default Login
