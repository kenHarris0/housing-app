import { Link, Routes, Route } from 'react-router-dom';
import '../styles/Navbar.css'
import Home from './Home';
function NavBar(){
    return(
        <>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <div className='container-fluid'> 
                    <h4 className='navbar-brand'>Hotel Booking</h4>
                
                
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-item'>
                            <Link className = "nav-link" to="/signup"><strong>Login</strong></Link>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
            <Home/>

        </>
    )
}

export default NavBar;