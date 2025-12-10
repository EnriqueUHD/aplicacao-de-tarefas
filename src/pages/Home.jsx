import { useContext, useState } from "react";
import { TarefasContext } from "../context/TarefasContext";
import { Link } from "react-router-dom";
import ListaTarefas from "../components/ListaTarefas";
import "./Home.css";

export default function Home() {
  const { tarefas, editarTarefa, removerTarefa } = useContext(TarefasContext);
  const [tarefaEditando, setTarefaEditando] = useState(null);
  const [texto, setTexto] = useState("");

  function iniciarEdicao(tarefa) {
    setTarefaEditando(tarefa);
    setTexto(tarefa.texto);
  }

  function salvarEdicao() {
    const textoLimpo = texto.trim();
    
    if (textoLimpo === "") {
      alert("A tarefa não pode estar vazia!");
      return;
    }
    
    editarTarefa(tarefaEditando.id, textoLimpo);
    setTarefaEditando(null);
    setTexto("");
  }

  function cancelarEdicao() {
    setTarefaEditando(null);
    setTexto("");
  }

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Minhas Tarefas</h1>
        <Link to="/adicionar" className="btn-add">
          + Nova Tarefa
        </Link>
      </div>

      {tarefaEditando && (
        <div className="edit-box">
          <span className="edit-label">
            Editando: {tarefaEditando.texto}
          </span>
          <div className="edit-input-group">
            <input
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              placeholder="Digite o novo texto..."
            />
            <button className="btn-salvar" onClick={salvarEdicao}>
              Salvar
            </button>
            <button className="btn-cancelar" onClick={cancelarEdicao}>
              Cancelar
            </button>
          </div>
        </div>
      )}

      <ListaTarefas
        tarefas={tarefas}
        onEditar={iniciarEdicao}
        onExcluir={removerTarefa}
      />
    </div>
  );
}