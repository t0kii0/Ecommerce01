import { create } from "zustand";
import { devtools, StateCreator } from "zustand/middleware";

type SheetContent = "cart" | "search" | null;

export interface GlobalState {
  isSheetOpen: boolean;
  sheetContent: SheetContent;

  // Tdo: Navbar mobile

  openSheet: (content: SheetContent) => void;
  closeSheet: () => void;
}

const storeApi: StateCreator<GlobalState> = (set) => ({
  isSheetOpen: false,
  sheetContent: null,

  openSheet: (content) => {
    set({ isSheetOpen: true, sheetContent: content });
  },

  closeSheet: () => {
    set({ isSheetOpen: false, sheetContent: null });
  },
});

export const globalStore = create<GlobalState>()(devtools(storeApi));
