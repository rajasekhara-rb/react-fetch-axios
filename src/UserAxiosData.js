import React, { useEffect, useState } from "react";
import axios from "axios";

const UserAxiosData = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                setUsers(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <>
            <h1>User List from Axios</h1>
            <ul>
                {users.map((user) =>
                    <li key={user.id}>{user.name}</li>
                )}
            </ul>
        </>
    )

}

export default UserAxiosData;