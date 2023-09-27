const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <div className="filter">
        <h2>Filtrar:</h2>
        <div className="filter-options">
            <div>
                <p>Status:</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">Todas</option>
                    <option value="Completed">Concluidas</option>
                    <option value="Incompleted">Pendentes</option>
                </select>
            </div>
            <div>
                <p>Ordenar:</p>
                <button onClick={() => setSort('A-Z')}>A-Z</button>
                <button onClick={() => setSort('Z-A')}>Z-A</button>
            </div>
        </div>
    </div>
  )
}

export default Filter
