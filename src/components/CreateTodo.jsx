import useStore from "../store";

const CreateTodo = () => {
  const { todo, setTodo, add } = useStore();

  function handleChange(even) {
    setTodo("name", even.target.value);
  }

  function handleSubmit(even) {
    even.preventDefault();
    add(todo);
    setTodo("name", "");
  }
  return (
    <section className="flex items-center relative w-1/3 max-xl:w-1/2 max-[800px]:w-11/12">
      <div className="bg-white dark:bg-very-dark-desaturated-blue-dark-theme w-[20px] h-[20px] border rounded-[50%] absolute top-0 bottom-0 my-auto left-4"></div>
      <form onSubmit={handleSubmit} className="w-full">
        <input
          type="text"
          className="w-full text-lg p-3 pl-12 rounded-md outline-none dark:bg-very-dark-desaturated-blue-dark-theme text-dark-grayish-blue-dark-theme shadow-xl" 
          placeholder="Create a new todo..."
          onChange={handleChange}
          value={todo.name}
        />
      </form>
    </section>
  );
};

export default CreateTodo;
