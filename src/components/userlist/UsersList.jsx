import React, { useState } from 'react';
import './style.css';

export const UsersList = ({ users = [] }) => {
  const [search, setSearch] = useState('');

  const filteredUsers = users.filter(usuario =>
    usuario.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Filtrar por nombre"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>First_Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((usuario) => (
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



