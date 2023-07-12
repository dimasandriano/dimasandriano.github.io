import RootRouting from "./config/router/RootRouting";
import { useStore } from "./config/zustand/store";

function App() {
	const isDark = useStore((state) => state.isDark);
	return (
		<div className={isDark ? "dark" : ""}>
			<RootRouting />
		</div>
	);
}

export default App;
