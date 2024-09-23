import React, { useState } from 'react';

const Despesas: React.FC = () => {
  const [valorDespesa, setValorDespesa] = useState(0);

  const handleAdicionarDespesa = () => {
    // falta lógica para adicionar a despesa
  };

  return (
    <div>
      <h2>Adicionar Despesa</h2>
      <input 
        type="number" 
        value={valorDespesa} 
        onChange={(e) => setValorDespesa(Number(e.target.value))} 
      />
      <button onClick={handleAdicionarDespesa}>Adicionar</button>
    </div>
  );
};

export default Despesas;