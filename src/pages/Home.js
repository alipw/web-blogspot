import React from "react";
import ReactDOM from "react-dom";
import "katex/dist/katex.min.css";
import bubblesort from "../images/bubblesort.gif";
import on2 from "../images/o-n2.png";
import { InlineMath, BlockMath } from "react-katex";

function navbar() {
	return (
		<nav
			className="navbar navbar-expand-lg navbar-light bg-light"
			id="navbar"
		>
			<a className="navbar-brand" href="#">
				<img src="logo.png" className="logo" alt="logo" />
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarTogglerDemo02"
				aria-controls="navbarTogglerDemo02"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
				<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Link
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link disabled" href="#">
							Disabled
						</a>
					</li>
				</ul>
				<form className="form-inline my-2 my-lg-0">
					<input
						className="form-control mr-sm-2"
						type="search"
						placeholder="Search"
					/>
					<button
						className="btn btn-outline-success my-2 my-sm-0"
						type="submit"
					>
						Search
					</button>
				</form>
			</div>
		</nav>
	);
}

function mainContent() {
	return (
		<div id="main-div">
			<div className="padding">
				<h1 className="title">
					Notasi O besar (<i>Big O notation</i>)
				</h1>
				<p className="subtitle">
					oleh Alif Wide Ardiansyah - 20 Maret 2020
				</p>
				<br />
				<p className="main-content">
					Saya mengasumsikan anda paham beberapa algoritma dasar
					seperti <i>Bubblesort</i>. Jika anda belum paham, saya
					menyarankan anda untuk membaca beberapa artikel tentang
					algoritma-algoritma terlebih dahulu atau mempraktikkannya,
					karena semua bahasan notasi O hanya akan masuk akal jika
					anda memiliki pengalaman dengan algoritma.
					<br />
					<br />
					Dikutip dari Wikipedia.org : "Notasi O besar (big-O
					notation) atau notasi Bachmann–Landau atau notasi asimtotik
					adalah notasi matematika yang digunakan terutama pada bidang
					ilmu komputer (computer science). Notasi ini digunakan untuk
					menyatakan keefektifan sebuah algoritma. Notasi ini bekerja
					dengan cara memperhitungkan input yang diberikan oleh user."
					<br />
					<br />
					Intinya adalah,{" "}
					<b>
						notasi ini digunakan untuk menyatakan performa sebuah
						algoritma
					</b>
					. Notasi ini sangatlah bermanfaat, karena dapat memberikan
					gambaran kasar bagaimana sebuah algoritma akan bekerja di
					sebuah skenario.
					<br />
					<br />
					Misalnya adalah algoritma Bubblesort. Kita panggil jumlah
					elemen di sebuah array adalah
					<p className="InlineMath">
						<InlineMath math="n" />
					</p>
					. Karena setiap elemen harus diurutkan, maka setiap elemen
					harus di cek satu persatu, yang dimana akan membutuhkan
					<p className="InlineMath">
						<InlineMath math="n" />
					</p>
					iterasi. di kasus terburuk, (<i>worst-case scenario</i>)
					setiap
					<p className="InlineMath">
						<InlineMath math="n" />
					</p>
					iterasi membutuhkan waktu
					<p className="InlineMath">
						<InlineMath math="n" />
					</p>
					kali untuk memastikan bahwa{" "}
					<p className="InlineMath">
						<InlineMath math="n" />
					</p>{" "}
					ada di posisi yang tepat. Maka nilai O besar nya adalah
					<p className="InlineMath">
						<InlineMath math="O(n*n)" />
					</p>
					atau
					<p className="InlineMath">
						<InlineMath math="O(n^2)" />.
					</p>
					<div className="image-outer">
						<img
							src={bubblesort}
							className="image"
							alt="Friendrich Bernhard Riemann"
						/>
						<p className="img-subtitle">
							<br />
							Illustrasi algoritma Bubblesort
						</p>
					</div>
					Ini adalah contoh grafik dari{" "}
					<p className="InlineMath">
						<InlineMath math="O(n^2)" />.
					</p>
					<div className="image-outer">
						<img
							src={on2}
							className="image"
							alt="Friendrich Bernhard Riemann"
						/>
					</div>
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