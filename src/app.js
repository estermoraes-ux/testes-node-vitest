import express from 'express';
import { validarAluno } from './alunoService.js';

const app = express();
app.use(express.json());

const alunos = [];

app.get('/alunos', (req, res) => {
  return res.status(200).json(alunos);
});

app.post('/alunos', (req, res) => {
  try {
    const { nome, email } = req.body;
    validarAluno({ nome, email });

    const novoAluno = { id: Date.now().toString(), nome, email };
    alunos.push(novoAluno);

    return res.status(201).json(novoAluno);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

export default app;