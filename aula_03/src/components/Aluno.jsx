import React from 'react';

function Aluno({ nome, email, curso }) {
  return (
    <div>
      <h2>Nome: {nome}</h2>
      <p>Email: {email}</p>
      <p>Curso: {curso}</p>
      <hr />
    </div>
  );
}

export default Aluno;
