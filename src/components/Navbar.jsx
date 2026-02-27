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
                <span ><a className="link" href="#">Home</a></span>
                <span><a  className="link" href="#">Services</a></span>
                <span><a  className="link" href="#">FAQ</a></span>
                <span className=""><a className="btn" href="#">BOOK NOW</a></span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar