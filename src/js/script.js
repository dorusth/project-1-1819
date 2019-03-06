'use strict'
import API from './api/index.js';
import dataFilter from './modules/dataFilter.js'
import renders from './modules/render.js'

async function init(){
	const api = new API();
	const stream = await api.createStream("search/beatles&facet=type(cd)");
	stream
		.pipe(dataFilter)
		.pipe(renders.home)
}

document.querySelector('.scan').addEventListener('click', renders.barcode);


init();
