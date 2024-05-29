import React, { useState } from 'react';

const FormularioDeContato = () => {
  const [nome, setNome] = useState('');
  const [contato, setContato] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const dadosFormulario = {
      nome,
      contato,
      mensagem,
    };
    const jsonToSend = JSON.stringify(dadosFormulario);
    console.log(`O seguinte JSON será enviado via HTTP POST para o back-end: ${jsonToSend}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Nome:
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Contato:
          <input type="text" value={contato} onChange={(e) => setContato(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Mensagem:
          <textarea value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
        </label>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioDeContato;
