import renders from './render.js'
import API from '../api/index.js';
import dataFilter from './dataFilter.js'

function router() {
	let route = window.location.hash;
	switch (route.split('/')[0]) {
		case (""):
			renders.home();
			break;
		case ("#search"):
			renders.loading();
			async function search(query){
				query = query.split("%20").join(" ")
				console.log(query);
				try{
					const api = new API();
					const stream = await api.createStream("search/" + query + "&facet=type(cd)");
					stream
						.pipe(dataFilter)
						.pipe(renders.search)
				}
				catch(err){
					renders.error()
				}
			}
			search(route.split('/')[1])
			break;
		case ("#barcode"):
			renders.barcode();
			break;
		case ("#nfc"):
			renders.nfc();
			break;
		default:
	}
}

export default router
