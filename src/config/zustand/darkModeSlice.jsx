export const createDarkModeSlice = (set) => ({
	isDark: true,
	setIsDark: (state) => set(() => ({ isDark: state })),
});
