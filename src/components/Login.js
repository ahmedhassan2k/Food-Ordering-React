import React, { useState, useContext } from 'react';
import LoginContext from './LoginContext';
import _navigation from '../menu_items/navigation';
function Login() {
    let data = useContext(LoginContext);
    let [login, setLogin] = useState({
        Name: '',
        Password: ''
    })
    let [status, setStatus] = useState({
        LoggedIn: false
    })
    const handleChange = (e) => {
        const value = e.target.value;
        setLogin({
            ...login,
            [e.target.name]: value
        }
        )

    }
    const btn_login = (e) => {
        //console.log(data)
        //console.log(login)
        e.preventDefault()
        if (login.Name === data.Name && login.Password === data.Password) {
            alert('LoggedIn')
            setStatus({

                LoggedIn : true
            }
            )
        }
        else {
            alert('Information not correct.')
            setStatus({

                LoggedIn : false
            }
            )
        }

    }
    return (
        <div className ='lg'>
            <div>
                <h2>Login</h2>
            </div>
            <div>
                <label>Name:</label><input type='text'
                    required name='Name'
                    value={login.Name}
                    onChange={(e) => handleChange(e)}/><br/><br/>
                <label>Password:</label><input type='Password'
                    required
                    name='Password'
                    value={login.Password}
                    onChange={(e) => handleChange(e)}/><br/><br/>
                <button onClick={btn_login}>Submit</button>
            </div>
            {/* <_navigation message ={status.LoggedIn}/> */}
            {(function() {
                if (status.LoggedIn === true) {
                return <_navigation/>;
                 } 
        })()}
        </div>
    )

}
export default Login;