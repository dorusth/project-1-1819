import API from './api/index.js';

async function init(){
	const api = new API();
	const stream = await api.createStream("search/beatles&facet=type(cd)");
	stream
		.pipe(dataFilter)
		.pipe(renderToDocument)
}

function dataFilter(stream){
	let newData = [];
	for (const obj in stream){
		let list = [];
		let item = stream[obj].formats.format;
		for(const name in item){
			list.push(item[name]._text);
		}
		if(!list.includes("audiobook")){
			newData.push(stream[obj]);
		}
	}
	console.log(newData);
	return newData
}


function renderToDocument(data){
	const el = document.querySelector('main');
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
	el.innerHTML = template.join('');

}

//init();
