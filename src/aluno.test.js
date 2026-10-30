import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from './app.js';
import { validarAluno } from './alunoService.js';

describe('Testes do Módulo de Alunos', () => {

  // 1. Testes Unitários
  it('Deve validar com sucesso um aluno com dados corretos', () => {
    const alunoValido = { nome: 'João Silva', email: 'joao@email.com' };
    expect(validarAluno(alunoValido)).toBe(true);
  });

  it('Deve lançar erro ao tentar cadastrar aluno sem e-mail', () => {
    const alunoInvalido = { nome: 'João Silva' };
    expect(() => validarAluno(alunoInvalido)).toThrow('Nome e e-mail são obrigatórios.');
  });

  // 2. Teste de Rota com Supertest
  it('Deve listar os alunos via GET /alunos e retornar status 200', async () => {
    const response = await request(app).get('/alunos');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

});