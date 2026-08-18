# Tài liệu Kiến trúc Hệ thống - Mini App

## 1. Tổng quan kiến trúc
Dự án được xây dựng theo mô hình kiến trúc phân lớp (Layered Architecture) kết hợp với các tiêu chuẩn phát triển ứng dụng di động/web hiện đại, giúp dễ dàng mở rộng tính năng và bảo trì.

## 2. Sơ đồ cấu trúc hệ thống (High-Level Architecture)
* **Client Layer (Giao diện người dùng):** Xây dựng bằng React/React Native (hoặc framework tương ứng), chịu trách nhiệm hiển thị UI và tương tác với người dùng.
* **Service Layer (Logic nghiệp vụ & API):** Xử lý logic trung gian, xác thực người dùng và giao tiếp với cơ sở dữ liệu.
* **Data Layer (Lưu trữ):** Cơ sở dữ liệu quan hệ/phi quan hệ để lưu trữ thông tin sản phẩm, đơn hàng và người dùng.

## 3. Công nghệ và Công cụ sử dụng
* **Frontend:** ReactJS / VueJS / Flutter
* **Backend API:** Node.js (Express) / Firebase
* **Database:** MongoDB / PostgreSQL
