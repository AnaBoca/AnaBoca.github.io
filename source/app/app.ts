/// <reference path='_all.ts' />
/**
*
* @type {angular.Module}
*/
module app {
    'use strict';
    angular.module('anaBoca', ['ngMaterial', 'angular-parallax', 'smoothScroll', 'ipsum'])
        .config(function($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('amber');
        })
        .controller('HomeCtrl', HomeCtrl);
}