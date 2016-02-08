/// <reference path='_all.ts' />
module app {
    'use strict';
    
    export class HomeCtrl {
        static $inject = ['$scope', '$mdMedia', 'smoothScroll']
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
            
            $scope.gtMd = ()=>{
                return this.$mdMedia('gt-md');
            }
        }
    }
}