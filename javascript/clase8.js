function menu_hamburguesa() {
	var menu = document.getElementById('botonera_principal')
	if (menu.style.display == 'none') {
		menu.style.display = 'block'
	} else {
		menu.style.display = 'none'
	}
	
}

function arriba(elemento){
	var cambia = document.getElementById(elemento)
	cambia.style.fontSize = '19px'
	cambia.style.color = 'white' 
	cambia.style.textTransform = 'uppercase'
	cambia.style.backgroundColor = '#ffde59'
	cambia.style.textShadow = '1px 1px 0px black'

}

function sacar(elemento2){
	var cambia2 = document.getElementById(elemento2)
	cambia2.style.fontSize = '17px'
	cambia2.style.color = 'black' 
	cambia2.style.textTransform = 'none'
	cambia2.style.backgroundColor = 'white'
	cambia2.style.textShadow = 'none'
}
