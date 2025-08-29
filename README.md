# Quản lý Sách: API cho Cửa hàng Sách

## Đây là một dự án API được xây dựng bằng Python và FastAPI để quản lý thông tin sách trong một cửa hàng. API này cho phép thực hiện các thao tác cơ bản như thêm, xem, cập nhật và xóa sách.

------------------------------------------------------------------------

## Công nghệ sử dụng

-   **Ngôn ngữ**: Python 3.8+\
-   **Framework**: FastAPI\
-   **Cơ sở dữ liệu**: PostgreSQL\
-   **Thư viện ORM**: SQLAlchemy\
-   **Kiểm tra dữ liệu**: Pydantic

------------------------------------------------------------------------

## Cài đặt và Chạy dự án

### 1. Yêu cầu

-   Đảm bảo bạn đã cài đặt Python 3.8+ và Poetry trên máy của mình.\
-   Bạn cần có một máy chủ PostgreSQL đang chạy.

### 2. Cài đặt các thư viện

Sử dụng pip để cài đặt các thư viện cần thiết từ file
`requirements.txt`:

``` bash
pip install -r requirements.txt
```

### 3. Cấu hình Cơ sở dữ liệu

Tạo một file `.env` ở thư mục gốc của dự án và thêm thông tin kết nối cơ
sở dữ liệu của bạn:

``` env
DATABASE_URL="postgresql://user:password@host:port/dbname"
```

Thay đổi các giá trị `user`, `password`, `host`, `port`, `dbname` cho
phù hợp với thiết lập PostgreSQL của bạn.

### 4. Khởi chạy Server

Chạy lệnh sau từ thư mục gốc của dự án để khởi động server API:

``` bash
uvicorn app.main:app --reload
```

Server sẽ chạy trên địa chỉ: <http://127.0.0.1:8000>.

------------------------------------------------------------------------

## Các Endpoint API

Bạn có thể truy cập tài liệu API tự động tại
<http://127.0.0.1:8000/docs> để xem và tương tác với các endpoint.

### Sách (Books)

  ------------------------------------------------------------------------
  Phương thức HTTP              Endpoint                       Mô tả
  ----------------------------- ------------------------------ -----------
  GET                           `/books/`                      Lấy danh
                                                               sách tất cả
                                                               sách.

  GET                           `/books/{book_id}`             Lấy thông
                                                               tin chi
                                                               tiết của
                                                               một cuốn
                                                               sách theo
                                                               ID.

  POST                          `/books/`                      Thêm một
                                                               cuốn sách
                                                               mới vào cơ
                                                               sở dữ liệu.

  PUT                           `/books/{book_id}`             Cập nhật
                                                               thông tin
                                                               của một
                                                               cuốn sách.

  DELETE                        `/books/{book_id}`             Xóa một
                                                               cuốn sách
                                                               khỏi cơ sở
                                                               dữ liệu.
  ------------------------------------------------------------------------

------------------------------------------------------------------------

## Tác giả

**Vũ Quốc Hưng** - https://github.com/vuhung-97/QLSach.git