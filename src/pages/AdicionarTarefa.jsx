import { useContext, useState } from "react";
import { TarefasContext } from "../context/TarefasContext";
import { useNavigate, Link } from "react-router-dom";
import "./AdicionarTarefa.css";

export default function AdicionarTarefa() {
  const { adicionarTarefa } = useContext(TarefasContext);
  const [texto, setTexto] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    
    const textoLimpo = texto.trim();
    
    if (textoLimpo === "") {
      alert("Por favor, digite uma tarefa válida!");
      return;
    }
    
    adicionarTarefa(textoLimpo);
    setTexto("");
    navigate("/");
  }

  return (
    <div className="adicionar-container">
      <h1>Nova Tarefa</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="tarefa">Descrição da Tarefa</label>
          <input
            id="tarefa"
            value={texto}
            onChange={e => setTexto(e.target.value)}
            placeholder="Digite a tarefa..."
            required
          />
        </div>

        <div className="form-actions">
          <Link to="/">
            <button type="button" className="btn-voltar">
              Voltar
            </button>
          </Link>
          <button type="submit" className="btn-submit">
            Salvar Tarefa
          </button>
        </div>
      </form>
    </div>
  );
}