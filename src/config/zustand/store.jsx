import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createDarkModeSlice } from "./darkModeSlice";

export const useStore = create(
	persist(
		(...a) => ({
			...createDarkModeSlice(...a),
		}),
		{ name: "Zustand Store" }
	)
);
