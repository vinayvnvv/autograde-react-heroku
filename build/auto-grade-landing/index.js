// nav toggle
var tableData = [
					{name: "Collaborative Grading", solo: true, team: true, institution: true},
					{name: "Unlimited Course Staff", solo: true, team: true, institution: true},
					{name: "Assignments Stats", solo: true, team: true, institution: true},
					{name: "Regrade Requests", solo: true, team: true, institution: true},
					{name: "Full Grade Export", solo: true, team: true, institution: true},
					{name: "Late Submissions", solo: true, team: true, institution: true},
					{name: "Code Autograder Platform", solo: true, team: true, institution: true},
					{name: "Bubble Sheet Assignments", solo: false, team: true, institution: true},
					{name: "Text Anotations", solo: false, team: true, institution: true},
					{name: "Support", solo: false, team: true, institution: true},
					{name: "Basic Email Support", solo: false, team: false, institution: true},
					{name: "Dedicated Support", solo: false, team: false, institution: true},
					{name: "4 business hr response time", solo: false, team: false, institution: true},
					{name: "Integrations & Extras", solo: false, team: false, institution: true},
					{name: "Lms Integration", solo: false, team: false, institution: true},
					{name: "Caliper Student Analytics", solo: false, team: false, institution: true},
					{name: "Customer Service Agreement", solo: false, team: false, institution: true},
					{name: "Collaborative Grading", solo: false, team: false, institution: true},
				];
$(document).ready(function() {



  function navToggleListen() {
  	$(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  	});
  }

  function appendTableData() {
  	// table data append
  	var tableBodyHtml = "";
  	tableData.forEach((item) => {
  		var td = "";
  		td += "<td>" + item.name + "</td>";
  		if(item.solo) td += "<td><i class='fas fa-check'></i></td>";
  		else td += "<td></td>";
  		if(item.team) td += "<td><i class='fas fa-check'></i></td>";
  		else td += "<td></td>";
  		if(item.institution) td += "<td><i class='fas fa-check'></i></td>";
  		else td += "<td></td>";
  		var tr = "<tr>" + td + "</tr>";
  		tableBodyHtml += tr;
  	});

  	console.log(tableBodyHtml);

	$("#table-data").append(tableBodyHtml);
  }


  function listenWindowScroll() {
  	window.addEventListener('scroll', (e) => {
  		if($(".banner").outerHeight() < window.scrollY) {
  			console.log('toched top');
  			$(".navbar").addClass("is-fixed");
  			$(".navbar").removeClass("is-primary");
  			$(".navbar").addClass("is-white");
  		} else {
  			console.log('released top');
  			$(".navbar").removeClass("is-fixed");
  			$(".navbar").addClass("is-primary");
  			$(".navbar").removeClass("is-white");
  		}
  		
  	})
  }

  navToggleListen();
  appendTableData();
  listenWindowScroll();




});