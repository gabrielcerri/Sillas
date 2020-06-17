window.onload = function () {

	const agregar = document.querySelector('.agregar')
	const eliminar = document.querySelector('.eliminar')
	const arriba = document.querySelector('.arriba')
	const abajo = document.querySelector('.abajo')
	const izquierda = document.querySelector('.izquierda')
	const derecha = document.querySelector('.derecha')

	let i = 0

	function agregarSilla () {

		const silla = document.createElement('img')

		silla.src = 'material/material/silla.png'

		if(arriba.children.length<=2) {
			arriba.append(silla)
		} else if (arriba.children.length>=2 && abajo.children.length<=2 ) {
			abajo.append(silla)
		}else if (abajo.children.length>2 && izquierda.children.length<1 ){
			izquierda.append(silla)
		}else if(izquierda.children.length>0 && derecha.children.length<1 ) {
			derecha.append(silla)
		}
		
	}

	function quitarSilla () {

		if(arriba.hasChildNodes()) {
			arriba.removeChild(arriba.childNodes[0])
		} else if(abajo.hasChildNodes()) {
			abajo.removeChild(abajo.childNodes[0])
		} else if(izquierda.hasChildNodes()) {
			izquierda.removeChild(izquierda.childNodes[0])
		} else if(derecha.hasChildNodes()) {
			derecha.removeChild(derecha.childNodes[0])
		}
	}

	agregar.addEventListener('click',agregarSilla)
	eliminar.addEventListener('click',quitarSilla)
}