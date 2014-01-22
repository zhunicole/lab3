'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript has taken control");
		$('#testjs').text("Please wait...");
		//$(".jumbotron p").addClass("active");
		$(".jumbotron p").toggleClass("active");

		
	});
	$("#submitBtn").click(updateProject);
	$("a.thumbnail").click(projectClick);
}

	

function updateProject(e){
	var projectID = $('#project').val();
	$(projectID).animate({
  		width: $('#width').val()
	});

	var newText = $('#description').val();
	$(projectID + " .project-description").text(newText);
}
	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);

function projectClick(e) {
	//prevent page form reloading
	// console.log("Project clicked");
	e.preventDefault();
	// $(this).css("background-color", "#7fff00");

	var projectTitle = $(this).find("p").text();
	var jumbotronHeader = $(".jumbotron h1");
	jumbotronHeader.text(projectTitle);

	var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");
	if (description.length==0) {
		$(containingProject).find(".project-description").show();
		$(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
	} else {
		$(containingProject).find(".project-description").hide();
	}
}
