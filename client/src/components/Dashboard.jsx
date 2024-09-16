import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Dashboard() {

    const [user, setUser] = useState();

    useEffect(() => {
        axios.get("http://localhost:8080/user-info", { withCredentials: true })
            .then(response => {
                setUser(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log("Ocurrio un error:", error);
            });
    }, []);

    return (
        <div>
            <h2>Dashboard</h2>
            {user ? (
                <div>
                    <p>Nombre: {user.name}</p>
                    <p>Email: {user.email}</p>
                    {user.picture && <img src={user.picture} alt="Avatar" referrerPolicy='no-referrer'/>}
                </div>
            ) : (
                <p>Cargando información del usuario</p>
            )}
        </div>
    )
}

export default Dashboard