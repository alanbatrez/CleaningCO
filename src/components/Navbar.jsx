import logo from "../assets/logo.png"
import "./navbar.css"

function Navbar() {
  return (
    <nav className="">
        <div className="container-">
            <div className="img-container">
                <img src={logo} alt="Company" />
            </div>
            <div className="links">
                <span><a href="#">Home</a></span>
                <span><a href="#">Services</a></span>
                <span><a href="#">FAQ</a></span>
                <span className="btn"><a href="#">BOOK NOW</a></span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar