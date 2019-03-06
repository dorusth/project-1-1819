import scan from './scan.js'

const renders = {
	el: document.querySelector('main'),
	header: document.querySelector('header'),
	home(data){
		let template = data.map(data => {
			return(`
				<article>
					<img src="${data.coverimages.coverimage[1]._text}" alt="${data.titles.title._text}">
					<div>
						<a href="${data['detail-page']._text}"><h2>${data.titles.title._text}</h2></a>
						<p>${data.authors['main-author']._text}</p>
					</div>
				</article>
			`)
		})
		renders.el.innerHTML = template.join('');
	},
	barcode(){
		renders.el.innerHTML = `
			<video id="video" width="640" height="480" autoplay></video>
		`
		scan();
	}
}

export default renders;
