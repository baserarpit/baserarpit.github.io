function focusOnInput() {
            //alert('test');
            document.getElementById('newInput').focus();
        }
document.getElementById("newInput").addEventListener("click", function (event) {
	//window.event.cancelBubble = true;
	event.stopPropagation();
});

var app = angular.module('Console', [ 'ngSanitize' ]);
		app.controller('consoleController',['$scope','$filter','$http','$sce', function($scope, $filter, $http) {
									$scope.userName = "baserarpit:~ $ ";
									$scope.history = [];
									$scope.commands = [
											 {'cmd' : 'hostname','description' : 'view a short introduction about me'}
											,{'cmd' : 'contact','description' : 'view my contact info'}
											,{'cmd' : 'resume','description' : 'open my resume in a new tab'}
											,{'cmd' : 'linkedin','description' : 'open my LinkedIn profile in a new tab'}
											,{'cmd' : 'projects','description' : 'display some of my projects with description'}
											,{'cmd' : 'clear','description' : 'clear the screen'}
											//,{'cmd' : 'exit', 'description' : 'closes this terminal window'}
											//,{ 'cmd': 'hire', 'description': 'initiate hiring protocol' }
									];
									//$scope.commands = $filter('orderBy')($scope.commands, 'cmd', false);
									function getCommandList() {
										var result = '<table>';
										angular.forEach($scope.commands,
												function(value, key) {
													result += "<tr><td>"+ value.cmd + "</td><td>: " + value.description + "</td></tr>";
												});
										result += '</table>';
										return result;
									};
									
									$scope.projects = [
										       {	
											'title' 		: 'TSTT'
											,'company'		: 'Ericsson'
											,'client'		: 'TSTT'
											,'description' 	        : 'This is telecom based project for Trinidad and Tobago country. It uses Ericsson Order Care (EOC), Ericsson Catalog Manager (ECM), Ericsson Multi Activation (EMA) tools for Order Capturing, Service Order Fulfillment and Activation of network elements over the real time network.'
											,'link'			: ''
											,'skills'		: ''
											},										
											{	
											'title' 		: 'ATTE'
											,'company'		: 'Amdocs'
											,'client'		: 'AT&T'
											,'description' 	        : 'It is to manage the mobile services for AT&T Enterprise which uses Amdocs Ordering, CRM and SRM. Its main functionalities are to provide Order Management, to master the customer data and to manage the subscribers.'
											,'link'			: ''
											,'skills'		: ''
											},
											{	
											'title' 		: 'VFFIX'
											,'company'		: 'Amdocs'
											,'client'		: 'Vodafone UK'
											,'description' 	        : 'VFFIX is to manage Vodafone UK Network project which uses ordering system and CRM. Its main functionalities are to provide Order Management and to master the customer data.'
											,'link'			: ''
											,'skills'		: ''
											}										
											
									];
									function getProjectList(){
										var result = '<table class="projects">';
										angular.forEach($scope.projects,
												function(project, key) {
													var pdescription = project.description;
													if (project.link != '') pdescription = "<a href='"+project.link+"' target='_blank'>"+project.link+"</a><br/>"+project.description;
													result += "<tr><td class='pre'>"+ project.title + "</td><td>" + pdescription + "</td></tr>";
													result += "<tr><td class='pre'> </td><td> </td></tr>";
												});
										result += '</table>';
										return result;
									};
									$scope.submit = function() {
										if ($scope.newInput==null) $scope.newInput = '';
										$scope.newInput = $scope.newInput.trim();
										if (true) {
											var input = $scope.newInput.toLowerCase();
											var result;
											switch (input) {
											case '':
											case null:
												result = '';
												break;
											case 'contact':
												result 	= "mobile\t: (+91) 9654999559"
														+ "<br/>email\t\t: baserarpit@gmail.com<br/>";
												break;
											case 'hostname':
												result = "Hello there! I'm Arpit Baser "													       
													        +"<br/>Experience:"
														+"<br/>I'm working with Ericsson at Pune location since May 2017"
													        +"<br/>I have worked with Amdocs from August 2014 to May 2017"													        
													        +"<br/>Higest Education:"
														+"<br/>I have done B.E. in computer science stream from Indore (M.P)"
														+"<br/>"
														+"<br/>";
												break;
											case 'resume':
												document.getElementById('link_resume').click();
												break;
											case 'linkedin':
												document.getElementById('link_linkedin').click();
												result = "profile opened in new tab"
												break;
											
											case 'help':
												result = getCommandList();
												break;
											case 'projects':
												result = "List of some of my projects and their descriptions:<br/>"
														+getProjectList();
												break;
											case 'exit':
												window.open('','_self').close();
												//window.close();
												break;
											default:
												result = '-bash:\tcommand not found: '
														+ $scope.newInput
														+ '<br/>\t\tuse \'help\' to show list of available commands <br/>';
											}
											$scope.history.push({
												'cmd' : $scope.newInput,
												'result' : result
											});
											if ($scope.newInput == 'clear') {
												$scope.history = [];
											}
											$scope.newInput = '';
										}
									};
									$scope.getHTML = function(x) {
										return x;
									}
		}]);
		
/*		
var intervalId = setInterval(function() {
		document.getElementById('newInput').focus();
	}, 50);
window.addEventListener("focus", function() {
	intervalId = setInterval(function() {
		document.getElementById('newInput').focus();
	}, 50);
});
window.addEventListener("blur", function() {
	clearInterval(intervalId);
});
*/
