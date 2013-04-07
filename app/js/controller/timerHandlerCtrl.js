"use strict";

timerApp.controller('TimerHandlerCtrl', function ($rootScope, $scope) {
    var isStopped = false, timer, addEvents;

    $scope.timerStatus = '';
    $scope.startStatus = 'Stop';

    $rootScope.$on('timer_initialized', function() {
        timer = angular.element('.timer').scope();
        addEvents();
    });

    addEvents = function() {
        timer.$on('timer_started', function() {
            $scope.startStatus = 'Stop';
            $scope.timerStatus = 'Started';
            isStopped = false;
        });

        timer.$on('timer_stopped', function() {
            $scope.startStatus = 'Start';
            $scope.timerStatus = 'Stopped';
            isStopped = true;
        });

        timer.$on('timer_ended', function() {
            $scope.startStatus = 'Start';
            $scope.timerStatus = 'Timer Ended!';
            isStopped = true;
        });
    };

    $scope.restart = function() {
        timer.restart();
    };

    $scope.toggleStop = function() {
        timer[isStopped? 'start': 'stop']();
    };
});
