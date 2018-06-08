let arr = [];
for (let i = 0; i < 8; i++){
    let image = "figure" + (i+1).toString();
    let marker = "marker" + (i+1).toString();
    arr.push({image:image,marker:marker})
}

console.log(arr)

var app = new Vue({
    el: '#app',
    data: {
      markerData: arr
    }
  })