app.controller('change-password', ($scope, $rootScope)=> {
    $rootScope.checkedColQuiz = false;
    $scope.oldPassword = '';
    $scope.newPassword = '';
    $scope.confirmPassword = '';
    
    $scope.changePassword = ()=> {
        if( $scope.oldPassword.length == 0 ||
            $scope.newPassword.length == 0 ||
            $scope.confirmPassword.length == 0){

            $scope.notification('Vui lòng nhập đầy đủ thông tin');
            return;
        }

        let user = Students.filter(student =>  $rootScope.userNameLoginSuccess == student.username);
        if($scope.oldPassword != user[0].password){
            $scope.notification('Mật khẩu cũ không chính xác');
            return;
        }
        if($scope.newPassword != $scope.confirmPassword){
            $scope.notification('Xác nhận mật khẩu không chính xác');
            return;
        }
        $scope.oldPassword = '';
        $scope.newPassword = '';
        $scope.confirmPassword = '';
        $scope.notification('Đổi mật khẩu thành công', 'alert-success');
    }
    $scope.notification = (text = '', className = 'alert-danger', checked = false)=> {
        $scope.error = {
            checked: checked,
            className: className,
            text: text
        }
    }
})