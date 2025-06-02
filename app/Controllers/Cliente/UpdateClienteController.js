import Cliente from '../../Models/Cliente.js';

export default async (request, response) => {
    const HTTP_STATUS = {
        SUCCESS_OK: 200,
        BAD_REQUEST: 400,
        NOT_FOUND: 404,
        SERVER_ERROR: 500
    };

    const { codigo } = request.params;
    const updates = request.body;

    if (updates.nome !== undefined && (updates.nome === null || updates.nome.trim() === '')) {
        return response.status(HTTP_STATUS.BAD_REQUEST).json({ error: 'O campo nome não pode ser vazio.' });
    }

    try {
        const cliente = await Cliente.findByPk(codigo);
        if (!cliente) {
            return response.status(HTTP_STATUS.NOT_FOUND).json({ error: 'Cliente não encontrado.' });
        }

        if (updates.cpf) {
            const existing = await Cliente.findOne({ where: { cpf: updates.cpf } });
            if (existing && existing.codigo !== cliente.codigo) {
                return response.status(HTTP_STATUS.BAD_REQUEST).json({ error: 'CPF já existente.' });
            }
        }

        await cliente.update(updates);

        return response.status(HTTP_STATUS.SUCCESS_OK).json(cliente);

    } catch (error) {
        return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Erro interno do servidor.' });
    }
};
