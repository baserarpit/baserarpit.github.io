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
											'title' 		: 'VFFIX'
											,'company'		: 'Amdocs - Vodafone'
											,'description' 	: 'VFFIX is to support Vodafone UK Fixed Network project. It uses Amdocs CRM and ordering system. It's main functionalities are to master the customer data and to provide Order Management.'
															+ '<br/>My Contribution:'
															+ '<br/>\t-Analysed & Fixed various CRM, OMS & Integration Issues'
											,'link'			: ''
											,'skills'		: ''
											},
											{	
											'title' 		: 'Claro-Columbia '
											,'company'		: 'Amdocs - Claro'
											,'description' 	: 'It is to support the mobile services for Claro-Columbia. It uses Amdocs CRM,Amdocs Ordering and SRM. Its main functionalities are to manage the subscribers and to master the customer data.'
											,'link'			: ''
											,'skills'		: ''
											},
											{	
											'title' 		: 'Online Gift Shop'
											,'company'		: 'Academic Project'
											,'description' 	: 'developed the website on Java language where users can purchase various gifts online.'
											,'link'			: ''
											,'skills'		: ''
											},
											{	
											'title' 		: 'E-HealthCare'
											,'company'		: 'Academic Project'
											,'description' 	: 'developed the website on Java language which provides various health-tips to the users and can determine the probable disease on the basis of symtoms provided by user.'
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
														+"<br/>I'm working with Amdocs at Gurgaon location since August 2014"
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
