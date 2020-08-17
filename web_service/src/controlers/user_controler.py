from flask_classful import FlaskView, route
from flask import jsonify, abort, request
import services.user_service as userService
from dto.user_dto import UserDto
# création d'une classe qui hérite de FlaskView

class UsersControler(FlaskView):
    # définition d'une route de base
    route_base = '/api/users/'

    # définition de l'extension de la route de base
    @route('/')
    def get_users(self):  # definition d'une méthode pour récupérer les utilisateurs depuis le service
        users = userService.get_users()  # users récupérer depuis le service
        return users

    @route('/<int:user_id>', methods=['GET'])
    def get_user_by_id(self, user_id):
        users = userService.get_user_by_id(user_id)
        return users

    @route('/',methods=['POST'])
    def create_user(self):
        nom = request.json['name']
        prenom = request.json['firstname']
        mail = request.json['email']
        naissance = request.json['birthdate']       
        login = request.json['login']
        password = request.json['password']
        user = UserDto(nom, prenom, naissance, mail, login, password)
        msg = userService.create_user(user)
        return jsonify(msg)

    @route('/<int:user_id>', methods=['PUT'])
    def update_user(self, user_id):
        nom = request.json['name']
        prenom = request.json['firstname']
        mail = request.json['email']
        naissance = request.json['birthdate']       
        login = request.json['login']
        password = request.json['password']
        userData = UserDto(nom, prenom, naissance, mail, login, password)
        msg = userService.update_user(userData , user_id)
        return jsonify(msg)

    @route('/<int:user_id>',methods=['DELETE'])
    def delete_user(self,user_id):
        deluser = userService.delete_user(user_id)
        return jsonify(deluser), 200

