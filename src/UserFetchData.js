import React, { useEffect, useState } from 'react';

const UserFetchData = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch((error) => console.log(error))
    }, []);

    return (
        <>
            <h1>User List using fetch</h1>
            <ul>
                {users.map((user) =>
                    <li key={user.id}>{user.name}</li>
                )}
            </ul>
        </>
    )
}

export default UserFetchData;