angular.module('Enes')
    .factory('schoolrecordFactory', function (HOST, $http) {
        return{
            getTransac : function(){
                return $http.get(HOST + 'api/v1/recordstype')
            },
            getStudentRecords : function(){
                console.log('llego a la factory');
                return $http.get(HOST + 'api/v1/recordsStudent')
            },
            getAllData : function(){
                return $http.get(HOST+'api/v1/allrecords')
            },
            save : function(record){
                console.log(record);
                return $http.post(HOST+'api/v1/records', record)
            },
            update : function(record){
                return $http.put(HOST+'api/v1/records', record)
            },
            delete : function(record){
                return $http.put(HOST+'api/v1/recorddelete', record)
            }
        }
    });