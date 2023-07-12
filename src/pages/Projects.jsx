import { useState } from "react";
import Layout from "../Layout/Layout";
import projects from "../Projects.json";
import Card from "../components/Card";
function Projects() {
	const projectIndividu = projects.filter(
		(project) => project.type == "individu"
	);
	const projectTim = projects.filter((project) => project.type == "tim");

	const [showIndividu, setShowIndividu] = useState(true);
	const [showTim, setShowTim] = useState(false);

	const handleIndividu = () => {
		setShowIndividu(true);
		setShowTim(false);
	};
	const handleTim = () => {
		setShowTim(true);
		setShowIndividu(false);
	};
	return (
		<>
			<Layout>
				<h1 className="text-center font-bold text-2xl md:text-3xl py-7 dark:text-white">
					My Projects
				</h1>
				<div className="flex w-full justify-between mb-2">
					<button
						className={`text-center dark:text-white ${
							showIndividu && "border-b-2 border-slate-300"
						} inline-block w-full py-2`}
						onClick={handleIndividu}>
						Individu
					</button>
					<button
						className={`text-center dark:text-white ${
							showTim && "border-b-2 border-slate-300"
						} inline-block w-full py-2 `}
						onClick={handleTim}>
						Tim
					</button>
				</div>
				<div className="grid gap-1 grid-cols-12 ">
					{showIndividu &&
						projectIndividu.map((item, idx) => {
							return (
								<Card
									key={idx}
									namaproject={item.namaproject}
									deskripsi={item.deskripsi}
									techstack={item.techstack}
									github={item.github}
									deploy={item.deploy}
									img={item.img}
								/>
							);
						})}
					{showTim &&
						projectTim.map((item, idx) => {
							return (
								<Card
									key={idx}
									namaproject={item.namaproject}
									deskripsi={item.deskripsi}
									techstack={item.techstack}
									github={item.github}
									deploy={item.deploy}
									img={item.img}
								/>
							);
						})}
				</div>
			</Layout>
		</>
	);
}

export default Projects;
