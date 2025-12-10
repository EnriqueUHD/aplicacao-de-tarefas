import "./ItemTarefa.css";

export default function ItemTarefa({ tarefa, onEditar, onExcluir }) {
  return (
    <li className="item-tarefa">
      <span>{tarefa.texto}</span>

      <div className="item-tarefa-actions">
        <button className="btn-editar" onClick={() => onEditar(tarefa)}>
          Editar
        </button>
        <button className="btn-excluir" onClick={() => onExcluir(tarefa.id)}>
          Excluir
        </button>
      </div>
    </li>
  );
}