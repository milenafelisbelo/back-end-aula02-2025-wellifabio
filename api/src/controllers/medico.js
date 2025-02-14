const con = require('../connect');

function create(req, res) {
    const { nome, crm, especialidade, telefone, email } = req.body;
    const sql = `INSERT INTO medicos (nome, crm, especialidade, telefone, email) VALUES ('${nome}', '${crm}', '${especialidade}','${telefone}', '${email}')`;
    con.query(sql, (error, result) => {
        if (error) {
            res.status(500).json('Erro ao cadastrar medico');
        } else {
            res.status(201).json('medico cadastrado com sucesso');
        }
    });
};

function read(req, res) {
    const sql = 'SELECT * FROM medicos';
    con.query(sql, (error, result) => {
        if (error) {
            res.status(500).json('Erro ao consultar medicos');
        } else {
            res.status(200).json(result);
        }
    });
}

function update(req, res) {
    const { id } = req.params;
    const { nome, crm, especialidade, telefone, email } = req.body;
    const sql = `UPDATE medicos SET nome = '${nome}', crm= '${crm}', especialidade = '${especialidade}', telefone = ${telefone}, email = '${email}' WHERE id_medico = ${id}`;
    con.query(sql, (error, result) => {
        if (error) {
            res.status(500).json('Erro ao alterar medico');
        } else {
            res.status(202).json('medico alterado com sucesso');
        }
    });
}

function del(req, res) {
    const { id } = req.params;
    const sql = `DELETE FROM medicos WHERE id_medico = ${id}`;
    con.query(sql, (error, result) => {
        if (error) {
            res.status(500).json('Erro ao excluir medico');
        } else {
            res.status(204).json('medico excluído com sucesso');
        }
    });
}

module.exports = {
    create,
    read,
    update,
    del
}