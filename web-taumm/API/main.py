from fastapi import FastAPI, status, Depends, HTTPException
import models
from database import engine, SessionLocal
from typing import Annotated
from sqlalchemy.orm import Session
import auth
import admin
from auth import get_current_user

app = FastAPI()
app.include_router(auth.router)
app.include_router(admin.router)

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


@app.get('/account-status', status_code = status.HTTP_200_OK)
async def account_status(user: user_dependency):
    if user is None:
        raise HTTPException(status_code = 401, detail = 'Autentificación Fallida')
    return user





