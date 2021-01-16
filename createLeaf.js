 function loadFile(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};

var imageupload =  URL.createObjectURL(event.target.files[0]);

// function postEnviron(event){
//   var image = document.getElementById('outputpost');
//   image.src = URL.createObjectURL(event.target.files[0]);
// }

//var loadFile = function(event) {
// 	var image = document.getElementById('output');
// 	image.src = URL.createObjectURL(event.target.files[0]);
// };