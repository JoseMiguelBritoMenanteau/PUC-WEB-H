from database import Base
from sqlalchemy import Column, Integer, String, Boolean, Float, DateTime



class Users(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key = True, index = True)
    username = Column(String, unique = True)
    email = Column(String, unique = True)
    hashed_password = Column(String)
    phone_number = Column(String)
    direction = Column(String)


    