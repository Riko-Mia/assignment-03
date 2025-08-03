/** Problem 06 :  (Current Salary )  */
var experience = 40;
var startingSalary = 30000;
//write your code here


if(0 < experience && startingSalary <= 1e6 ){ // Experience and Starting Salary validation

    for( var i = 1; i <= experience; i++ ){
        startingSalary = startingSalary + (startingSalary / 100 * 5)
    }
    console.log(startingSalary.toFixed(2))
}




