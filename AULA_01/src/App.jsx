import React from 'react'
import Exercicio1Adicao from './components/Exercicio1Adicao'
import Exercicio1Subtracao from './components/Exercicio1Subtracao'
import Exercicio1Divisao from './components/Exercicio1Divisao'
import Exercicio1Multiplicacao from './components/Exercicio1Multiplicacao'
import PrecisoEstudar from './components/PrecisoEstudar'

const App = () => {
  return (
    <div>
      <Exercicio1Adicao num1={4} num2={7}/>
      <Exercicio1Subtracao num1={10} num2={8}/>
      <Exercicio1Divisao num1={12} num2={2}/>
      <Exercicio1Multiplicacao num1={2} num2={8}/>
      <PrecisoEstudar/>
    </div>
  )
}

export default App