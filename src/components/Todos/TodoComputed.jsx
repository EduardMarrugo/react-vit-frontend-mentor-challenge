const TodoComputed = ({ computedItemsLeft, clearCompleted }) => {
    return (
        <section className="flex justify-between p-4 transition-all duration-700 dark:bg-gray-800">
            <span className="text-gray-400">
                {" "}
                {computedItemsLeft} items left
            </span>
            <button className="text-gray-400" onClick={clearCompleted}>
                {" "}
                Clear Completed
            </button>
        </section>
    );
};

export default TodoComputed;
