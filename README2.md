# Hướng dẫn xây dựng dự án API quản lý sách

## Bước 1: Chuẩn bị môi trường

**Tạo thư mục dự án**
Mở terminal hoặc command prompt, điều hướng đến nơi bạn muốn lưu trữ dự án và tạo thư mục:

```bash
mkdir book_management_api
cd book_management_api
```

**Tạo và kích hoạt môi trường ảo**
Điều này giúp cô lập các thư viện của dự án, tránh xung đột với các dự án khác trên máy của bạn.

```bash
python -m venv venv
# Kích hoạt môi trường
# Trên Windows: venv\Scripts\activate
# Trên macOS/Linux: source venv/bin/activate
```

**Cài đặt các thư viện cần thiết**
Sau khi kích hoạt môi trường, cài đặt các thư viện sau:

```bash
pip install "fastapi[all]" "uvicorn" "sqlalchemy" "psycopg2-binary" "pydantic"
```

* **FastAPI**: Framework chính để xây dựng API.
* **Uvicorn**: Máy chủ để chạy ứng dụng FastAPI.
* **SQLAlchemy**: ORM để tương tác với cơ sở dữ liệu.
* **psycopg2-binary**: Driver để kết nối Python với PostgreSQL.
* **Pydantic**: Giúp kiểm tra và xác thực dữ liệu.

---

## Bước 2: Cấu hình cơ sở dữ liệu PostgreSQL

**Cài đặt và chạy PostgreSQL**
Đảm bảo bạn đã cài đặt và chạy dịch vụ PostgreSQL.

**Tạo Database**
Sử dụng công cụ client như pgAdmin hoặc terminal psql để tạo một cơ sở dữ liệu mới cho dự án.

```sql
CREATE DATABASE bookstore_db;
```

**Tạo thư mục app và file cấu hình**
Trong thư mục gốc của dự án, tạo một thư mục con *app* và file *database.py* bên trong nó.

```bash
mkdir app
touch app/database.py
```

**Chỉnh sửa database.py**
Thêm đoạn code sau vào file, thay đổi thông tin kết nối cho phù hợp với thiết lập của bạn.

```python
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

DATABASE_URL = "postgresql://user:password@localhost/bookstore_db"  # Thay đổi thông tin kết nối

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()
```

---

## Bước 3: Xây dựng các mô hình dữ liệu

* **Tạo models.py**: Trong thư mục app, tạo file *models.py* để định nghĩa cấu trúc bảng *sach*.
* **Tạo schemas.py**: Tạo file *schemas.py* để định nghĩa cấu trúc dữ liệu cho request và response bằng Pydantic.
* **Tạo crud.py**: Tạo file *crud.py* để chứa các hàm logic thao tác với database (CRUD - Create, Read, Update, Delete).

---

## Bước 4: Xây dựng và chạy API

**Tạo file API chính**
Tạo file *app/main.py* để định nghĩa các endpoint và kết nối tất cả các thành phần.

**Tạo bảng**
Khi chạy ứng dụng lần đầu, SQLAlchemy sẽ tự động tạo bảng *sach* trong cơ sở dữ liệu của bạn dựa trên định nghĩa trong *models.py*.

**Khởi động server**
Từ thư mục gốc của dự án, chạy lệnh sau để khởi động server.

```bash
uvicorn app.main:app --reload
```

Lệnh này sẽ chạy server trên [http://127.0.0.1:8000](http://127.0.0.1:8000).

Sử dụng trình duyệt, truy cập [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs) để xem giao diện tài liệu API tương tác.

---

## Bước 5: Kiểm thử và phát triển

Sử dụng giao diện Swagger UI tại `/docs` để kiểm tra các endpoint, thêm, sửa, xóa sách.

Bạn đã hoàn tất các bước cơ bản để xây dựng một dự án API hoàn chỉnh.
