import {users, getNextUserId} from '../database/db';
import {User} from '../database/db';

export function createUser(name: string, email: string): User {
    const newUser: User = {
        id: getNextUserId(),
        name,
        email
    };

    users.push(newUser);
    return newUser;
};
export const getUsers = () : User[] => users;

export const updateUser = (id : number, name?: string, email?: string) => {
    const user = users.find(u => u.id === id);
    if(!user){
        return null;
    }
    if(name !== undefined){
        user.name = name;
    }
    if(email !== undefined){
        user.email = email;

    }
    return user;
};
export const deleteUser = (id : number) => {
    const index = users.findIndex(u => u.id === id);
    if(index !== -1){
        const removedUser = users.splice(index, 1);
        return removedUser[0];
    }
    return null;
};