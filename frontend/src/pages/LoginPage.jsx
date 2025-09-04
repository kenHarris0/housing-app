import { useState } from "react";
import '../styles/SignUpPage.css';
function LoginPage() {

    const [form, setForm] = useState({
        firstName: "",
        password: ""
    })

    function handleChange(event) { 
        const {name, value} = event.target;
        setForm({
            ...form,
            [name] : value
        })
    }

    async function handleSubmit(e){
        e.preventDefault();
    }

    return (
        <div className="singup-container">

                <h2>SIGN UP FORM</h2>
                <form className="signup-form" onSubmit={handleSubmit}>
                    {/* First name */}
                    <label htmlFor="name">First Name: </label>
                    <input type="text" placeholder="Enter your first name" name="firstName" id="name" onChange={handleChange} />
                    <br></br>

                    <label htmlFor="pass">Password: </label>
                    <input type="password" placeholder="Enter your password" name="password" id="pass" onChange={handleChange} />
                    <br></br>

                    <button type="submit">Login</button>
                </form>
                
            </div>

    )
}

export default LoginPage;