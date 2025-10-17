from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List, Annotated
from database import SessionLocal
from models import Users
from auth import get_current_user
from pydantic import BaseModel


router = APIRouter(
    prefix = '/admin',
    tags = ['admin']
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


db_dependency = Annotated[Session, Depends(get_db)]
user_dependency = Annotated[dict, Depends(get_current_user)]

class UserResponse(BaseModel):
    id: int
    username: str
    email: str
    phone_number: str
    direction: str
    is_approved: bool
    account_type: str
    created_at: str

    class Config:
        from_attribute = True

class UserUpdate(BaseModel):
    is_approved: bool = None
    account_type: str = None

@router.get('/users', response_model = List[UserResponse])
async def get_users(user: user_dependency,
                    db: db_dependency):
    if user is None or user.get('account_type') != 'master':
        raise HTTPException(status_code = status.HTTP_403_FORBIDDEN, detail = 'Usuario no autorizado')
    
    users = db.query(Users).all()
    return users

@router.get('/users/pending', response_model = List[UserResponse])
async def get_pending_users(user: user_dependency,
                            db: db_dependency):
    if user is None or user.get('account_type') != 'master':
        raise HTTPException(status_code = status.HTTP_403_FORBIDDEN, detail = 'Usuario no autorizado')
    pending_users = db.query(Users).filter(Users.is_approved == False).all()
    return pending_users

@router.patch('/users/{user_id}', response_model = UserResponse)
async def update_user(user_id: int, user_update: UserUpdate, user: user_dependency, db: db_dependency):
    if user is None or user.get('account_type') != 'master':
        raise HTTPException(status_code = status.HTTP_403_FORBIDDEN, detail = 'Usuario no autorizado')
    db_user = db.query(Users).filter(Users.id == user_id).first()
    if not db_user:
        raise HTTPException(status_code = 404, detail = 'Usuario no encontrado')

    if user_update.is_approved is not None:
        db_user.is_approved = user_update.is_approved
    if user_update.account_type is not None:
        db_user.account_type = user_update.account_type
    
    db.commit()
    db.refresh(db_user)
    return db_user
    

@router.delete('/users/{user_id}')
async def delete_user(user_id: int, user: user_dependency, db: db_dependency):
    if user is None or user.get('account_type') != 'master':
        raise HTTPException(status_code = status.HTTP_403_FORBIDDEN, detail = 'Usuario no autorizado')
    
    db_user = db.query(Users).filter(Users.id == user_id).first()

    if not db_user:
        raise HTTPException(status_code = 404, detail = 'Usuario no encontrado')


    db.delete(db_user)
    db.commit()
    return {'message': 'Usuario eliminado exitosamente'}





