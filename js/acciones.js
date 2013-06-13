// JavaScript Document
function LoginConectar (U, P)
{
	datos= "usuario=" +U+ "&paswsword" +P;
	$.ajax({
		type: "POST",
		url: "192.168.1.195/Siio6/Log_in_m.php" ,
		data: datos
	}).done(function(msg){
		alert(msg);
		if(msg=="" || msg==null)
		{
			alert("usuario incorrecto")
		}
		else
		{
			("Bienvenido")
		}
	});
}
	
$(document).ready(function(e) {
    document.addEventListener("deviceready",function(){
		$('Enviar').tap(function(){
			var formulario=$(this).parent('form');
			var usuario= formulario.children('input:eq(0)').val();
			var password= formulario.children('input:eq(1)').val();
			LoginConectar(usuario,password);			
			});//tap
			});//deviceready
			
});//ready