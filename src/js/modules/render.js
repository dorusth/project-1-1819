import {scan, stopScan} from './scan.js'

const renders = {
	el: document.querySelector('main'),
	header: document.querySelector('header'),
	home(){
		renders.el.innerHTML = `
			<section class="home_banner">
				<div>
					<h1> Welkom bij OBA music </h1>
					<form class="homeForm" action="#">
						<input type="text" placeholder="Zoek naar muziek...">
						<input type="submit" value="🔍">
					</form>
				</div>
			</section>
		`;
		document.querySelector(".homeForm").addEventListener("submit", function(event){
			event.preventDefault();
			window.location.hash = "search/" + event.srcElement[0].value;
		})
	},
	search(data){
		let template = data.map(data => {
			return(`
				<a href="${data['detail-page']._text}"><article>
					<img src="${data.coverimages.coverimage[1]._text}" alt="${data.titles.title._text}">
					<div>
						<h2>${data.titles.title._text}</h2>
						<p>${data.authors['main-author']._text}</p>
					</div>
				</article></a>
			`)
		})
		renders.el.innerHTML = `
			<section>${template.join('')}</section>
		`
	},
	barcode(){
		renders.el.innerHTML = `
			<video id="video" width="100%" height="100%" autoplay></video>
			<a class="closeScan"> Scan code </a>
		`
		scan();
		document.querySelector(".closeScan").addEventListener("click", function(event){
			window.location.hash = "search/De 30 grootste successen van Dorus";
		})
	},
	nfc(){
		renders.el.innerHTML = `
			<img class="scanImg" src="./src/img/nfc_scan.svg" alt="scan">
			<a class="closeScan"> Scan tag </a>
		`
		document.querySelector(".closeScan").addEventListener("click", function(event){
			window.location.hash = "search/De 30 grootste successen van Dorus";
		})
	},
	loading(){
		console.log(this);
		renders.el.innerHTML = `
		<div class="sk-folding-cube">
			<div class="sk-cube1 sk-cube"></div>
			<div class="sk-cube2 sk-cube"></div>
			<div class="sk-cube4 sk-cube"></div>
			<div class="sk-cube3 sk-cube"></div>
		</div>
		`
	},
	error(){
		renders.el.innerHTML =`
		<section class="home_banner">
			<div>
				<h1>Oops...</h1>
				<h2>Er lijken geen resultaten te zijn voor "${window.location.hash.split('/')[1]}"</h2>
				<form class="homeForm" action="#">
					<input type="text" placeholder="Zoek naar muziek...">
					<input type="submit" value="🔍">
				</form>
			</div>
		</section>
		`
	}
}

export default renders;
