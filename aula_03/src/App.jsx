import Aluno from "./components/Aluno";

function App() {
  return (
    <div>
      {alunos.map((aluno, index) => (
        <Aluno key={index} {...aluno} />
      ))}
    </div>
  );
}


const alunos = [
  { nome: "João", email: "joao@example.com", curso: "Engenharia" },
  { nome: "Maria", email: "maria@example.com", curso: "Ciência da Computação" },
  { nome: "Pedro", email: "pedro@example.com", curso: "Medicina" }
];
