import React from 'react'
import "./Login.css"
import { Button } from '@material-ui/core'
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function Login() {
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        }).catch(error => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="./image.jpg" alt="😥" />
                <div className="login__text">
                    <h1>Sign in to WhatsGood</h1>
                </div>
                <Button onClick={signIn}> Sign in with google </Button>
            </div>            
        </div>
    )
}

export default Login
