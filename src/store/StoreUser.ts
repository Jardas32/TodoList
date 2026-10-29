import { create } from "zustand";
import { persist } from "zustand/middleware";

interface storeUserState {
  userName: string;

  handleAddUser: (name: string) => void;
  deleteUser: () => void;
}

export const useStoreUser = create<storeUserState>()(
  persist(
    (set) => ({
      userName: "",

      handleAddUser: (name) =>
        set((state) => {
          if (!name.trim() || !name) return state;

          return {
            userName: name,
          };
        }),

      deleteUser: () =>
        set(() => ({
          userName: "",
        })),
    }),
    {
      name: "user-name",
    }
  )
);
