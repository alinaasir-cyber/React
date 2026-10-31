import { useState } from 'react';
import styles from './TodoList.module.css';

export default function TodoList() {
    
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const addTodo = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
        setInput('');
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(t => t.id !== id));
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h2 className={styles.title}>My Todo List</h2>
                
                <form onSubmit={addTodo} className={styles.form}>
                    <input 
                        type="text" 
                        placeholder="Add a new todo..." 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className={styles.input}
                    />
                    <button type="submit" className={styles.addButton}>Add</button>
                </form>

                <ul className={styles.list}>
                    {todos.map((todo) => (
                        <li 
                            key={todo.id} 
                            className={`${styles.listItem} ${todo.completed ? styles.completedItem : ''}`}
                        >
                            <div className={styles.itemContent}>
                                <input 
                                    type="checkbox" 
                                    checked={todo.completed}
                                    onChange={() => toggleTodo(todo.id)}
                                    className={styles.checkbox}
                                />
                                <span className={`${styles.text} ${todo.completed ? styles.completedText : ''}`}>
                                    {todo.text}
                                </span>
                            </div>
                            <button 
                                onClick={() => deleteTodo(todo.id)}
                                className={styles.deleteButton}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}