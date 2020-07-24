app.controller('quiz', ($scope, $rootScope, $routeParams)=> {
    $rootScope.checkedColQuiz = true;
    $rootScope.scope = 0;
    $scope.checked = false;
    $rootScope.index = 0;
    $rootScope.titleButton = 'Tiếp';
    $scope.chooseAnswer = 0;
    $scope.result = [];
    $scope.checkedLastAnswer = false;
    $scope.start = true;
    $scope.showResult = false;
    $scope.hiddenResult = true;
    $scope.timeCountDown = 0;
    let code = $routeParams.code;
    let quiz = window[code];
    let checkLogin  = localStorage.getItem('user_name');
    console.log(checkLogin);
    if(checkLogin.length == 0){
        window.location.href = "#/";
    }
    $scope.nameQuiz = Subjects.filter(subject => subject.Id == code);

    $rootScope.total = quiz.length;
    $rootScope.markTotal = 0;

    $rootScope.quiz =quiz[$rootScope.index];
    $rootScope.indexQuiz = $rootScope.index + 1;

    $scope.nextQuestion = () => {
        // console.log($scope.chooseAnswer);
        if($scope.checkedLastAnswer){
            return;
        }
        if($rootScope.index == ($rootScope.total - 1)){
            $scope.checkedLastAnswer = true;
            $scope.addResult($rootScope.quiz.Text, $scope.chooseAnswer, $rootScope.quiz.AnswerId, $rootScope.quiz.Answers);
            $scope.chooseAnswer = 0;
            $rootScope.index += 1;
            $scope.checked = false;
            $scope.start = false;
            return;
        }
        if($rootScope.index == ($rootScope.total - 2)){
            $scope.titleButton = 'Hoàn thành';

        }
        if(parseInt($scope.chooseAnswer) == 0){
            return;
        }
        $rootScope.index += 1;
        // console.log($rootScope.index);
        $scope.addResult($rootScope.quiz.Text, $scope.chooseAnswer, $rootScope.quiz.AnswerId, $rootScope.quiz.Answers);
        $rootScope.quiz =quiz[$rootScope.index];
        $rootScope.indexQuiz = $rootScope.index + 1;
        $scope.chooseAnswer = 0;
    }
    $scope.startGame = ()=> {
        $scope.checked = true;
        $scope.clockCountDown();
    }
    $scope.showResultMethod = ()=> {
        $scope.checked = false;
        $scope.start = false; 
        $scope.showResult = true;
        $scope.hiddenResult = false;
        $scope.checkedLastAnswer = true;
        // console.log($scope.result);
    }
    $scope.addResult = (question = '', idYouChoose = '', idSuccess = '', Answers = [])=> {
        let status = false;
        if(idYouChoose == idSuccess) {
            status = true;
            $rootScope.markTotal +=1;
        }
        $scope.result.push({
            question: question,
            idYouChoose: idYouChoose,
            status: status,
            idSuccess: idSuccess,
            Answers: Answers
        });
    }
    $scope.clockCountDown = ()=> {
        var fiveMinutes = 60 * 10;
        display = document.querySelector('#clock');
        $scope.startTimer(fiveMinutes, display);
        $scope.timeCountDown += 1;
    }

    $scope.startTimer = (duration, display)=> {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds ;
    
            if (--timer < 0) {
                timer = duration;
                $scope.showResultMethod();
            }
        }, 1000);
    }

});