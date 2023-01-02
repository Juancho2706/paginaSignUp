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
botoncito.disabled = true;
$dosC.prepend(botoncito);

const password1 = document.querySelector('#contrasena');
const password2 = document.querySelector('#contrasenaCON');
password1.addEventListener('blur',(e)=>{
    soniguales();
})
password2.addEventListener('blur',(e)=>{
    soniguales();
})

function soniguales(){
    if((password1.value === password2.value) && (8 <=password1.value)){
    document.querySelector('.botoncito').disabled = false
    document.querySelector('.botoncito').classList.add('ready');
}else{
    document.querySelector('.botoncito').disabled = true
    document.querySelector('.botoncito').classList.remove('ready');    
}
}
