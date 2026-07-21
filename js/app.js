var app = angular.module('campus360', []);

app.controller("dashboardcontroller", function ($scope) {

    $scope.collegename = "FISAT";
    $scope.totalstudents = 1200;
    $scope.totalfaculty = 85;

    $scope.students = [

        "sumedha", "smruthi", "hiba", "nazeeya"

    ];

    $scope.addstudent = function () {

        $scope.totalstudents++;

    };

    console.log("dashboard controller is loaded");
});

