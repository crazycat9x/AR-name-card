function getScreenshot(scale) {
	scale = scale || 1;
	let videoEl = document.querySelector("video");
    const canvas = document.createElement("canvas");
    console.log(document.querySelector("video"))
	canvas.width = videoEl.clientWidth * scale;
	canvas.height = videoEl.clientHeight * scale;
	return canvas.getContext("2d");
}

function getText() {
    console.log("st")
    let image = getScreenshot(1);
    console.log(image)
	Tesseract.recognize(image, {
		lang: "eng"
	}).then(function(result) {
		console.log(result);
	});
}

document.getElementById("test").addEventListener("click", getText);
