function showImage(targetid) {

	var image = document.getElementById('outputnew');
	image.src =  URL.createObjectURL(event.target.files[0]);
};

var image = $('.format');

showImage(outputnew);

image.on("load", showImage(outputnew));



function createLeaf(){
event.preventDefault(); 
var container = $('.newleaf');
container.append(`<p><img id="outputnew" class="format"/></p>`);
container.append(`<html>
<head>
<script>
 function loadFile(event) {
  	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};

function showImage(event){
  event.preventDefault(); 
  	var image = document.getElementById('outputnew');
    	image.src = URL.createObjectURL(event.target.files[0]);
}

function alertFunction(event){
  alert("Sucess! Scroll up to view your post on your Environ Feed.")
}
</script>
<style>
h1{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color:#5C5858;
  text-align: center;
}

section{
  display: flex;
}

.horizontal{
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 320px;
  object-fit: cover;
  text-align: center;
}


.page{
  color: #5C5858;
  font-size: 16px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  border: white;
  background-color: white;
  padding: 5px;
}



p{
  display: inline;
  color: #5C5858;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

  

label{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color:#5C5858;
}

.submitBtn{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #5C5858;
  background-color: lightgrey;
  border: 1px solid #5C5858;  
}

.bottomStrip{
  padding: 30px;
  background: #CAFFBF;
}

form{
  text-align: center;
}

.upload{
  margin-left: 70px;
}

.posted{
  border: 3px solid #5C5858;
  padding-bottom:50px;
  padding-top:15px;
  padding-left:15px; padding-right:15px; background-color:white;
  width: 150px;
  height: 150px;
  object-fit:cover;
  margin-left: 50px;
  margin-right: 100px;
  margin-top:50px;
}


.format{
  width: 150px;
  height: 150px;
  object-fit:cover;
}


.uploadimg,.submitBtn{
border-color:#5c5858;
  width:150px;
  height:25px;
  background-color:white;
  font-family:Courier, MS Courier New;
  font-size:15px; 
 border:2px solid;
   cursor: pointer;
}
.usernameplace{
  border-color:#5c5858;
  border-radius:10px;
  height:20px;
  padding-left:10px;
   height:25px;
   border:2px solid;
  width:200px;
}
::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color:#5c5858;
  font-family:Courier, MS Courier New;
  font-size:15px;
 
  
}
html{
  scroll-behavior: smooth;
}
h4{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color:#5C5858;
  text-align: center;
}

</style>
</head>
<div>
<div >

</div class= "overall">
<br></br>
<div>
<img style="height:400px;width:100%;" src = "https://cdn.corporate.walmart.com/dims4/WMT/c5c8a05/2147483647/strip/true/crop/6016x2507+0+755/resize/1440x600!/quality/90/?url=https%3A%2F%2Fcdn.corporate.walmart.com%2F23%2Fbc%2F33b74291427e912a392e264c010c%2Fgettyimages-675258412-1.jpg" alt = "Preserving the Environment" class = "horizontal"></img>
</div>
<br> </br>
<h1> Share your Actions, Spread your Impact. </h1>
<center><h4 class="newposttitle"> + Create New Post + </h4><center>
<form class="formoverall" >
<label class = "upload"> Upload a photo: </label>
 <p  class="usernameplace"><input  type="file"  accept="image/*" name="image" id="file"  onchange="loadFile(event)" ></p>
 <br></br>
 <label class = "upload">Confirm Upload:</label>

<p  class="usernameplace"><input  type="file"  accept="image/*" name="image" id="file"  onchange="showImage(event)" ></p>
  <br> </br>
<input type = "button" class = "submitBtn" value = "Post!"  class="usernameplace" onclick="alertFunction(event);"> </input>
</form>
<br></br>
<center><section class = "bottomStrip"> 
   <div >
<p><img id="output" class="format"/></p>
<div>
</div>
</section>
</center>
</body>
</html>`);
window.scrollBy(0, 10000000);
}