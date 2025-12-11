import axios from "axios";

export const handleLogout = async (e) => {
    const accessToken = sessionStorage.getItem("accessToken");
    
    return axios.post("http://localhost:8080/logout", {}, {
        headers:{
            Authorization: `Bearer ${accessToken}`,
        },
        withCredentials : true
    })
    .then(()=> {
        sessionStorage.removeItem("accessToken");
        alert("로그아웃");
    }).catch(() => {
        alert("로그아웃 실패");
    });
}