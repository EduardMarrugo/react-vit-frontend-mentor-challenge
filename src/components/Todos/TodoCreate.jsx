import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim()) return "Error";

        createTodo(title);

        setTitle("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="transition-all duration-700 flex items-center gap-2 overflow-hidden rounded-md bg-white px-4 py-4 dark:bg-gray-800 dark:text-white"
        >
            <span className="inline-block h-5 w-5 rounded-full border-2"></span>
            <input
                type="text"
                className="transition-all duration-700 w-full text-gray-500 outline-none dark:bg-gray-800 dark:text-white"
                placeholder="Create a new todo..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
};

export default TodoCreate;
