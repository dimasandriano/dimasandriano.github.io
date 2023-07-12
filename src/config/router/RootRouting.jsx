import { HashRouter, Route, Routes } from "react-router-dom";
import { Routing } from "./Routing";

function RootRouting() {
	return (
		<>
			<HashRouter basename="/">
				<Routes>
					{Routing.map((route, idx) => {
						return <Route key={idx} path={route.path} element={route.element} />;
					})}
				</Routes>
			</HashRouter>
		</>
	);
}

export default RootRouting;
