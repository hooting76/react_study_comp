import React, {useEffect, useState} from 'react';
import axios from 'axios';
import UserList from '../components/UserList';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        //성공시 then 실행
        .then( response => {
            //console.log(response);
            setUsers(response.data)
        })
        //실패 시 catch 실행
        .catch(function (error) {
            console.log(error);
        }) 
    }, [])
    return (
        <div>
            <h1>Users</h1>
            <UserList  users={users}/>
        </div>
    );
};

export default Users;