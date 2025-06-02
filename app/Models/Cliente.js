import sequelize from '../../config/sequelize.js';
import { DataTypes } from 'sequelize';

export default (function () {
    return sequelize.define(
        "Cliente",
        {
            codigo: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "O campo nome não pode ser vazio"
                    }
                }
            },
            data_nascimento: {
                type: DataTypes.DATEONLY,
                allowNull: true,
                validate: {
                    isDate: {
                        msg: "Data de nascimento inválida"
                    }
                }
            },
            rg: {
                type: DataTypes.STRING,
                allowNull: true
            },
            cpf: {
                type: DataTypes.STRING,
                allowNull: true,
                unique: {
                    msg: "CPF já existe"
                },
                validate: {
                    is: {
                        args: /^[0-9]{11}$/,
                        msg: "CPF deve conter 11 dígitos numéricos"
                    }
                }
            },
            telefone: {
                type: DataTypes.STRING,
                allowNull: true,
                validate: {
                    is: {
                        args: /^[0-9]{10,11}$/,
                        msg: "Telefone deve conter 10 ou 11 dígitos numéricos"
                    }
                }
            },
            endereco: {
                type: DataTypes.STRING,
                allowNull: true
            },
            numero: {
                type: DataTypes.STRING,
                allowNull: true
            },
            cidade: {
                type: DataTypes.STRING,
                allowNull: true
            },
            uf: {
                type: DataTypes.STRING(2),
                allowNull: true,
                validate: {
                    isAlpha: {
                        msg: "UF deve conter apenas letras"
                    },
                    len: {
                        args: [2, 2],
                        msg: "UF deve conter 2 caracteres"
                    }
                }
            },
            cep: {
                type: DataTypes.STRING,
                allowNull: true,
                validate: {
                    is: {
                        args: /^[0-9]{8}$/,
                        msg: "CEP deve conter 8 dígitos numéricos"
                    }
                }
            }
        },
        {
            tableName: "clientes",
            timestamps: false
        }
    );
})();
