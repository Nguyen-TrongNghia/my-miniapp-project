// File này dùng để cấu hình kết nối API lấy dữ liệu cho Mini App
const API_BASE_URL = 'https://api.example.com/v1';

export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Lỗi khi gọi API:', error);
    return null;
  }
};
