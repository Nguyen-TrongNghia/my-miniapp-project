// Hàm chuyển đổi số tiền sang định dạng VNĐ (Ví dụ: 100000 -> 100.000 đ)
export const formatCurrency = (amount) => {
  if (isNaN(amount)) return '0 đ';
  return new Intl.NumberFormat('vi-VN', { 
    style: 'currency', 
    currency: 'VND' 
  }).format(amount);
};
