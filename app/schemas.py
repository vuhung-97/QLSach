from pydantic import BaseModel
from datetime import date
from typing import Optional

class BookBase(BaseModel):
    ten_sach: str
    loai_sach: str
    gia_ban: float
    nha_xuat_ban: str
    ngay_xuat_ban: date
    tom_tat_noi_dung: str
    anh: Optional[str] = None  # Thêm trường ảnh và đặt là tùy chọn (Optional)

class BookCreate(BookBase):
    pass

class Book(BookBase):
    id: int

    class Config:
        orm_mode = True