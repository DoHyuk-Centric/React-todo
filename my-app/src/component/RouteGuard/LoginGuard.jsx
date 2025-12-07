import { Navigate } from "react-router-dom";

export default function LoginGuard({children}){
    const token = sessionStorage.getItem("accessToken");
    if(token) return <Navigate to="/" replace />
    return children;
}