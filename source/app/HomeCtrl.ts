/// <reference path='_all.ts' />
module todos {
    'use strict';
    
    export class HomeCtrl {
        constructor($scope, private $mdMedia, smoothScroll) {
            
            $scope.scrollTo = (id) => {
                var element = document.getElementById(id);
                var opts = {
                    duration: 1000,
                    easing: 'easeOutQuart',
                    offset: 20
                };
                smoothScroll(element, opts);
            }
            
            $scope.gtXs = () => {
                return this.$mdMedia('gt-xs');
            }
        }
    }
    
    angular.module('anaBoca').controller('HomeCtrl', HomeCtrl);
}