const Filter = () => {
  return (
    <div className="filter">
        <h2>Filtrar:</h2>
        <div className="filter-options">
            <div>
                <p>Status:</p>
                <select>
                    <option value="All">Todas</option>
                    <option value="Completed">Concluidas</option>
                    <option value="Incompleted">Pendentes</option>
                </select>
            </div>
            <div>
                <p>Ordenar:</p>
                <button>A-Z</button>
                <button>Z-A</button>
            </div>
        </div>
    </div>
  )
}

export default Filter
