import React,{useState} from "react";


export const Todo = () => {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);
    const [editId, setEditId] = useState(0);

    const handleSubmit= (e) => {
        e.preventDefault();
        if(editId){
            const editTodo = todos.find((i) =>
            i.id === editId);
        const updatedTodos = todos.map((t) =>
        t.id === editTodo.id
            ? (t = { id: t.id, todo})
            : {id: t.id,todo: t.todo}
        );
        setTodos(updatedTodos);
        setEditId(0);
        setTodo('');
        return;
        }

        if (todo !== "") {
            setTodos([{id:`${todo}-{Date.now()}`, todo},...todos])
            setTodo('') 
        }
    };

    const handleDelete = (id) => {
        const delTodo = todos.filter((to) => to.id!== id);
        setTodos([...delTodo]);
    };
    const handleEdit = (id) => {
        const editTodo = todos.find((i) =>i.id!== id);
        setTodo(editTodo.todo);
        setEditId(editTodo);
    };

    return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                    />
                    <button type="submit" >{editId ? "Edit" : "Add"}</button>
                </form>
                <ul >
                {todos.map((t) =>(
                    <div>
                    <li key={t.id}>{t.todo}</li>
                    <button onClick={()=>handleEdit(t.id)}>Edit</button>
                    <button onClick={()=>handleDelete(t.id)}>Del</button>
                    </div>
                ))}
                </ul>
            </div>
    )
}


