import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {deleteUser, getAllUsers, setUserToAdmin} from "../../services/helpers/user";

const AddRole = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        recuperationOrderList()
    }, [loading])

    const recuperationOrderList = ()=>{
        getAllUsers()
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                setLoading(false);
                setUsers([]);
            })
    }
    const deleteThisUser=(id)=>{
        deleteUser(id).then(response => {
            const tab = users.filter((value)=>value.id!==id);
            setUsers(tab);
        })
            .catch(error => {
                alert('user can not delete');
            })
    }

    const setThisUserToAdmin=(id,role)=>{
        let roles = ["ROLE_ADMIN","ROLE_USER","ROLE_RESTORER"]
        const data = {
            "id":id,
            "roleName":roles[role],
        }
        setUserToAdmin(data).then(response => {

            const tab = users.filter((value)=>value.id);
            setUsers(tab);
        })
            .catch(error => {
                alert('user can not set this role')
            })
    }

    return (
        <>
            <h1>Liste des Users</h1>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">nom</th>
                    <th scope="col">pseudo</th>
                    <th scope="col">role</th>
                </tr>
                </thead>
                <tbody>
                {users.length > 0 ? (
                        users.map((value, index) =>
                            <tr key={index}>
                                <td>{value.name}</td>
                                <td>{value.username}</td>
                                <td>{value.role}</td>
                                <td><input type="button"  onClick={()=>deleteThisUser(value.id)} value="Delete"/> </td>
                                <td><input type="button"  onClick={()=>setThisUserToAdmin(value.id,0)} value="Admin"/> </td>
                                <td><input type="button"  onClick={()=>setThisUserToAdmin(value.id,1)} value="User"/> </td>
                                <td><input type="button"  onClick={()=>setThisUserToAdmin(value.id,2)} value="Restaurateur"/> </td>
                            </tr>
                        )):
                    <h3>Chargement...</h3>
                }
                </tbody>
            </table>
        </>
    );
}

export default  AddRole;