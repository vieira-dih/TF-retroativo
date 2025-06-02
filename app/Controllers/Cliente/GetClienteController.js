import Cliente from '../../Models/Cliente.js';

export default async (request, response) => {
    const HTTP_STATUS = {
        SUCCESS_OK: 200,
        NOT_FOUND: 404,
        SERVER_ERROR: 500
    };

    const { codigo } = request.params;

    try {
        const cliente = await Cliente.findByPk(codigo);

        if (!cliente) {
            return response.status(HTTP_STATUS.NOT_FOUND).json({ error: 'Cliente não encontrado.' });
        }

        return response.status(HTTP_STATUS.SUCCESS_OK).json(cliente);

    } catch (error) {
        return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Erro interno do servidor.' });
    }
};
