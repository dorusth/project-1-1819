'use strict'
import {scan, stopScan} from './modules/scan.js'
import router from './modules/router.js'

window.addEventListener('hashchange', router);
document.querySelector(".headerSearch").addEventListener("submit", function(event){
	event.preventDefault();
	window.location.hash = "search/" + event.srcElement[0].value;
})
router();
