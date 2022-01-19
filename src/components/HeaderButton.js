import { NavLink } from "react-router-dom";

const HeaderButton = (props) => {
    const icon = props.icon;
    const text = props.text;

    return (
        <NavLink to="/">
            <img src={icon} alt=""></img>
            <span className="headerIconText">
                {text}
            </span>
        </NavLink>
    )
}

export default HeaderButton