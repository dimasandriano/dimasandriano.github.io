import Home from "../../pages/Home";
import Projects from "../../pages/Projects";
import Contact from "../../pages/Contact";

export const Routing = [
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/projects",
		element: <Projects />,
	},
	{
		path: "/contact",
		element: <Contact />,
	},
];
