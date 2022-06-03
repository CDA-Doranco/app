import LoginForm from "../../components/LoginForm/LoginForm"

const Login = ({setUserId,setUserRole}) => {


    return (
        <div>
            <LoginForm setUserId={setUserId} setUserRole={setUserRole}/>
        </div>



    )
}

export default Login