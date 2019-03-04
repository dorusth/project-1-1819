import API from './api/index.js';

async function init(){
	const api = new API();
	const stream = await api.createStream("search/beatles&facet=type(cd)");
	stream
		.pipe(renderToDocument);
}

function renderToDocument(stream){
	const el = document.querySelector('main');
	console.log(stream);
}
init()
