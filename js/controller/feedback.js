app.controller('feedback', ($scope, $rootScope)=> {
    $rootScope.checkedColQuiz = false;

    $scope.sendFeedBack = ()=> {
        $scope.name = ''
        $scope.email = ''
        $scope.title = ''
        $scope.message = ''
        $scope.notification('Cám ơn bạn đã gửi góp ý về cho MONEY MAN', 'alert-success')
    }
    
    $scope.notification = (text = '', className = 'alert-danger', checked = false)=> {
        $scope.error = {
            checked: checked,
            className: className,
            text: text
        }
    }
})