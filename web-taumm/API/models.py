from database import Base
from sqlalchemy import Column, Integer, String, Boolean, Float, DateTime
from sqlalchemy.sql import func


class Users(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key = True, index = True)
    username = Column(String, unique = True)
    email = Column(String, unique = True)
    hashed_password = Column(String)
    phone_number = Column(String)
    direction = Column(String)
    is_approved = Column(Boolean, default = False)
    account_type = Column(String, default = 'pending')
    created_at = Column(DateTime(timezone = True), server_default = func.now())


    