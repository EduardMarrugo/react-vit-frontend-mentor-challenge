import TodoList from "./components/Todos/TodoList";
import TodoFilter from "./components/Todos/TodoFIlter";
import TodoCreate from "./components/Todos/TodoCreate";
import TodoComputed from "./components/Todos/TodoComputed";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import "./index.css";

const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const createTodo = (todoTitle) => {
        const newTodo = {
            id: Date.now(),
            title: todoTitle,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const updateTodo = (todoId) => {
        const updateTodoArray = todos.map((todo) => {
            if (todo.id == todoId) todo.completed = !todo.completed;
            return todo;
        });
        setTodos(updateTodoArray);
    };

    const deleteTodo = (todoId) => {
        const deleteTodoArray = todos.filter((todo) => todo.id !== todoId);
        setTodos(deleteTodoArray);
    };

    const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const [filter, setFilter] = useState("all");

    const filteredTodos = todos.filter((todo) => {
        switch (filter) {
            case "all":
                return true;

            case "active":
                return !todo.completed;
            case "completed":
                return todo.completed;
        }
    });

    const handlerFilter = (filter) => {
        setFilter(filter);
    };

    const handleDragEnd = (result) => {
        const { destination, source } = result;
        if (!destination) return;
        if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
        )
            return;

        setTodos((prevTasks) =>
            reorder(prevTasks, source.index, destination.index)
        );
    };

    return (
        <div className="main">
            <Header />
            <main className="container mx-auto mt-8 px-4 md:max-w-3xl">
                <TodoCreate createTodo={createTodo} />

                <DragDropContext onDragEnd={handleDragEnd}>
                    <TodoList
                        todos={filteredTodos}
                        updateTodo={updateTodo}
                        deleteTodo={deleteTodo}
                    />
                </DragDropContext>

                <TodoComputed
                    computedItemsLeft={computedItemsLeft}
                    clearCompleted={clearCompleted}
                />
                <TodoFilter handlerFilter={handlerFilter} filter={filter} />
            </main>
            <Footer />
        </div>
    );
};

export default App;
