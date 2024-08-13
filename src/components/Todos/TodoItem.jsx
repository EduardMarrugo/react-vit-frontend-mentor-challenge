import CrossIcon from "./../icons/CrossIcon";
import CheckIcon from "../icons/CheckIcon";
import React from "react";
const TodoItem = React.forwardRef(
    ({ todo, updateTodo, deleteTodo, ...props }, ref) => {
        const { id, title, completed } = todo;

        return (
            <article
                ref={ref}
                {...props}
                className="flex items-center gap-4 border-b border-b-gray-300 dark:text-white"
            >
                <button
                    className={`${completed && "bg-gradient-to-t from-violet-500 to-sky-500"} grid h-5 w-5 flex-none place-items-center rounded-full border-2`}
                    onClick={() => updateTodo(id)}
                >
                    {completed && <CheckIcon />}
                </button>
                <p
                    className={`grow ${completed && "text-gray-600 line-through"}`}
                >
                    {title}
                </p>
                <button className="flex-none" onClick={() => deleteTodo(id)}>
                    <CrossIcon />
                </button>
            </article>
        );
    }
);
export default TodoItem;
