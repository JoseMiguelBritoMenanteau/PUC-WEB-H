from fastapi import FastAPI, status, Depends, HTTPException
import models
from database import engine, SessionLocal
from typing import Annotated, List
from sqlalchemy.orm import Session
import auth
from auth import get_current_user, UserResponse

app = FastAPI()
app.include_router(auth.router)

models.Base.metadata.create_all(bind = engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]
user_dependency = Annotated[dict, Depends(get_current_user)]


@app.get('/', status_code=status.HTTP_200_OK)
async def user(user: user_dependency, db: db_dependency):
    if user is None:
        raise HTTPException(status_code = 401, detail = 'Autentificación Fallida')
    return {'User': user}

@app.get('/users', response_model = List[UserResponse])
async def get_all_users(db: db_dependency):
    users = db.query(models.Users).all()
    return users


@app.delete('/users/me', status_code = status.HTTP_204_NO_CONTENT)
async def delete_own_user(user: user_dependency, db: db_dependency):
    if user is None:
        raise HTTPException(status_code = status.HTTP_401_UNAUTHORIZED, detail = 'Autentificación Fallida')
    
    user_caso = db.query(models.Users).filter(models.Users.id == user['id']).first()

    if user_caso is None:
        raise HTTPException(status_code = status.HTTP_404_NOT_FOUND, detail = 'Usuario no encontrado')
    
    db.delete(user_caso)
    db.commit()





