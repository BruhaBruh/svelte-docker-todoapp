import { writable } from "svelte/store";

interface ITODO {
  id: number;
  text: string;
  checked: boolean;
}

const loadTodos = () => {
  let todos = localStorage.getItem("todos");
  if (!todos) return [];
  if (!JSON.parse(todos)) return [];
  return JSON.parse(todos);
};

const createTodo = () => {
  const { subscribe, set, update } = writable<ITODO[]>(loadTodos());

  subscribe((v) => {
    localStorage.setItem("todos", JSON.stringify(v));
  });

  return {
    subscribe,
    add: (text: string) =>
      update((v) => [
        ...v,
        {
          id: new Date().getTime(),
          text,
          checked: false,
        },
      ]),
    setChecked: (id: number, checked: boolean) =>
      update((v) =>
        v.map((t) => {
          if (t.id === id) {
            return {
              ...t,
              checked,
            };
          }
          return t;
        })
      ),
    remove: (id: number) => update((v) => v.filter((t) => t.id !== id)),
    reset: () => set([]),
  };
};

const todo = createTodo();

export default todo;
