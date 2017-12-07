$(function() {
	$("#createBurger").on("click", function(event) {
		event.preventDefault();
		var burger = $("#burger").val().trim();
		if (burger.length > 0) {
			var newBurger = {
				burger: $("#burger").val().trim()
			};
			console.log(newBurger);
			$.ajax("/api/burgers", {
				type: "POST",
				data: newBurger
			}).then(function() {
				console.log("Successfully created burger");
				location.reload();
			});
			$("#burger").val("");
		}
	});
	$(".devour").on("click", function(event) {
		var id = $(this).attr("id");
		$.ajax("/api/burgers/" + id, {
			type: "PUT",
		}).then(function() {
			console.log("Successfully devoured!");
			location.reload();
		});
	});
	$(".makeAnother").on("click", function(event) {
		var id = $(this).attr("id");
		$.ajax("/api/burgers/" + id, {
			type: "PUT",
		}).then(function() {
			console.log("Successfully devoured!");
			location.reload();
		});
	});
	$(".delete").on("click", function(event) {
		var id = $(this).attr("id");
		$.ajax("/api/burgers/" + id, {
			type: "DELETE",
		}).then(function() {
			console.log("Successfully deleted");
			location.reload();
		}); 
	});
});