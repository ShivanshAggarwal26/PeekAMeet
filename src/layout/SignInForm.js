import InputData from "../components/InputData";
import "./SignInForm.css";
import MainContext from "../context/MainContext";
import { useContext } from "react";
import axios from "axios";
import { useState } from "react";
import {useHistory} from "react-router-dom";
import response from "../files/response.js";

const SignInForm = () => {
    const ctx = useContext(MainContext);
    const formData = ctx.formData;

    const [isEmailValid, setEmailValid] = useState(true);
    const [isPasswordValid, setPasswordValid] = useState(true);

    const email = formData.Email;
    const password = formData.Password;
    
    const inputDataChangeHandler = (event) => {
        ctx.updateFormData(event.target.name, event.target.value);
    }
    const history = useHistory()

    // const emailValid = isEmailValid && email !== "";
    // const passwordValid = isPasswordValid && password !== "";

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        if (!email.includes("@")) {
            setEmailValid(false);
        }
    
        const isPasswordNumber = /\d/.test(password);
        if (password.length < 8 || !isPasswordNumber) {
            setPasswordValid(false);
        }

        const data = {
            email: email,
            password: password
        }

        if (isEmailValid && isPasswordValid) {
            ctx.updateLoading(true);
            axios.post("http://apipeekameet.cloudzmall.com:3001/peekameet/api/v1/public/user/login", data)
            .then((rsp) => {
                history.replace("/user-details")
            }).catch((error) => {
                console.log("Error = " + error)
                ctx.updateResponse(response)
                localStorage.setItem("token", response.data[0].token)
                history.replace("/user-details")
            })
            ctx.updateLoading(false);
        }
    }

    return (
        <form className="inputForm">
            <div className="control-group">
                <InputData tagName="Email" typeName="email" inputDataChange={inputDataChangeHandler}/>
                {!isEmailValid && <p>Invalid Email</p>}
                <InputData tagName="Password" typeName="password" inputDataChange={inputDataChangeHandler}/>
                {!isPasswordValid && <p>Invalid Password</p>}
                <div className="form-actions">
                    <button onClick={formSubmissionHandler}>
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