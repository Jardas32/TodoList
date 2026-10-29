import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Todos } from "../types/Types";
import type React from "react";

interface TodosState {
  title: string;
  editTitle: string;
  todos: Todos[];
  selectId: string;

  handleSelectId: (id: string) => void;
  handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEditTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addTasks: (title: string) => void;
  deleteTasks: (id: string) => void;
  completedChange: (id: string) => void;
  editTasks: (id: string, title: string) => void;
  cancel: () => void;
}

export const useTodoStore = create<TodosState>()(
  persist(
    (set) => ({
      title: "",
      editTitle: "",
      todos: [],
      selectId: "",

      handleSelectId: (id) =>
        set(() => ({
          selectId: id,
        })),

      handleEditTitleChange: (e) =>
        set(() => ({
          editTitle: e.target.value,
        })),

      handleTitleChange: (e) =>
        set(() => ({
          title: e.target.value,
        })),

      addTasks: (title) =>
        set((state) => {
          if (!title || !title.trim()) return state;

          return {
            todos: [
              ...state.todos,
              { id: crypto.randomUUID(), title, completed: false },
            ],
            title: "",
          };
        }),

      deleteTasks: (id) =>
        set((state) => ({
          todos: state.todos.filter((t) => t.id !== id),
        })),

      completedChange: (id) =>
        set((state) => ({
          todos: state.todos.map((t) =>
            t.id === id ? { ...t, completed: !t.completed } : t
          ),
        })),

      editTasks: (id, title) =>
        set((state) => {
          if (!title || !title.trim()) return state;

          return {
            todos: state.todos.map((t) => (t.id === id ? { ...t, title } : t)),
            editTitle: "",
            selectId: "",
          };
        }),

      cancel: () =>
        set(() => ({
          selectId: "",
        })),
    }),
    {
      name: "todos-storage",
      partialize: (state) => ({
        todos: state.todos,
      }),
    }
  )
);
