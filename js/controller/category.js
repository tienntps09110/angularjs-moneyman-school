app.controller('category', ($scope, $rootScope, $routeParams) => {
    const onePage = 4;
    $scope.subjectsPage = [];
    $scope.page = parseInt($routeParams.page);
    $scope.pagination = Array(Subjects.length / onePage).fill({});
    
    var page = parseInt($scope.page);
    let itemStart = (page - 1) * onePage;
    let itemEnd = itemStart + 1;
    $scope.afterPage = {
        page: $scope.page - 1,
        checked() {
            if($scope.page == 1){
                return true;
            }
            return false;
        }
    };
    $scope.beforePage = {
        page: $scope.page + 1,
        checked() {
            if($scope.page == (Subjects.length / onePage)){
                return true;
            }
            return false;
        }
    };
    // console.log({itemStart, itemEnd});
    $scope.subjectsPage = Subjects.filter( (subject, index) =>
        index == itemStart ||
        index == itemEnd ||
        index == itemEnd + 1 ||
        index == itemEnd + 2
     );
    
    // console.log($scope.subjectsPage);
});

app.controller('categoryLayout', ($scope) => {
    $scope.subjects = Subjects;
});