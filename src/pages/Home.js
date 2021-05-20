import React from "react";
import ReactDOM from "react-dom";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

function navbar() {
	return (
		<nav className="navbar navbar-expand-lg" id="navbar">
			<a className="navbar-brand">BlogSpot</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>
			<div
				className="collapse navbar-collapse"
				id="navbarSupportedContent"
			>
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<a className="nav-link">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link">Link</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

function mainContent() {
	return (
		<div id="main-div">
			<div className="padding">
				<h1 className="title">
					Kenapa Hitler seharusnya tidak memulai WW2
				</h1>
				<h11 className="subtitle">oleh Alif Wide Ardiansyah</h11>
				<br />
				<br />
				<br />

				<p className="main-content">
					Mobile Legends adalah game 8 bit yang yang sangat burik ya
					ges yak. Sangking burik nya, Mobile Legends (disingkat ML)
					memenangkan nominasi game paling burik abad ini.
					<br />
					<br />
					Karena hal inilah, hipotesis Riemann adalah salah satu
					misteri terbesar di bidang matematika. Federasi Matematika
					Dunia menjanjikan akan memberikan 1,000,000 USD jika ada
					siapapun yang mampu membuktikan bahwa semua nilai 0 setelah
					analitik kontinuasi akan selalu berada di titik 0.5.
					<br />
					<br />
					<div>
						karena{" "}
						<p className="InlineMath">
							<InlineMath math="\int_1^\infty \frac{1}{x^2} = \frac{\pi}{6}" />
						</p>{" "}
						oleh karena itu,
						<p className="InlineMath">
							<InlineMath math="\frac{0}{0} = \infty" />
						</p>{" "}
						dan{" "}
						<p className="InlineMath">
							<InlineMath math="0^0 =7" />
						</p>
					</div>
					<br />
					<br />
					The Battle of Rethymno was part of the Battle of Crete,
					fought during World War II on the Greek island of Crete
					between 20 and 29 May 1941. Two Australian battalions,
					supported by Greek forces, defended an airstrip and the
					nearby town of Rethymno against a German paratrooper attack.
				</p>
			</div>
		</div>
	);
}

function main() {
	return (
		<div>
			{navbar()}
			{mainContent()}
		</div>
	);
}

export default main;