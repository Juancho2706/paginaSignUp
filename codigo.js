const $frase1 = document.querySelector('.frase1');
$frase1.innerHTML = `This is not a real online service! You know you need something<br>
like this in your life to help you realize your deepest dreams.<br>
Sing up <i>now</i> to get started.<br>
<br>
You <i>know</i> you want to`;

const x = document.getElementById("form1").id;


const $dosC = document.querySelector('.dosC');
const botoncito = document.createElement('button');
botoncito.type = "submit";
botoncito.setAttribute("form", x);
botoncito.innerText = 'Create Account'
botoncito.classList.add('botoncito');
$dosC.append(botoncito);