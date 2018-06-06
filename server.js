const express = require("express");
const app = express();
app.use(express.static("public"));
app.get("/", function(req, res) {
	res.render("index");
});
var port = process.env.PORT || 3000;
app.listen(port, () => console.log("Its alive!!!"));
