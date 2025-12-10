import { createContext, useState, useEffect } from "react";

export const TarefasContext = createContext();

export function TarefasProvider({ children }) {
  const [tarefas, setTarefas] = useState(() => {
    const tarefasSalvas = localStorage.getItem("tarefas");
    return tarefasSalvas ? JSON.parse(tarefasSalvas) : [];
  });

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  function adicionarTarefa(texto) {
    setTarefas([...tarefas, { id: Date.now(), texto }]);
  }

  function removerTarefa(id) {
    setTarefas(tarefas.filter(t => t.id !== id));
  }

  function editarTarefa(id, novoTexto) {
    setTarefas(
      tarefas.map(t =>
        t.id === id ? { ...t, texto: novoTexto } : t
      )
    );
  }

  return (
    <TarefasContext.Provider
      value={{ tarefas, adicionarTarefa, removerTarefa, editarTarefa }}
    >
      {children}
    </TarefasContext.Provider>
  );
}
