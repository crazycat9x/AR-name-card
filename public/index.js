let arr = [];
for (let i = 0; i < 7; i++){
    let image = "figure" + (i+1).toString();
    let marker = "marker" + (i+1).toString();
    arr.push({image:image,marker:marker})
}

var app = new Vue({
    el: '#app',
    data: {
      markerData: arr
    }
  })