import InputData from "../components/InputData";
import "./SignInForm.css";

const SignInForm = () => {
    return (
        <form className="inputForm">
            <div className="control-group">
                <InputData tagName="Email" typeName="email"/>
                <InputData tagName="Password" typeName="password"/>
                <div className="form-actions">
                    <button>
                        <span className="SignInButton">
                            Sign In
                        </span>
                    </button>
                </div>
            </div>
        </form>
    )
}

export default SignInForm