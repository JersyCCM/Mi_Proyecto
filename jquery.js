//Se usa esta función para ejecutar funciones una vez cargada en su totalidad una página web (DOM).
$(document).ready( function() {
	//seleccionamos una collección con todos los elementos h1 y la guardamos en una variable
	let h1 = $('h1');
	

	//asociamos una función al hacer click a cualquier elemento h1
	h1.on('click',  function() {
		console.log('Hiciste click en un elemento h1');
	})

	$('#form').on('submit', function(e) {
		e.preventDefault();
		let nombre = $('#nombre').val();
		console.log(nombre);
		
	})

	$('#form').on('submit', function(e) {
		e.preventDefault();
		let email = $('#email').val();
		console.log(email);
		
	})

	$('#form').on('submit', function(e) {
		e.preventDefault();
		let Consultas = $('#Consultas').val();
		console.log(Consultas);
		})


})


$(function(){
  $("#start").click(function(){
	$("h2").animate({fontSize: '2em'}, "slow");
	$("h2").animate({height: 300 }, 3000);
  });

  
});



