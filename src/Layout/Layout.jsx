/* eslint-disable react/prop-types */
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Layout({ children }) {
	return (
		<div className="dark:bg-[#18181b] transition duration-500">
			<div className="w-full sm:max-w-xl min-h-screen mx-auto px-2 ">
				<Navbar />
				{children}
				<Footer />
			</div>
		</div>
	);
}

export default Layout;
