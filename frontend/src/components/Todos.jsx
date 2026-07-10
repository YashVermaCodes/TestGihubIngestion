export function Todos({ todos, onDelete }) {
    return <div>
        {/* Added index to the map function so we know which one to delete */}
        {todos.map(function(todo, index) {
            return <div key={index} style={{
                border: '1px solid #ccc',
                padding: '10px',
                margin: '10px',
                borderRadius: '5px'
            }}>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed === true ? "Completed" : "Mark as Complete"}</button>
                
                {/* New Feature: Delete Button */}
                <button 
                    style={{ marginLeft: '10px', backgroundColor: '#ff4c4c', color: 'white' }}
                    onClick={() => onDelete(index)}
                >
                    Delete
                </button>
            </div>
        })}
    </div>
}