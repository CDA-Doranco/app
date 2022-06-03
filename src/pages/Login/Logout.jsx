import {Redirect, useLocation} from "react-router-dom";
import React, {useEffect} from "react";


const Logout = () => {
    const location = useLocation()
    useEffect(()=>{
        sessionStorage.removeItem("role")
        sessionStorage.removeItem("userId")
        sessionStorage.removeItem("accessToken")
        window.location.reload();
    },[])

    return (
        <Redirect to='/' replace state={{ path: location.pathname }} />
    )
}

export default Logout