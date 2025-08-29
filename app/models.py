from sqlalchemy import Column, Integer, String, Float, Date, Text
from .database import Base

class Book(Base):
    __tablename__ = "sach"

    id = Column(Integer, primary_key=True, index=True)
    ten_sach = Column(String)
    loai_sach = Column(String)
    gia_ban = Column(Float)
    nha_xuat_ban = Column(String)
    ngay_xuat_ban = Column(Date)
    tom_tat_noi_dung = Column(Text)
    anh = Column(String)  # URL hoặc đường dẫn đến ảnh