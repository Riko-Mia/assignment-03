/** Problem -03 ( Medicine Planner ) */
var lastDay = 11 ;
//write your code here


var days = 3

if(0 < lastDay && lastDay <= 31 ){

    for( var i = 1; i <= lastDay; i++ ){
        if( i % days === 0 ){
            console.log(i + " - medicine")
            
        }
        if( i % days !== 0 ){
            console.log(i + " - rest")   
        }
    }
}

