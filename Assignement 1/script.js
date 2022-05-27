/*
	WEB 303 Assignment 1 - jQuery
	{Gurjant Singh}
*/

$(document).ready(function() {
	$("label").keyup(function() {
		let getPrice = $("#price").val();
		let tax = getPrice * 0.13;
		$("#tax").text("$" + tax.toFixed(2));
		console.log("tax", tax)
		$("add-price").onclick(function(){
			let addPrice= tax + getPrice
			console.log("price" , addPrice)
			$("#price-list").text(addPrice)
		})
	});
	
});