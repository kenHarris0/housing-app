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

    const [error, setError] = useState({});

    function handleChange(event){
        const {name, value} = event.target;
        setForm({
            ...form,
            [name] : value
        })
     }

    async function signupUser(e){
        e.preventDefault();
        const newErrors = {};
        if (!form.userName) newErrors.userName = "Username is required";
        if (!form.password) newErrors.password = "Password is required";
        if (!form.contact) newErrors.contact = "Contact is required";
        if (!form.gender) newErrors.gender = "Gender is required";
        if (!form.address) newErrors.address = "Address is required";
        
        setError(newErrors);

        if(Object.keys(newErrors).length === 0){
            console.log(form);
            try{
                const res = await authApi.post("/signup", form);
                if(res.status === 201 || res.status === 200){
                    alert("Form Submitted");
                }
                
            }
            catch(err){
                console.error("Error occured while signup", err);
                if(err.status === 400){
                    alert("User already exist");
                    return;
                }
            }
            setForm({
                userName: "",
                password: "",
                contact: "",
                gender: "",
                address: ""
            });
        }
    }

    return (
        <div className="singup-container">

                <h2>SIGN UP FORM</h2>
                <form className="signup-form" onSubmit={signupUser}>
                    {/* First name */}
                    <div>
                    <label htmlFor="name">User Name: </label>
                    <input type="text" placeholder="Enter your User name" value={form.userName} name="userName" id="name"  onChange={handleChange} />
                    <br></br>
                    {error.userName && <p style={{ color: "red" }}>{error.userName}</p>}
                    </div>

                    <div>
                    <label htmlFor="pass">Password: </label>
                    <input type="password" placeholder="Enter your Password" value={form.password} name="password" id="pass" onChange={handleChange} />
                    <br></br>
                    {error.password && <p style={{ color: "red" }}>{error.password}</p>}
                    </div>

                    <div>
                    <label htmlFor="tel">Contact: </label>
                    <input type="number" placeholder="Enter your contact number" value={form.contact} name="contact" id="tel" onChange={handleChange} />
                    <br></br>
                    {error.contact && <p style={{ color: "red" }}>{error.contact}</p>}
                    </div>

                    <div>
                    <label htmlFor="gen">Gender: </label>
                    <input type="text" placeholder="Enter your Gender" name="gender" value={form.gender} id="gen" onChange={handleChange} />
                    <br></br>
                    {error.gender && <p style={{ color: "red" }}>{error.gender}</p>}
                    </div>

                    <div>
                    <label htmlFor="add">Address: </label>
                    <input type="textbox" placeholder="Enter your Address" name="address" value={form.address} id="add" onChange={handleChange} />
                    <br></br>
                    {error.address && <p style={{ color: "red" }}>{error.address}</p>}
                    </div>

                    <input type="submit" value="Submit" className="btn"/>
                </form>
                <p>Already logged In ? {<Link className="link" to="/login">Login</Link>}</p>
            </div>

    )
}

export default SignUpPage;