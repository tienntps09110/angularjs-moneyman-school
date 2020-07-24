app.controller('login', ($scope, $rootScope)=> {
    $rootScope.checkedColQuiz = false;
    $scope.user_name = '';
    $scope.password = '';
    $scope.error = {};
    if(localStorage.getItem('user_name') && localStorage.getItem('user_name').length > 0){
        window.location.href = "#/";
    }    
    $scope.login = ()=> {
        if($scope.user_name.length <= 0 || $scope.password.length <= 0){
            $scope.notification('Vui lòng không để trống tài khoản và mật khẩu');
            return;
        }
        let userLogin = Students.filter(student =>{
            if($scope.user_name == student.username && $scope.password == student.password){
                localStorage.setItem('user_name', $scope.user_name);
                $rootScope.userNameLoginSuccess = $scope.user_name;
                window.location.href = "#/";
                $scope.notification('Đăng nhập thành công', 'alert-success');
                return;
            }
        });

        console.log(userLogin);
        console.log([$scope.user_name, $scope.password]);
    }
    $scope.notification = (text = '', className = 'alert-danger', checked = false)=> {
        $scope.error = {
            checked: checked,
            className: className,
            text: text
        }
    }
})
