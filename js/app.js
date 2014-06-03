'use strict';

var app = angular.module('app', ['ui.router'])

.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {

	$locationProvider.html5Mode(true);

	$stateProvider

		// Wall
		.state('app', {
			url: '',
			abstract: true,
			views: {
				// 'nav': {
				// 	templateUrl: '/partials/app.nav.html'
				// },
				'main': {
					templateUrl: '/partials/app.main.html'
				},
			}
		})

		.state('app.wall', {
			url: '/wall',
			views: {
				'nav': {
					template: 'NAV WALL'
				},
				'sidebar-left': {
					template: 'SIDEBAR-LEFT WALL'
				},
				'timeline': {
					template: 'TIMELINE WALL'
				},
				'sidebar-right': {
					template: 'SIDEBAR-RIGHT WALL'
				}
			}
		})

		.state('app.settings', {
			url: '/settings',
			views: {
				'nav': {
					template: 'NAV SIDEBAR'
				},
				'sidebar': {
					template: 'SETTINGS SIDEBAR'
				},
				'timeline': {
					template: '<div ui-view=""></div>'
				}
			}
		})

		.state('app.settings.dashboard', {
			url: '/settings',
			views: {
				'nav': {
					template: 'NAV SIDEBAR'
				},
				'sidebar': {
					template: 'SETTINGS SIDEBAR'
				},
				'timeline': {
					template: 'SETTINGS TIMELINE'
				}
			}
		})

});
