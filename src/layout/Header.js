import Logo from "../UI/Logo"
import "./Header.css"
import { useState } from "react"
import HeaderButton from "../components/HeaderButton"
import HomeIcon from "../assets/images/navBar-icons/group-copy-3.png"
import ContactIcon from "../assets/images/navBar-icons/group-copy-4.png"
import MessageIcon from "../assets/images/navBar-icons/group-copy.png"
import ScanIcon from "../assets/images/navBar-icons/credit-card-scan.png"
import MovementIcon from "../assets/images/navBar-icons/group-copy-12.png"
import NotificationIcon from "../assets/images/navBar-icons/group-copy-11.png"
import MenuIcon from "../assets/images/navBar-icons/menu.png"
import SignOut from "../views/SignOut"
import { useHistory } from "react-router"
import { Redirect } from "react-router"

const Header = () => {
    const [navBarOpen, setNavBarOpen] = useState(true)
    const [signOut, setSignOut] = useState(false)
    const history = useHistory()
    
    const handleToggle = () => {
        setNavBarOpen(!navBarOpen)
    }
    const signOutUser = () => {
        setSignOut(true)
    }
    const notesClickHandler = () => {
        history.replace("/notes")
    }

    const menuNavClasses = navBarOpen ? 'menuNav-showMenu' : 'menuNav'
        
    return (
        <div className="navBar">
            <Logo />
            <span className="PEEKaMEET">PEEKaMEET</span>
            <div className={menuNavClasses}>
                <div className="menuNavMain">
                    <HeaderButton icon={HomeIcon} text={"Home"}/>
                    <HeaderButton icon={ContactIcon} text={"Contacts"}/>
                    <HeaderButton icon={MessageIcon} text={"Messages"}/>
                    <HeaderButton icon={ScanIcon} text={"Scan"}/>
                    {/* <HeaderButton icon={MovementIcon} text={"The Movement"}/>
                    <HeaderButton icon={NotificationIcon} text={"Notifications"}/> */}
                    <div className="notesButtonDiv">
                        <span onClick={notesClickHandler}>Notes</span>
                    </div>
                    <div className="signOutDiv">
                        <span onClick={signOutUser}>Sign Out</span>
                        {signOut && <SignOut />}
                    </div>
                </div>
            </div>
            <div className="icon" onClick={handleToggle}>
                <img src={MenuIcon} alt=""></img>
            </div>
        </div>
    )
}

export default Header