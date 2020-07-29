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
        var checkLogin = true;
        let userLogin = Students.filter( (student, index) =>{
            if($scope.user_name == student.username && $scope.password == student.password){
                localStorage.setItem('user_name', $scope.user_name);
                localStorage.setItem('index_user', index);
                
                $rootScope.userNameLoginSuccess = $scope.user_name;
                window.location.href = "#/";
                return;
            }
        });
        if(checkLogin){
            $scope.notification('Tài khoản hoặc mật khẩu không chính xác');
        }

        // console.log(userLogin);
        // console.log([$scope.user_name, $scope.password]);
    }
    $scope.notification = (text = '', className = 'alert-danger', checked = false)=> {
        $scope.error = {
            checked: checked,
            className: className,
            text: text
        }
    }
})
