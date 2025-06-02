import Cliente from '../../Models/Cliente.js';
import { Op } from 'sequelize';

export default async (request, response) => {
    const HTTP_STATUS = {
        SUCCESS_OK: 200,
        SERVER_ERROR: 500
    };

    const { nome, cidade, uf } = request.query;

    const where = {};

    if (nome) {
        where.nome = { [Op.iLike]: `%${nome}%` };
    }
    if (cidade) {
        where.cidade = { [Op.iLike]: `%${cidade}%` };
    }
    if (uf) {
        where.uf = { [Op.iLike]: uf };
    }

    try {
        const clientes = await Cliente.findAll({ where });
        return response.status(HTTP_STATUS.SUCCESS_OK).json(clientes);
    } catch (error) {
        return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Erro interno do servidor.' });
    }
};
