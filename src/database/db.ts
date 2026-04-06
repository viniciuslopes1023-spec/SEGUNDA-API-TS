//SIMULANDO UM BANCO DE DADOS

export interface User{
    id: number;
    name: string;
    email: string;
}
export let users: User[] = [];
let currentId = 1;

export function getNextUserId(): number {
    return currentId++;
}