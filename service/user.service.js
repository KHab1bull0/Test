import { User } from '../model/schema.js'

export const getOneUser = (login) => {
    return User.findOne({login: login});
};

export const createUser = (obj) => {
    return User(obj);
};