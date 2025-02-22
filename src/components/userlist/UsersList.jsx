import React from 'react';
import './style.css';

export const UsersList = ({ users = [] }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>PRIMER NOMBRE</th>
            <th>CORREO</th>
          </tr>
        </thead>
        <tbody>
          {users.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.name}</td>
              <td>{usuario.first_name}</td>
              <td>{usuario.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default UsersList;



