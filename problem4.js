/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here


var fileNameArray = fileName.split(".")
fileNameArray = fileNameArray[fileNameArray.length - 1]

if(fileName[0] === "#" || fileNameArray === "pdf" || fileNameArray === "docx" ){
    console.log("Store")
}
else{
    console.log("Delete")
}


