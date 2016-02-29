angular.module('Enes')
    .factory('userFactory', function (HOST, $http) {
        return{
            getAllTeachers : function(){
                return $http.get(HOST+'api/v1/teachers')
            },
            save : function(teacher){
                return $http.post(HOST+'api/v1/teachers', teacher)
            },
            update : function(teacher){
                return $http.put(HOST+'api/v1/teachers', teacher)
            },
            delete : function(teacher){
                return $http.delete(HOST+'api/v1/teachers/'+teacher.id)
            }
        }
    });