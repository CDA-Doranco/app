import "./css.css";
import {useRef, useState} from "react";
import {Redirect} from "react-router-dom";
import authenticate from "../../services/helpers/authentification";
import {registration} from "../../services/helpers/food";


const LoginForm = ({setUserId,setUserRole}) => {
    const [usernameLogin, setUsernameLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");
    const [firstNameRegister, setFirstNameRegister] = useState("");
    const [lastNameRegister, setLastNameRegister] = useState("");
    const [cityRegister, setCityRegister] = useState("");
    const [addressRegister, setAddressRegister] = useState("");
    const [mailRegister, setEmailRegister] = useState("");
    const [phoneRegister, setPhoneRegister] = useState("");
    const [usernameRegister, setUsernameRegister] = useState("");
    const [passwordRegister, setPasswordRegister] = useState("");
    const [postIndexRegister, setPostIndexRegister] = useState("");
    const [redirection, setRedirection] = useState(false);
    const form = useRef(null)

    function register(){
        const data = {
            firstName:firstNameRegister,
            lastName:lastNameRegister,
            city:cityRegister,
            address:addressRegister,
            email:mailRegister,
            phoneNumber:phoneRegister,
            username:usernameRegister,
            password:passwordRegister,
            postIndex:postIndexRegister
        }
        registration(data)
            .then((response) => response.data)
            .then((data) => {
                if (data) {
                    <Redirect to="/login" />
                }
            })
            .catch((err) => {
                alert(err);
            })
    }
    function displayFromLogin() {
        document.getElementById("LoginForm").style.display = 'block';
        document.getElementById("Connexion").style.display = 'none';
        document.getElementById("RegisterForm").style.display = 'none';
        document.getElementById("Register").style.display = 'block';
    }
    function displayFromRegister() {
        document.getElementById("LoginForm").style.display = 'none';
        document.getElementById("Connexion").style.display = 'block';
        document.getElementById("RegisterForm").style.display = 'block';
        document.getElementById("Register").style.display = 'none';
    }
    function setAuthenticatedUser(data) {
        sessionStorage.setItem('accessToken', data.accessToken)
        sessionStorage.setItem('role', data.role)
        sessionStorage.setItem('userId', data.userId)
        setUserId(data.userId)
        setUserRole(data.role)
    }
    const loginSumbit = async(e) => {
        e.preventDefault();
        authenticate(usernameLogin, passwordLogin)
            .then((response) => response.data)
            .then((data) => {
                if (data) {
                    setAuthenticatedUser(data)
                    setRedirection(true);
                }
            })
            .catch((err) => {
                alert(err);
            })
    }

    if(redirection){
        return <Redirect to="/" />
    }

    return (
        <div className="Form" >

            <p > To order you must be authenticated </p><br/>
            <form ref={form} id="RegisterForm" action="#" style={{display: "none"}} onSubmit={register}>

                <label htmlFor="firstNameRegister">First name  :</label><br/>
                <input className="text" type="text" name="firstNameRegister" id="firstNameRegister" onChange={e => setFirstNameRegister(e.target.value)}/>
                <br/>
                <br/>
                <label htmlFor="lastNameRegister">Last name:</label><br/>
                <input className="text" type="text" name="lastNameRegister" id="lastNameRegister" onChange={e => setLastNameRegister(e.target.value)}/>
                <br/>
                <br/>
                <label htmlFor="cityRegister">city:</label><br/>
                <input className="text" type="text" name="cityRegister" id="cityRegister" onChange={e => setCityRegister(e.target.value)}/>
                <br/>
                <br/>
                <label htmlFor="addressRegister">Address:</label><br/>
                <input className="text" type="text" name="addressRegister" id="addressRegister" onChange={e => setAddressRegister(e.target.value)}/>
                <br/>
                <br/>
                <label htmlFor="emailRegister">Email:</label><br/>
                <input className="text" type="text" name="emailRegister" id="emailRegister" onChange={e => setEmailRegister(e.target.value)}/>
                <br/>
                <br/>
                <label htmlFor="phoneRegister">Phone number:</label><br/>
                <input  className="text" type="text" name="phoneRegister" id="phoneRegister" onChange={e => setPhoneRegister(e.target.value)}/>
                <br/>
                <br/>
                <label htmlFor="postIndexRegister">Post index :</label><br/>
                <input className="text" type="text" name="postIndexRegister" id="postIndexRegister" onChange={e => setPostIndexRegister(e.target.value)}/>
                <br/>
                <br/>
                <label htmlFor="usernameRegister">Username :</label><br/>
                <input className="text" type="text" name="usernameRegister" id="usernameRegister" onChange={e => setUsernameRegister(e.target.value)}/>
                <br/>
                <br/>
                <label htmlFor="passwordRegister">Password :</label><br/>
                <input className="text" type="password" name="passwordRegister" id="passwordRegister" onChange={e => setPasswordRegister(e.target.value)}/>
                <br/>
                <br/>
                <input type="submit" value="Register" />
                <br/>
                <br/>

            </form>


            <form  id="LoginForm" style={{display: "none"}}  >

                    <p>username :</p>
                    <input className="text" name="username" type="text" onChange={e => setUsernameLogin(e.target.value)}/>

                <br/>

                    <p>password :</p>
                    <input className="text" name="password" type="password" onChange={e => setPasswordLogin(e.target.value)}/>

                <div>
                    <button type="button" onClick={loginSumbit}>Connexion</button>
                </div>

            </form>

            <button id="Connexion" className="FormButton" onClick={displayFromLogin} >
                Login
            </button><br/><br/><br/><br/>
            <button id="Register" className="FormButton" onClick={displayFromRegister} >
                Register
            </button>

        </div>



    )
}

export default LoginForm