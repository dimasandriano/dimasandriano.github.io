import { useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";

function Home() {
	const navigate = useNavigate();
	return (
		<>
			<Layout>
				<h1 className="text-center text-2xl sm:text-3xl font-bold my-7 dark:text-white">
					Halo, saya Dimas Andriano!
				</h1>
				<div className="text-slate-600 px-3 break-words dark:text-white">
					<p>
						Nama saya adalah Dimas Andriano Herlambang, seorang mahasiswa jurusan
						Teknik Informatika.
					</p>
					<br />
					<p>
						Saya memiliki passion yang besar dalam dunia software engineering,
						khususnya dalam pengembangan web. Saya selalu tertarik untuk belajar
						hal-hal baru dalam bidang ini dan menciptakan solusi yang efektif dan
						efisien untuk masalah yang dihadapi.
					</p>
					<br />
					<p>
						Saya juga memiliki pengalaman dalam pengembangan aplikasi web dengan
						teknologi seperti HTML, CSS, JavaScript, dan framework seperti React dan
						Laravel. Anda dapat melihat daftar projek saya di sini{" "}
						<a
							className="underline underline-offset-1 cursor-pointer dark:text-gray-400"
							onClick={() => navigate("/projects")}>
							project
						</a>
					</p>
					<br />
					<p>
						Di luar studi dan pemrograman, saya juga memiliki hobi yang beragam
						seperti menonton film/anime dan bermain game. Saya berharap dapat terus
						berkembang dan memberikan dampak positif dalam karir saya di bidang
						software engineering dan juga di luar bidang tersebut.
					</p>
				</div>
			</Layout>
		</>
	);
}

export default Home;
