import { useMemo, useRef } from "react";
import useStore from "../store";
import Todo from "./Todo";

const ListTodo = () => {
  const {
    listTodo,
    complete,
    All,
    Active,
    Completed,
    setAll,
    setActive,
    setComplete,
    clearComplete,
    setListTodo,
  } = useStore();

  const dragTodo = useRef(0);
  const dragOverTodo = useRef(0);
  function handleSort() {
    const listTodoCopy = [...listTodo];
    const temp = listTodoCopy[dragTodo.current];
    listTodoCopy[dragTodo.current] = listTodoCopy[dragOverTodo.current];
    listTodoCopy[dragOverTodo.current] = temp;
    setListTodo(listTodoCopy);
  }

  function handleCheckboxChange(id, isComplete) {
    complete(!isComplete, id);
  }

  const itemLeft = useMemo(() => {
    return listTodo.filter((todo) => todo.isComplete === false).length;
  }, [listTodo]);

  const allTodo = listTodo.map((element, index) => {
    return (
      <Todo
        key={element.id}
        index={index}
        element={element}
        handleCheckboxChange={handleCheckboxChange}
        handleSort={handleSort}
        dragTodo={dragTodo}
        dragOverTodo={dragOverTodo}
      ></Todo>
    );
  });

  const activeTodo = listTodo.map((element) => {
    if (!element.isComplete) {
      return (
        <Todo
          key={element.id}
          element={element}
          handleCheckboxChange={handleCheckboxChange}
        ></Todo>
      );
    }
  });

  const completeTodo = listTodo.map((element) => {
    if (element.isComplete) {
      return (
        <Todo
          key={element.id}
          element={element}
          handleCheckboxChange={handleCheckboxChange}
        ></Todo>
      );
    }
  });

  function handleAllToDo() {
    setAll(true);
    setActive(false);
    setComplete(false);
  }

  function handleActiveToDo() {
    setAll(false);
    setActive(true);
    setComplete(false);
  }

  function handleCompleteToDo() {
    setAll(false);
    setActive(false);
    setComplete(true);
  }

  return (
    <section className="w-1/3 max-xl:w-1/2 max-[800px]:w-11/12 bg-white dark:bg-very-dark-desaturated-blue-dark-theme rounded-md shadow-xl">
      <div>
        {All && allTodo}
        {Active && activeTodo}
        {Completed && completeTodo}
      </div>
      <div className="flex justify-between p-4 max-[450px]:relative">
        <span className="cursor-default dark:text-very-dark-grayish-blue-dark-theme">
          {itemLeft} items left
        </span>
        <div className="flex gap-3 max-[450px]:absolute max-[450px]:flex max-[450px]:justify-center max-[450px]:top-20 max-[450px]:left-0 max-[450px]:right-0 max-[450px]:mx-auto max-[450px]:bg-white max-[450px]:shadow-xl max-[450px]:p-4 max-[450px]:rounded-lg dark:max-[450px]:bg-very-dark-desaturated-blue-dark-theme">
          <span
            onClick={handleAllToDo}
            className={`${
              All
                ? " text-bright-blue-primary"
                : " text-dark-grayish-blue-ligth-theme dark:text-very-dark-grayish-blue-dark-theme"
            }`}
          >
            All
          </span>
          <span
            onClick={handleActiveToDo}
            className={`${
              Active
                ? "text-very-dark-grayish-blue-ligth-theme dark:text-light-grayish-blue-dark-theme"
                : " text-dark-grayish-blue-ligth-theme dark:text-very-dark-grayish-blue-dark-theme"
            }`}
          >
            Active
          </span>
          <span
            onClick={handleCompleteToDo}
            className={`${
              Completed
                ? "text-very-dark-grayish-blue-ligth-theme dark:text-light-grayish-blue-dark-theme"
                : "text-dark-grayish-blue-ligth-theme dark:text-very-dark-grayish-blue-dark-theme"
            }`}
          >
            Completed
          </span>
        </div>
        <span
          onClick={() => clearComplete()}
          className="hover:text-very-dark-grayish-blue-ligth-theme dark:text-very-dark-grayish-blue-dark-theme dark:hover:dark:text-light-grayish-blue-dark-theme"
        >
          Clear Completed
        </span>
      </div>
    </section>
  );
};

export default ListTodo;
