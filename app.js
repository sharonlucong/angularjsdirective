var myApp = angular.module('myApp', ['ui.router', 'ngAnimate']);

myApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('photography', {
            url: '/photography',
            templateUrl: 'partials/photography.html'
        })
        .state('blog', {
            url: '/blog',
            templateUrl: 'partials/blog.html'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'partials/contact.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'partials/about.html'
        })
        .state('readme', {
            url: '/readme',
            templateUrl: 'partials/readme.html'
        })
        .state('home',{
            url: '/',
            templateUrl: 'partials/default.html'
        });

});
