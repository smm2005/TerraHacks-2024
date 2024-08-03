import { NavLink } from "react-router-dom";
import Functionalcomp from "./Functionalcomp";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-elements">
                <ul>
                    <h1 id="title">Fertility Prediction Model</h1>
                    <li>
                        <NavLink to="">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/model">
                            Model
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/solution">
                            Solution
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar