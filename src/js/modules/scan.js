let constraints = {
	audio: false,
	video: {
		width: 1280,
		height: 720,
		facingMode: "environment"
	}
};

function scan() {
	navigator.mediaDevices.getUserMedia(constraints)
		.then(function(mediaStream) {
			let video = document.querySelector('video');
			video.srcObject = mediaStream;
			video.onloadedmetadata = function(e) {
				video.play();
			};
		})
		.catch(function(err) {
			console.log(err.name + ": " + err.message);
		}); // always check for errors at the end.
}

function stopScan() {
	navigator.mediaDevices.getUserMedia(constraints)
		.then(function(mediaStream) {
			let track = mediaStream.getTracks()[0];
			track.stop();
			document.querySelector('main').innerHTML = "";
		})
}

export {scan, stopScan}
