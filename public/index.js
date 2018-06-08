let arr = [];
for (let i = 0; i < 7; i++) {
	let image = "figure" + (i + 1).toString();
	let marker = "marker" + (i + 1).toString();
	arr.push({ image: image, marker: marker });
}

var app = new Vue({
	el: "#app",
	data: {
		markerData: arr
	}
});

document.getElementById("snap-button").addEventListener("click", function() {
	this.parentNode.style.display = "none";
	html2canvas(document.querySelector("body")).then(canvas => {
		this.parentNode.style.display = "";
		document.body.appendChild(canvas);
		var image = canvas
			.toDataURL("image/png")
			.replace("image/png", "image/octet-stream"); // here is the most important part because if you dont replace you will get a DOM 18 exception.

		window.location.href = image; // it will save locally
	});
});
