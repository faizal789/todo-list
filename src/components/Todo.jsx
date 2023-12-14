import { useRef } from "react";
import useStore from "../store";

const Todo = ({
  element,
  handleCheckboxChange,
  index,
  handleSort,
  dragTodo,
  dragOverTodo,
}) => {
  const { remove, complete } = useStore();

  function handleClick() {
    complete(!element.isComplete, element.id);
  }
  return (
    <div
      draggable
      onDragStart={() => (dragTodo.current = index)}
      onDragEnter={() => (dragOverTodo.current = index)}
      onDragEnd={handleSort}
      onDragOver={(e) => e.preventDefault()}
      key={element.id}
      className={`${
        element.isComplete ? "line-through" : ""
      } relative flex items-center gap-4 border-b dark:border-dark-grayish-blue-dark-theme p-4 group`}
    >
      <input
        type="checkbox"
        className="hidden peer"
        id={element.id}
        checked={element.isComplete}
        onChange={() => handleCheckboxChange(element.id, element.isComplete)}
      />
      <div
        onClick={handleClick}
        className="bg-white peer-checked:bg-gradient-to-r peer-checked:from-dark-blue peer-checked:to-dark-magenta cursor-pointer dark:bg-very-dark-desaturated-blue-dark-theme w-[20px] h-[20px] border rounded-[50%] left-3 flex justify-center items-center"
      >
        <img
          src="images/icon-check.svg"
          className={`${element.isComplete ? "block" : "hidden"}`}
          alt="icon check"
        />
      </div>
      <label
        htmlFor={element.id}
        className={`cursor-pointer ${element.isComplete? 'opacity-50':''} dark:text-dark-grayish-blue-dark-theme text-very-dark-grayish-blue-ligth-theme`}
      >
        {element.name}
      </label>
      <img
        onClick={() => remove(element.id)}
        src="images/icon-cross.svg"
        className="ml-auto cursor-pointer invisible group-hover:visible"
        alt="icon cross"
      />
    </div>
  );
};

export default Todo;
