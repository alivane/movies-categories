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
$(document).ready(function(){
	$('.a1').click(function(){
		//es redireccionar
		//window.location.href = "comedia.html";
	   console.log("a1")
	})
	$('.a2').click(function(){
		console.log("a2")
	})
	$('.a3').click(function(){
		console.log("a3")
	})
	$('.a4').click(function(){
		console.log("a4")
	})
	$('.a5').click(function(){
		console.log("a5")
	})
	$('.a6').click(function(){
		console.log("a6")
	})
	$('.c1').click(function(){
		//es redireccionar
		//window.location.href = "accion.html";
	   console.log("c1")
	})
	$('.c2').click(function(){
		console.log("c2")
	})
	$('.c3').click(function(){
		console.log("c3")
	})
	$('.c4').click(function(){
		console.log("c4")
	})

	$('i').click(function(){
		window.location.href = "index.html";
	})
})