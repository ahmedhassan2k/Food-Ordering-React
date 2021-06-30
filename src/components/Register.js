import React, {useState} from "react";
import LoginContext from "./LoginContext";
function Register(){
    let [Register, setRegister] = useState({
        Name: '',
        Email: '',
        Address: '',
        Password: ''
    })
    const changeHandle=(e)=>{
            const value = e.target.value;
            setRegister({
                ...Register,
                [e.target.name]:value
            })
    }
    const btn_register=(e)=>{
        e.preventDefault()
        var log = Register;
        LoginContext._currentValue = log;
        // console.log(LoginContext._currentValue);
        
    }
    return(
        <div className='rg'>
            <p>As we need some information to deliver food at your door step, kindly fill out the form. Once you are registered you can login to order your delicious food</p>
            
            <div>
                <h2>Registeration</h2>
            </div>
            <div>
                <form>
                    <label>Name: </label> <input type = 'text' required name = 'Name' value = {Register.Name} onChange = {changeHandle}></input>
                    <br/><br/><label>Email: </label> <input type = 'Email' required name = 'Email' value = {Register.Email} onChange = {changeHandle}></input>
                    <br/><br/><label>Address: </label> <input type = 'text' required name = 'Address' value = {Register.Address} onChange = {changeHandle}></input>
                    <br/><br/><label>Password: </label> <input type = 'password' required name = 'Password' value = {Register.Password} onChange = {changeHandle}></input>
                    <br/><br/><input type ="submit" value = "Submit" onClick={btn_register}></input>
                </form>
            </div>
        </div>    
    )
}
export default Register;