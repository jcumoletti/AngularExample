angular.module( 'ngBoilerplate.about', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'details', {
    url: '/details',
    views: {
      "main": {
        controller: 'DetailsCtrl',
        templateUrl: 'details/details.tpl.html'
      }
    },
    data:{ pageTitle: 'Gimme Some More?' }
  });
})

.controller( 'DetailsCtrl', function AboutCtrl( $scope ) {

})

;
