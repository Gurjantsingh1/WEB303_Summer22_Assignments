/*
	WEB 303 Assignment 1 - jQuery
	{Gurjant Singh}
*/


$(document).ready(function(){
	$("#income,#wealth").keyup(function(){
		var tax = (($("#income").val())*0.35)+(($("#wealth").val())*0.25)
		$("#tax").val(tax);
	});   

});