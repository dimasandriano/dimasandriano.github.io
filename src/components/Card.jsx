/* eslint-disable react/prop-types */
function Card({ namaproject, deskripsi, techstack, github, deploy, img }) {
	return (
		<div className="col-span-6 p-1 hover:scale-105 transition">
			<div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 dark:shadow-gray-700 dark:bg-[#18181b]">
				<figure>
					<img src={img} alt="card image" className="aspect-video w-full" />
				</figure>
				<div className="px-3 pt-2">
					<header className="mb-1">
						<h3 className="text-xl font-medium text-slate-700 dark:text-slate-200">
							{namaproject}
						</h3>
					</header>
					<p className="text-xs mb-1 dark:text-slate-300">{deskripsi}</p>
					<div className="flex gap-1">
						{techstack.map((tech, id) => {
							return (
								<span
									key={id}
									className="px-1 bg-slate-400 dark:bg-slate-700 text-white rounded text-xs">
									{tech}
								</span>
							);
						})}
					</div>
				</div>
				<div className="flex justify-end gap-1 pb-1 pr-1">
					<a
						href={github}
						target="_blank"
						className="inline-flex h-7 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded px-4 text-sm font-medium tracking-wide text-slate-500 transition duration-300 hover:bg-slate-100 hover:text-slate-600 focus:bg-slate-200 focus:text-slate-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-slate-300 disabled:shadow-none disabled:hover:bg-transparent"
						rel="noreferrer">
						<span className="relative only:-mx-6">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="icon icon-tabler icon-tabler-brand-github"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								strokeWidth="2"
								stroke="currentColor"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
								<path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
							</svg>
						</span>
					</a>
					<a
						href={deploy}
						target="_blank"
						className="inline-flex h-7 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded px-4 text-sm font-medium tracking-wide text-slate-500 transition duration-300 hover:bg-slate-100 hover:text-slate-600 focus:bg-slate-200 focus:text-slate-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-slate-300 disabled:shadow-none disabled:hover:bg-transparent"
						rel="noreferrer">
						<span className="relative only:-mx-6">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="icon icon-tabler icon-tabler-external-link"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								strokeWidth="2"
								stroke="currentColor"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
								<path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
								<path d="M11 13l9 -9"></path>
								<path d="M15 4h5v5"></path>
							</svg>
						</span>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Card;
