app.controller('forgot-pass', ($scope, $rootScope)=> {
    $rootScope.checkedColQuiz = false;
    $scope.getPass = ()=> {
        let userName = $scope.user_name
        let email = $scope.email

        let user = Students.filter(student =>  userName == student.username && email == student.email);
        
        if(user.length == 0){
            $scope.notification('Tài khoản hoặc email không khớp')
            return;
        }
        console.log(user.length)
        
        $scope.notification(`Mật khẩu của bạn là: ${user[0].password}`, 'alert-success')

    }
    $scope.notification = (text = '', className = 'alert-danger', checked = false)=> {
        $scope.error = {
            checked: checked,
            className: className,
            text: text
        }
    }
})