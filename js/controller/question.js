app.controller('question', ($scope, $rootScope)=> {
    $rootScope.checkedColQuiz = false;
    $scope.questions = Questions;
    
    // console.log(Questions);
});