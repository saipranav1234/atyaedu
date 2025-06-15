import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase.from('users').select('*');
      if (error) {
        console.error('Error fetching users:', error.message);
      } else {
        setUsers(data);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading users...</p>;

  return (
    <div style={{ padding: '2rem', marginTop: '6rem' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '1rem' }}>All Users</h2>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
          <thead style={{ backgroundColor: '#f5f5f5' }}>
            <tr>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Clerk ID</th>
              <th style={thStyle}>Created At</th>
              <th style={thStyle}>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={tdStyle}>{user.name || '-'}</td>
                <td style={tdStyle}>{user.email}</td>
                <td style={tdStyle}>{user.clerkid}</td>
                <td style={tdStyle}>{new Date(user.created_at).toLocaleString()}</td>
                <td style={tdStyle}>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {users.length === 0 && <p>No users found.</p>}
      </div>
    </div>
  );
};

const thStyle = {
  padding: '12px',
  textAlign: 'left',
  fontWeight: 'bold',
  borderBottom: '2px solid #ddd',
};

const tdStyle = {
  padding: '10px',
  textAlign: 'left',
};

export default Users;
