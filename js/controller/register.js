app.controller('register', ($rootScope, $scope)=> {
    $rootScope.checkedColQuiz = false;

    $scope.register = ()=> {
        Students.push({
            "username": $scope.user_name,
            "password": $scope.password,
            "fullname": "",
            "email": $scope.email,
            "gender": "true",
            "birthday": $scope.date,
            "schoolfee": "1500000",
            "marks": "5"
        })
        $scope.user_name = ''
        $scope.email = ''
        $scope.password = ''
        $scope.confirmPassword = ''
        $scope.date = ''

        $scope.notification('Đăng kí tài khoản thành công', 'alert-success')
    }

    $scope.notification = (text = '', className = 'alert-danger', checked = false)=> {
        $scope.error = {
            checked: checked,
            className: className,
            text: text
        }
    }
})