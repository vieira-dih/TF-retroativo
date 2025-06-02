import Cliente from '../../Models/Cliente.js';

export default async (request, response) => {
    const HTTP_STATUS = {
        SUCCESS_CREATED: 201,
        BAD_REQUEST: 400,
        SERVER_ERROR: 500
    };

    const {
        nome,
        data_nascimento,
        rg,
        cpf,
        telefone,
        endereco,
        numero,
        cidade,
        uf,
        cep
    } = request.body;

    if (!nome || nome.trim() === '') {
        return response.status(HTTP_STATUS.BAD_REQUEST).json({ error: 'O campo nome é obrigatório e não pode ser vazio.' });
    }

    try {
        //vizualiza se o CPF já existe
        if (cpf) {
            const existing = await Cliente.findOne({ where: { cpf } });
            if (existing) {
                return response.status(HTTP_STATUS.BAD_REQUEST).json({ error: 'CPF já existente.' });
            }
        }

        const cliente = await Cliente.create({
            nome,
            data_nascimento,
            rg,
            cpf,
            telefone,
            endereco,
            numero,
            cidade,
            uf,
            cep
        });

        return response.status(HTTP_STATUS.SUCCESS_CREATED).json(cliente);

    } catch (error) {
        return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Erro interno do servidor.' });
    }
};
