
var button = document.getElementById("buttonjs");
var ul = document.querySelector("ul");
var input = document.getElementById("inputboxjs");
var remInput = document.getElementById("buttonRemjs");

var addElement = () => {
	
	
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.classList.add("blue");
    ul.appendChild(li);
    input.value="";

}

button.addEventListener("click",function(){
	if(input.value.length>0){
		addElement();
	}
});
input.addEventListener("keypress",function(event){
	if(input.value.length>0 && event.keyCode===13 ){
		addElement();
	}
});

remInput.addEventListener("click",function(){

		var rem = document.querySelector('li:last-child');
		if(rem.classList[0]!=="constant"){
 		ul.removeChild(rem);
 	}
});