const TodoFilter = ({ handlerFilter, filter }) => {
    return (
        <section className="contianer mx-auto mt-8">
            <div className="transition-all duration-700  flex justify-center gap-4 rounded-md bg-white p-4 dark:bg-gray-800 dark:text-white">
                <button
                    className={`hover:text-blue-500 ${filter == "all" && "text-blue-500"}`}
                    onClick={() => handlerFilter("all")}
                >
                    All
                </button>
                <button
                    className={`hover:text-blue-500 ${filter == "active" && "text-blue-500"}`}
                    onClick={() => handlerFilter("active")}
                >
                    Active
                </button>
                <button
                    className={`hover:text-blue-500 ${filter == "completed" && "text-blue-500"}`}
                    onClick={() => handlerFilter("completed")}
                >
                    Completed
                </button>
            </div>
        </section>
    );
};

export default TodoFilter;
