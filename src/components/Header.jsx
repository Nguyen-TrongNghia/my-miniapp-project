import React from 'react';

export default function Header({ title }) {
  return (
    <header style={{ padding: '10px', backgroundColor: '#f8f9fa', borderBottom: '1px solid #ddd' }}>
      <h2>{title || 'Mini App Quản Lý Bán Hàng'}</h2>
    </header>
  );
}
