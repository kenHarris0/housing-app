import { useState } from "react";
import '../styles/SignUpPage.css';
import { authApi } from "../services/authApi";
import { Link } from "react-router-dom";
function LoginPage() {

    const [form, setForm] = useState({
        userName: "",
        password: ""
    })
    const [errors, setError] = useState({});
    function handleChange(event) {
        const { name, value } = event.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const newForm = {};
        if (form.userName === "") newForm.userName = "Enter User name";
        if (form.password === "") newForm.password = "Enter the password";
        setError(newForm);

        if (Object.keys(newForm).length === 0) {
            try {
                const res = await authApi.post("/login", form);
                if (res.status === 200 || res.status === 200) {
                    alert("Logged In");
                }
            }
            catch (err) {
                if (err.status === 404) {
                    alert("User not found");
                }
                if (err.status === 401) {
                    alert("Incorrect Password");
                }
                if (err.status === 500) {
                    alert("Internal Server Error");
                }
            }
        }
        setForm({
            userName: "",
            password: ""
        })
    }

    return (
        <div className="singup-container">

            <h2>SIGN UP FORM</h2>
            <form className="signup-form" onSubmit={handleSubmit}>
                {/* First name */}
                <div>
                    <label htmlFor="name">First Name: </label>
                    <input type="text" placeholder="Enter your first name" name="userName" value={form.userName} id="name" onChange={handleChange} />
                    <br></br>
                    {errors && <p style={{ color: "red" }}>{errors.userName}</p>}
                </div>

                <div>
                    <label htmlFor="pass">Password: </label>
                    <input type="password" placeholder="Enter your password" name="password" value={form.password} id="pass" onChange={handleChange} />
                    <br></br>
                    {errors && <p style={{ color: "red" }}>{errors.password}</p>}
                </div>

                <input type="submit" className="btn" />
            </form>
            <p>Not Signed Up In Yet? {<Link className="link" to="/signup">Signup</Link>}</p>
        </div>

    )
}

export default LoginPage;