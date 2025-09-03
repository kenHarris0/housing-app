import '../styles/Navbar.css'
function NavBar(){
    return(
        <div>
            <nav className='navbar'>
                <div className='header'> 
                    <h4>Hotel Booking</h4>
                </div>
                <div className='loginBtn'>
                    <button>Login</button>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;