function test(){
    const message = document.getElementById("p01");
    message.innerHTML= "";
    let x = document.getElementById("demo").value;
    try{
        if(x.trim() == "") throw "empty";
        if(isNaN(x)) throw "Not a number";
        x = Number(x);
        if(x<5) throw "too low";
        if(5<=x<=10) throw "right number";
        if(x>10) throw "too high";
    }
    catch(err) {
        message.innerHTML = "Input is " + err;
    }
}