import { create } from "zustand";

const useStore = create((set) => ({
  todo: {
    name: "",
    isComplete: false,
  },
  listTodo: [],
  All: true,
  Active: false,
  Completed: false,

  setTodo: (prop, value) =>
    set((state) => ({ todo: { ...state.todo, [prop]: value } })),
  add: (todo) =>
    set((state) => ({
      listTodo: [...state.listTodo, { ...todo, id: Date.now() }],
    })),
  setListTodo: (value) => set({ listTodo: value }),
  complete: (isComplete, id) =>
    set((state) => ({
      listTodo: state.listTodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: isComplete };
        }
        return todo;
      }),
    })),
  remove: (id) =>
    set((state) => ({
      listTodo: state.listTodo.filter((todo) => todo.id !== id),
    })),
  setAll: (value) =>
    set(() => ({
      All: value,
    })),
  setActive: (value) =>
    set(() => ({
      Active: value,
    })),
  setComplete: (value) =>
    set(() => ({
      Completed: value,
    })),
  clearComplete: () =>
    set((state) => ({
      listTodo: state.listTodo.filter((todo) => todo.isComplete !== true),
    })),
}));

export default useStore;
