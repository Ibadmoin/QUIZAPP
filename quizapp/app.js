

// join python btn
function quizPython(){
    window.location.href="pagepython.html"
   
}
// join webdev btn
function quizWebDev(){
    window.location.href ="webdev.html";
}
// drop down functionality



//keyfuntionality for test python
function enterKeyPython(){
    const testDetails = document.getElementById("testDetails");
    // console.log(testDetails);
    testDetails.classList.add("hidden");
    document.getElementById("keyDiv").classList.remove("hidden");
}


// key validation python

function sumbitKeyPython() {
    const key = document.getElementById("testKey").value;
    console.log(key);
    if(validateKey(key)){
        console.log("success");
        // python test
        // python test
    } else {
       document.getElementById("incorrectDiv").classList.remove("hidden");

    }

}

//keyfuntionality for test webdev
function enterKeyHTMl() {
    const testDetails = document.getElementById("testDetails");
    // console.log(testDetails);
    testDetails.classList.add("hidden");
    document.getElementById("keyDiv").classList.remove("hidden");
}
//key validation for test webdev
function sumbitKeyHTML(){
    const key = document.getElementById("testKey").value;
    console.log(key);
    if(validateKey(key)){
        console.log("success");
        // html test
        // html test
    } else {
       document.getElementById("incorrectDiv").classList.remove("hidden");

    }
}



// setkey 
function validateKey(key){
    if(key == "test123"){
        return true;}
        else{
            return false;
        }
}
