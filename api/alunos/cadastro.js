import mysql from 'mysql2';

const db = mysql.createConnection({
    host: 'mysql-xitique.alwaysdata.net',
    user: 'xitique',
    password: 'Acossa@824018...84',
    database: 'xitique_cash',
});

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { nome,turma} = req.body;
        const query = 'INSERT INTO alunos (nome, turma) VALUES (?, ?)';

        db.execute(query, [nome, turma], (err, results) => {
            if (err) {
                return res.status(500).json({ error: 'Erro ao cadastrar aluno' });
            }
            res.status(200).json({ message: 'Aluno cadastrado com sucesso' });
        });
    } else {
        res.status(405).json({ error: 'Método não permitido' });
    }
}
