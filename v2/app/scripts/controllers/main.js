'use strict';

/**
 * @ngdoc function
 * @name v2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the v2App
 */
angular.module('v2App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
