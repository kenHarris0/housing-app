import { Link } from 'react-router-dom';
import '../styles/Navbar.css'
function NavBar(){
    return(
        <div>
            <nav className='navbar'>
                <div className='header'> 
                    <h4>Hotel Booking</h4>
                </div>
                <div className='loginBtn'>
                    <p><strong><Link to="/signup" className='login'>Sign Up</Link></strong></p>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;