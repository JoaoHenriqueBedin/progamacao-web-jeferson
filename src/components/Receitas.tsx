import React, { useState } from 'react';

const Receitas: React.FC = () => {
  const [valorReceita, setValorReceita] = useState(0);

  const handleAdicionarReceita = () => {
    // falta lógica para adicionar a receita
  };

  return (
    <div>
      <h2>Adicionar Receita</h2>
      <input 
        type="number" 
        value={valorReceita} 
        onChange={(e) => setValorReceita(Number(e.target.value))} 
      />
      <button onClick={handleAdicionarReceita}>Adicionar</button>
    </div>
  );
};

export default Receitas;