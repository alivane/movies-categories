//Al hacer click e el li cambiar el boton por ese li

//si el li es n mostrar todos los n images

//ordenar las imagenes por columnas



$(document).ready(function(){
	$('li').on('click',function(){
		var lista = $(this).text();
		$('button').text(lista);
		if(lista == "Todas"){
			$('.comedia').add('.familiar').add('.terror').add('.criminal').add('.accion').show()
		}
		if(lista == "Acción"){
			$('.comedia').add('.familiar').add('.terror').add('.criminal').hide()
			$('.accion').show()
		}
		if(lista == "Comedia"){
			$('.accion').add('.familiar').add('.terror').add('.criminal').hide()
			$('.comedia').show()
		}
		if(lista == "Crimen"){
			$('.accion').add('.familiar').add('.terror').add('.comedia').hide()
			$('.criminal').show()
		}
		if(lista == "Familiar"){
			$('.accion').add('.criminal').add('.terror').add('.comedia').hide()
			$('.familiar').show()
		}
		if(lista == "Terror"){
			$('.comedia').add('.familiar').add('.accion').add('.criminal').hide()
			$('.terror').show()
		}
	})
	
})