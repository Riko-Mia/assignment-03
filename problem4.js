/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here


var fileNameArray = fileName.split(".")
fileNameArray = fileNameArray[fileNameArray.length - 1]   // when i don't know how many index of array then (fileNameArray.length - 1) it's called this array last index.
//fileNameArray = fileNameArray[1] // When i know filNameArray has 2 index then directly set array index.


if(fileName[0] === "#" || fileNameArray === "pdf" || fileNameArray === "docx" ){
    console.log("Store")
}
else{
    console.log("Delete")
}


