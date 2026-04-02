import type { User } from "../models/user.model";

let users: User[] = [];
let idCounter = 1;

export const createUser = (name: string, email: string): User => {
    const user = { id: idCounter++, name, email };
    users.push(user);
    return user;
};

export const getUsers = () => users;

export const getUserById = (id: number) =>
    users.find(u => u.id === id);

export const updateUser = (id: number, data: Partial<User>) => {
    const user = users.find(u => u.id === id);
    if (!user) return null;

    Object.assign(user, data);
    return user;
};

export const deleteUser = (id: number) => {
    users = users.filter(u => u.id !== id);
};