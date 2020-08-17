import repositories.user_repo as userRepo
from models.user import User
import jsonpickle
# défintion d'une méthode pour récupérer les users dans la base de données avec le repo

def get_users():
    users = userRepo.get_users()
    return jsonpickle.encode(users)

def get_user_by_id(user_id):
    user = userRepo.get_user_by_id(user_id)
    return jsonpickle.encode(user)

def create_user(userDto):
    user = User(userDto.nom, userDto.prenom, userDto.naissance, userDto.mail, userDto.login, userDto.password) 
    return userRepo.create_user(user)   

def update_user(userDto , user_id):
    user = User(userDto.nom, userDto.prenom, userDto.naissance, userDto.mail, userDto.login, userDto.password) 
    return userRepo.update_user(user , user_id)

def delete_user(user_id):
    return userRepo.delete_user(user_id)

