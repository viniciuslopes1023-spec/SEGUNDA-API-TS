import { Request, Response } from "express";
import * as userService from "../services/userService";

export const createUser = (req: Request, res: Response) => {
    const { name, email } = req.body;
    if (!name || !email) {
        res.status(400).json({ error: "Nome e email são campos obrigatórios" });
        return;
    }
    const user = userService.createUser(name, email);
    return res.status(201).json({
        message: "Usuário criado com sucesso",
        user
    });
};

export const list = (req: Request, res: Response) => {
    const users = userService.getUsers();
    return res.json({ users });
};

export const update = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const { name, email } = req.body;
    const user = userService.updateUser(id, name, email);

    if (!user) {
        return res.status(404).json({
            message: "Usuário não encontrado"
        });
    }

    return res.json({
        message: "Usuário atualizado com sucesso",
        user
    });
};

export const deleteUser = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    
    const user = userService.deleteUser(id);

    if (!user) {
        return res.status(404).json({
            message: "Usuário não encontrado"
        });
    }
    return res.json({
        message: "Usuário deletado com sucesso",
        user
    });
}; 

    


    
  