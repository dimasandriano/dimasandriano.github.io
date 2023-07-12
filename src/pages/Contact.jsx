import Layout from "../Layout/Layout";

function Contact() {
	return (
		<div>
			<Layout>
				<h1 className="text-center font-bold text-3xl py-7 dark:text-white">
					React Me!
				</h1>
				<div className=" mx-auto max-w-xs pt-2 p-5 space-y-3 dark:text-white">
					<div className="flex items-center gap-2">
						<svg
							className="text-red-500"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M20 18h-2V9.25L12 13L6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"
							/>
						</svg>
						<a
							href="mailto:dimas.andriano.h@gmail.com"
							className="underline underline-offset-1">
							dimas.andriano.h@gmail.com
						</a>
					</div>
					<div className="flex items-center gap-2">
						<svg
							className="text-sky-500"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="m20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42l10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001l-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15l4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"
							/>
						</svg>
						<a
							href="https://t.me/dimasandriano"
							className="underline underline-offset-1">
							@dimasandriano
						</a>
					</div>
					<div className="flex items-center gap-2">
						<svg
							className="text-blue-500"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
							/>
						</svg>
						<a
							href="https://www.linkedin.com/in/dimasandriano/"
							className="underline underline-offset-1">
							Dimas Andriano Herlambang
						</a>
					</div>
					<div className="flex items-center gap-2">
						<svg
							className="text-red-500"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
							/>
						</svg>
						<a
							href="https://www.instagram.com/dimas.andriano.h/"
							className="underline underline-offset-1">
							Dimas Andriano Herlambang
						</a>
					</div>
				</div>
			</Layout>
		</div>
	);
}

export default Contact;
