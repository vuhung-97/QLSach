from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from dotenv import load_dotenv
import os

# Tải các biến môi trường từ file .env
load_dotenv()

# Lấy DATABASE_URL từ biến môi trường
DATABASE_URL = os.getenv("DATABASE_URL")

# Đảm bảo DATABASE_URL đã được thiết lập
if not DATABASE_URL:
    raise ValueError("DATABASE_URL environment variable is not set")

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()