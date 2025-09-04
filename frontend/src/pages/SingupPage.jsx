import { useState } from "react";
import '../styles/SignUpPage.css';
import { Link } from "react-router-dom";
import { authApi } from "../services/authApi";
function SignUpPage() {

    const [form, setForm] = useState({
        userName: "",
        password: "",
        contact: "",
        gender: "",
        address: ""
    })

    function handleChange(event){
        const {name, value} = event.target;
        setForm({
            ...form,
            [name] : value
        })
     }

    async function signupUser(e){
        e.preventDefault();
        try{
            
        }
        catch(err){
            
        }
    }

    return (
        <div className="singup-container">

                <h2>SIGN UP FORM</h2>
                <form className="signup-form" onSubmit={signupUser}>
                    {/* First name */}
                    <label htmlFor="name">User Name: </label>
                    <input type="text" placeholder="Enter your User name" name="userName" id="name" onChange={handleChange} />
                    <br></br>

                    <label htmlFor="pass">Password: </label>
                    <input type="password" placeholder="Enter your Password" name="password" id="pass" onChange={handleChange} />
                    <br></br>

                    <label htmlFor="tel">Contact: </label>
                    <input type="number" placeholder="Enter your contact number" name="firstName" id="tel" onChange={handleChange} />
                    <br></br>

                    <label htmlFor="gen">Gender: </label>
                    <input type="text" placeholder="Enter your Gender" name="gender" id="gen" onChange={handleChange} />
                    <br></br>

                    <label htmlFor="add">Address: </label>
                    <input type="textbox" placeholder="Enter your Address" name="address" id="add" onChange={handleChange} />
                    <br></br>

                    <button type="submit">Signup</button>
                </form>
                <p>Already logged In ? {<Link className="link" to="/login">Login</Link>}</p>
            </div>

    )
}

export default SignUpPage;