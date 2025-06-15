import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

const Workshops = () => {
  const [workshops, setWorkshops] = useState([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkshops = async () => {
      const { data, error } = await supabase.from('workshops').select('*');
      if (error) {
        console.error('Error fetching workshops:', error.message);
      } else {
        setWorkshops(data);
      }
      setLoading(false);
    };

    fetchWorkshops();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading workshops...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '1rem' }}>All Workshops</h2>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '800px' }}>
          <thead style={{ backgroundColor: '#f5f5f5' }}>
            <tr>
              <th style={thStyle}>Title</th>
              <th style={thStyle}>Class</th>
              <th style={thStyle}>College</th>
              <th style={thStyle}>Phone</th>
              <th style={thStyle}>City</th>
              <th style={thStyle}>Skills</th>
              <th style={thStyle}>Created At</th>
            </tr>
          </thead>
          <tbody>
            {workshops.map((workshop) => (
              <tr key={workshop.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={tdStyle}>{workshop.title}</td>
                <td style={tdStyle}>{workshop.class}</td>
                <td style={tdStyle}>{workshop.college}</td>
                <td style={tdStyle}>{workshop.phone}</td>
                <td style={tdStyle}>{workshop.place}</td>
                <td style={tdStyle}>{workshop.skills}</td>
                <td style={tdStyle}>{new Date(workshop.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {workshops.length === 0 && <p>No workshops found.</p>}
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

export default Workshops;
