//Fast counters (ErosMLima Aula1_JavaScript): 

//arquivo JavaScript com os comandos e funções 
const button = document.querySelector("button");;
const input1 = document.getElementById("num1");;
const input2 = document.getElementById("num2");;


function add(num1, num2) {
	return num1 + num2; 
}

button.addEventListener("click", function() {
	console.log(add(input1.value, input2.value));
})

//Arquivo do HTML com o códigoa da Interface

<input type="number" id="num1" placeholder="num1" name="">
<input type="number" id="num2" placeholder="num2" name="">
<button>Add!</button>

	<script defer src="js-only.js"></script>

