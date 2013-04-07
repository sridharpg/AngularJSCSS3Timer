"use strict";

timerApp.controller('TimerHandlerCtrl', function ($rootScope, $scope) {
    var isStopped = false, timer, addEvents;

    $scope.timerStatus = '';

    $rootScope.$on('timer_initialized', function() {
        timer = angular.element('.timer').scope();
        addEvents();
    });

    addEvents = function() {
        timer.$on('timer_started', function() {
            $scope.timerStatus = 'Started';
        });

        timer.$on('timer_stopped', function() {
            $scope.timerStatus = 'Stopped';
        });

        timer.$on('timer_ended', function() {
            $scope.timerStatus = 'Timer Ended!';
        });
    };


    $scope.startStatus = 'Stop';

    $scope.restart = function() {
        $scope.startStatus = 'Stop';
        timer.restart();
    };

    $scope.toggleStop = function() {
        timer[isStopped? 'start': 'stop']();
        isStopped = !isStopped;
        $scope.startStatus = isStopped? 'Start': 'Stop';
    };
});