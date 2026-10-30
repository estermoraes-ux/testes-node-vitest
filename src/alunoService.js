export function validarAluno(dados) {
  if (!dados.nome || !dados.email) {
    throw new Error("Nome e e-mail são obrigatórios.");
  }
  
  if (!dados.email.includes("@")) {
    throw new Error("E-mail inválido.");
  }

  return true;
}