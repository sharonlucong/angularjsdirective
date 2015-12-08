angular.module('myApp')
    .directive('momentumNav', function() {
        return {
            restrict: 'E',
            transclude: true,
            template: '<div class="navBg"></div>' + '<ng-transclude></ng-transclude>',
        }
    })
    .directive('navItem', function($state) {
        return {
            restrict: 'E',
            compile: function compile(tElement) {
                tElement.addClass('navItem');
                return this.link;
            },
            link: function(scope, element, attrs) {

                element.bind('click', function() {
                    $state.go(attrs.url);
                });

                scope.$on('$stateChangeStart',
                    function(event, toState, toParams, fromState, fromParams) {
                        if(toState.name === attrs.url){
                        	element.addClass('active');
                        }else{
                        	element.removeClass('active');
                        }
                    });
            }

        }
    })
    .directive('navHeader', function($state) {
        return function(scope, element, attrs) {
            element.addClass('navHeader');
            element.bind('click', function() {
                $state.go('home');
            });
        }
    });
