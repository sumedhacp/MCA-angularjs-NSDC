var app = angular.module('campus360', []);

app.controller("dashboardcontroller", function ($scope) {

    $scope.collegename = "FISaT";
    $scope.totalstudents = 1200;
    $scope.totalfaculty = 85;

    $scope.students = [
        "Sumedha",
        "Smruthi",
        "Hiba",
        "Nazeeya"
    ];

    $scope.showstudents = false;
    $scope.showDashboard = true;

    $scope.fees = 25600;
    $scope.today = new Date();

    $scope.departments = [

        "CSE",
        "MCA",
        "MBA",
        "BBA",
        "EEE",
        "IMCA"

    ];

    $scope.selectedDepartment = "MCA";

    $scope.isDisabled = true;

    $scope.allowAdmission = function () {

        $scope.isDisabled = false;

    };

    $scope.isReadOnly = true;

    $scope.toggleReadOnly = function () {

        $scope.isReadOnly = !$scope.isReadOnly;

    };

    $scope.addstudent = function () {

        $scope.totalstudents++;
    };

    $scope.addfaculty = function () {
        $scope.totalfaculty++;
    };

    console.log("Dashboard controller is loaded");
});