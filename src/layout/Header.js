import './Header.css'
import Logo  from "../UI/Logo"

const Header = () => {
    return (
        <header className="mainHeader">
            <Logo />
            <span className="PEEKaMEET">PEEKaMEET</span>
            <div className="signInDiv">
                <span className="Sign-In">Sign In</span>
            </div>
        </header>
    )
}

export default Header