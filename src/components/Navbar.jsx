import { useLocation, useNavigate } from "react-router-dom";
import { useStore } from "../config/zustand/store";

function Navbar() {
	const location = useLocation();
	const navigate = useNavigate();

	const isDark = useStore((state) => state.isDark);
	const setDark = useStore((state) => state.setIsDark);
	return (
		<>
			<h1 className="text-center py-4 font-medium text-lg italic dark:text-white">
				Dimas Andriano
			</h1>
			<ul className="flex justify-center gap-2 md:gap-5 dark:text-gray-400">
				<li>
					<a
						onClick={() => navigate("/")}
						className={`cursor-pointer text-base font-normal px-1 py-1 transition ${
							location.pathname == "/" &&
							"border-b-2 border-slate-500 dark:border-white dark:text-white"
						}`}>
						About
					</a>
				</li>
				<li>
					<a
						onClick={() => navigate("/projects")}
						className={`cursor-pointer text-base font-normal px-1 py-1 $cursor-pointer transition ${
							location.pathname == "/projects" &&
							"border-b-2 border-slate-500 dark:border-white dark:text-white"
						}`}>
						Projects
					</a>
				</li>
				<li>
					<a
						onClick={() => navigate("/contact")}
						className={`cursor-pointer text-base font-normal px-1 py-1 $cursor-pointer transition ${
							location.pathname == "/contact" &&
							"border-b-2 border-slate-500 dark:border-white dark:text-white"
						}`}>
						React Me!
					</a>
				</li>
				<li>
					<a onClick={() => setDark(!isDark)} className="cursor-pointer">
						{isDark ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 256 256">
								<path
									fill="currentColor"
									d="M233.54 142.23a8 8 0 0 0-8-2a88.08 88.08 0 0 1-109.8-109.8a8 8 0 0 0-10-10a104.84 104.84 0 0 0-52.91 37A104 104 0 0 0 136 224a103.09 103.09 0 0 0 62.52-20.88a104.84 104.84 0 0 0 37-52.91a8 8 0 0 0-1.98-7.98Zm-44.64 48.11A88 88 0 0 1 65.66 67.11a89 89 0 0 1 31.4-26A106 106 0 0 0 96 56a104.11 104.11 0 0 0 104 104a106 106 0 0 0 14.92-1.06a89 89 0 0 1-26.02 31.4Z"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 256 256">
								<path
									fill="currentColor"
									d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0Zm72 88a64 64 0 1 1-64-64a64.07 64.07 0 0 1 64 64Zm-16 0a48 48 0 1 0-48 48a48.05 48.05 0 0 0 48-48ZM58.34 69.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68l-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32ZM192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72Zm5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8Zm80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8Zm112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16Z"
								/>
							</svg>
						)}
					</a>
				</li>
			</ul>
		</>
	);
}

export default Navbar;
