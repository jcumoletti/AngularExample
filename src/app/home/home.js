/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'ngBoilerplate.home', [
  'ui.router',
  'plusOne'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'HomeCtrl', function HomeController( $scope,entryFactory ) {
	
	$scope.entries = [];
	$scope.entry = {};
	
	function init(){
		$scope.entries = entryFactory.getEntries();
	}
	
	$scope.addEntry = function(){
		//handle edits and new make sure data form passes validation
		if($scope.validateForm){
			//handle new
			if(typeof($scope.entry.entryId)=='undefined'){				
				$scope.entries.push({entryId:entryFactory.getNextKey(),entryLabel:$scope.entry.entryLabel,entryLink:$scope.entry.entryLink,entryDescription:$scope.entry.entryDescription});	
				//address storage
				entryFactory.createEntry(updatedEntry);
			}
			//handle update
			else{				
				var updatedEntry = {entryId:$scope.entry.entryId,entryLabel:$scope.entry.entryLabel,entryLink:$scope.entry.entryLink,entryDescription:$scope.entry.entryDescription};	
				angular.forEach($scope.entries,function(entry,index){
					if(entry.entryId == $scope.entry.entryId){
						$scope.entries[index] = updatedEntry;
						//address storage
						entryFactory.updateEntry(updatedEntry);
						
					}
				});				
			}
			//clear form
			$scope.entry = [];
		}
	};
	
	//handle delete	
	$scope.removeEntry = function(entryId){		
		angular.forEach($scope.entries, function(entry, index) {
			if(entry.entryId == entryId){
				//remove from interface
				$scope.entries.splice(index, 1);
				//delete in storage
				entryFactory.removeEntry(entryId);				
			}
		});
	};
	
	$scope.editEntry = function(entryId){
		console.log("Searching " + entryId);
		$scope.entry = [];
		angular.forEach($scope.entries, function(entry, index) {
			if(entry.entryId == entryId){
				console.log('FOUND');
				$scope.entry={entryId:entry.entryId,entryLabel:entry.entryLabel,entryLink:entry.entryLink,entryDescription:entry.entryDescription};
				
			}
		});

	};
	
	$scope.clear = function(){
		$scope.entry = [];
	};
	//make sure there is some data worth saving
	//just ensures that label and link arent empty 
	$scope.validateForm = function(){
		var valid = false;
		if(typeof($scope.entry.entryLabel) != "undefined" && typeof($scope.entry.entryLink) != "undefined" && $scope.entry.entryLabel.length > 0  && $scope.entry.entryLink.length > 0){
			valid = true;
		}
		return valid;
	};
	init();

})
/*
 * Here would be where the actual saved data would be fetched. 
 * 
 */
.factory('entryFactory',function(){
	var factory = {};
	var entries = [{entryId:0,entryLabel:"Google",entryLink:"www.google.com",entryDescription:"google"}];
	
	factory.getEntries = function(){
		return entries;
	};
	
	//Since there is no backend with database keys we will fake it here 
	//needs to be accounted for since we can delete and add rows
	var fakePrimaryKey = 0;
	factory.getNextKey = function(){		
		fakePrimaryKey++;
		console.log('GET NEXT ' + fakePrimaryKey);
		return fakePrimaryKey;		
	};
	
	//Handle new wherever storage is
	factory.createEntry = function(entry){
		console.warn("entryFactory.createEntry not complete");
	};
	
	//Handle save wherever storage is
	factory.updateEntry = function(entry){
		console.warn("entryFactory.updateEntry not complete");
	};
	
	//Handle delete wherever storage is 
	factory.removeEntry = function(entryId){
		console.warn("entryFactory.removeEntry not complete");
	};
	return factory;
})
;

