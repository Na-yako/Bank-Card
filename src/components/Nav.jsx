import "./Nav.css"
import logo1 from "../images/logo1.png"




export default function Nav() {
    return (
        <div className="nav">
            <h1>
                Take Control of
                <br />Your Money With
                <br />Ease And Speed
            </h1>
            <div>
                <img src={logo1} alt="logo"  className="nav-image"/>
            </div>
        </div>
    )
}