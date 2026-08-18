import React from 'react';
import Header from '../components/Header';

export default function HomePage() {
  return (
    <div>
      <Header title="Trang Chủ Mini App" />
      <main style={{ padding: '20px' }}>
        <h3>Chào mừng bạn đến với ứng dụng bán hàng!</h3>
        <p>Danh sách sản phẩm nổi bật sẽ được hiển thị ở đây.</p>
      </main>
    </div>
  );
}
