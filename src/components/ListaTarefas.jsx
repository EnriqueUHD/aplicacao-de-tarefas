import "./ListaTarefas.css";
import ItemTarefa from "./ItemTarefa";

export default function ListaTarefas({ tarefas, onEditar, onExcluir }) {
  if (tarefas.length === 0) {
    return (
      <div className="lista-vazia">
        <div className="lista-vazia-icon">📋</div>
        <p className="lista-vazia-texto">Nenhuma tarefa adicionada ainda</p>
      </div>
    );
  }

  return (
    <ul className="lista-tarefas">
      {tarefas.map((tarefa) => (
        <ItemTarefa
          key={tarefa.id}
          tarefa={tarefa}
          onEditar={onEditar}
          onExcluir={onExcluir}
        />
      ))}
    </ul>
  );
}