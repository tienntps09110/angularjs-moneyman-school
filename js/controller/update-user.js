app.controller('update-user', ($scope, $rootScope)=> {
    $rootScope.checkedColQuiz = false;
    $scope.error = {};
    if(localStorage.getItem('user_name') == null){
        window.location.href = "#/login";
        return;
    }
    let user = Students.filter(student => localStorage.getItem('user_name') == student.username)[0];

    $scope.user = {
        "user_name":  $rootScope.userNameLoginSuccess,
        "fullname": user.fullname,
        "email": user.email,
        "gender": user.gender,
        "birthday": user.birthday,
        "schoolfee": user.schoolfee,
        "marks": user.marks
    }

    $scope.save = ()=> {
        var index = localStorage.getItem('index_user');
        Students[index] =     {
            "username": Students[index].username,
            "password": Students[index].password,
            "fullname": $scope.user.fullname,
            "email": $scope.user.email,
            "gender": $scope.user.gender,
            "birthday": $scope.user.birthday,
            "schoolfee": "2000000",
            "marks": "0"
        };
        // console.log( $scope.user);  
        $scope.notification('Cập nhật thông tin thành công', 'alert-success');   
    }
    $scope.notification = (text = '', className = 'alert-danger', checked = false)=> {
        $scope.error = {
            checked: checked,
            className: className,
            text: text
        }
    }
})