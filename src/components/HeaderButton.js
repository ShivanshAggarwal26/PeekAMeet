import { NavLink } from "react-router-dom";
import "./HeaderButton.css";

const HeaderButton = (props) => {
    const icon = props.icon;
    const text = props.text;

    return (
        <NavLink to="/user-details" className="navLinkClass">
            <div className="headerIcon">
                <img src={icon} alt=""></img>
                <span className="headerIconText">
                    {text}
                </span>
            </div>
        </NavLink>
    )
}

export default HeaderButton